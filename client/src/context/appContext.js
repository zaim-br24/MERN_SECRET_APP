import React, { useReducer, useContext } from "react";

import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  TOGGLE_DROPDOWN,
  TOGGLE_OVERLY,
  LOGOUT_USER,
  TOGGLE_SIDEBAR,
  CLOSE_DROPDOWN_OVERLY,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HIDE_RECOMMENDATIONS,
  DISPLAY_RECOMMENDATIONS,
  UPLOAD_REDOO_BEGIN,
  UPLOAD_REDOO_SUCCESS,
  UPLOAD_REDOO_ERROR,
  UPLOAD_VIDEO_BEGIN,
  UPLOAD_VIDEO_SUCCESS,
  UPLOAD_VIDEO_ERROR,
  GET_REDOOS_BEGIN,
  GET_REDOOS_SUCCESS,
  GET_VIDEOS_BEGIN,
  GET_VIDEOS_SUCCESS,
  GET_VIDEO_BEGIN,
  GET_VIDEO_SUCCESS,
  SET_PAGE,
} from "./actions";
import reducer from "./reducer";
import axios from "axios";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const location = localStorage.getItem("location");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: location || "",
  userRegistered: user && true,
  isDropdownOpen: false,
  isOverlyOpen: false,
  showSidebar: false,
  test: false,
  showRecommendations: true,
  title: "",
  image: null,
  content: "",
  tags: [],
  categories: [],
  redoos: [],
  numOfRedoosPages: 0,
  totalRedoos: "",
  page: 1,
  videos: [],
  numOfVideosPages: 0,
  totalVideos: "",
  videosPage: 1,
  video: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // axios
  const authFetch = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
    headers: {
      Authorization: `Bearer ${state.token}`,
      "Content-Type": "application/json",
      timeout: 30000,
    },
  });

  authFetch.interceptors.request.use(
    (config) => {
      // config.headers.common['Authorization'] = `Bearer ${state.token}`
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // response interceptor
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        console.log("AUTH ERROR");
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };
  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };
  const removeUserFromLocalStorag = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });

    try {
      const response = await authFetch.post("/auth/register", currentUser);
      const { user, token, location } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: {
          user,
          token,
          location,
        },
      });
      // // localStorage
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: {
          msg: error.response.data.msg,
        },
      });
    }
    clearAlert();
  };
  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });

    try {
      const { data } = await authFetch.post("auth/login", currentUser);
      const { user, token, location } = data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {
          user,
          token,
          location,
        },
      });
      // // localStorage
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: {
          msg: error.response.data.msg,
        },
      });
    }
    clearAlert();
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });

    try {
      const { data } = await authFetch.patch("/auth/updateUser", currentUser, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // no token
      const { user, token } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, location, token },
      });

      addUserToLocalStorage({ user, location, token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorag();
  };

  const hideReommendations = () => {
    dispatch({ type: HIDE_RECOMMENDATIONS });
  };
  const displayReommendations = () => {
    dispatch({ type: DISPLAY_RECOMMENDATIONS });
  };

  // ----------------- UPLOAD A REDOO
  const uploadRedoo = async (redoo) => {
    dispatch({ type: UPLOAD_REDOO_BEGIN });
    try {
      await authFetch.post("/redoos/submit", redoo);
      // const {title, image, content, tags, categories} = data

      dispatch({ type: UPLOAD_REDOO_SUCCESS });
    } catch (error) {
      dispatch({
        type: UPLOAD_REDOO_ERROR,
        payload: {
          msg: error.response.data.msg,
        },
      });
    }
    clearAlert();
  };
  // ------------ UPLOAD A VIDEO
  const uploadVideo = async (videoData) => {
    dispatch({ type: UPLOAD_VIDEO_BEGIN });
    try {
      await authFetch.post("/watchs/submit", videoData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // const {title, image, content, tags, categories} = data

      dispatch({ type: UPLOAD_VIDEO_SUCCESS });
    } catch (error) {
      dispatch({
        type: UPLOAD_VIDEO_ERROR,
        payload: {
          msg: error.response.data.msg,
        },
      });
    }
    clearAlert();
  };
  // ------ get redoos
  const getAllRedoos = async () => {
    dispatch({ type: GET_REDOOS_BEGIN });
    const { page } = state;
    let url = `/redoos?page=${page}`;

    try {
      const { data } = await authFetch.get(url);
      const { redoosData, numOfRedoosPages, totalRedoos } = data;
      dispatch({
        type: GET_REDOOS_SUCCESS,
        payload: {
          redoosData: [...state.redoos, ...redoosData],
          numOfRedoosPages,
          totalRedoos,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // ------ get videos
  const getAllVideos = async () => {
    dispatch({ type: GET_VIDEOS_BEGIN });
    const { videosPage } = state;
    let url = `/watchs?page=${videosPage}`;
    try {
      const { data } = await authFetch.get(url);
      const { videosData, totalVideos, numOfVideosPages } = data;
      dispatch({
        type: GET_VIDEOS_SUCCESS,
        payload: {
          videosData,
          numOfVideosPages,
          totalVideos,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  // ------ get videos
  const getOneVideo = async (videoId) => {
    dispatch({ type: GET_VIDEO_BEGIN });

    let url = `/watchs/${videoId}`;
    try {
      const { data } = await authFetch.get(url);
      const { video } = data;
      dispatch({ type: GET_VIDEO_SUCCESS, payload: { video } });
      // console.log(video.videoUrl[1])
      return video;
    } catch (error) {
      console.log(error);
    }
  };
  // --------- dropdown menu

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };
  const toggleDropdown = () => {
    dispatch({ type: TOGGLE_DROPDOWN });
  };
  const toggleOverly = () => {
    dispatch({ type: TOGGLE_OVERLY });
  };
  const closeDropdownOverly = () => {
    dispatch({ type: CLOSE_DROPDOWN_OVERLY });
  };

  const setPage = (page) => {
    dispatch({
      type: SET_PAGE,
      payload: {
        page,
      },
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        toggleDropdown,
        toggleOverly,
        logoutUser,
        toggleSidebar,
        closeDropdownOverly,
        updateUser,
        hideReommendations,
        displayReommendations,
        uploadRedoo,
        getAllRedoos,
        setPage,
        uploadVideo,
        getAllVideos,
        getOneVideo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState };
