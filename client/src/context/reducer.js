import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS, 
  LOGIN_USER_ERROR,
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
  SET_PAGE,
  GET_VIDEOS_BEGIN,
  GET_VIDEOS_SUCCESS,
  GET_VIDEO_BEGIN,
  GET_VIDEO_SUCCESS,

} from './actions'
import { initialState } from './appContext'

export default function reducer(state , action) {
  if(action.type ===TOGGLE_SIDEBAR){
    return{
      ...state,
      showSidebar: !state.showSidebar

    }
  }
  if(action.type === TOGGLE_DROPDOWN){
    return{
      ...state,
      isDropdownOpen: !state.isDropdownOpen
    }
  }
  if(action.type === TOGGLE_OVERLY){
    return{
      ...state,
      isOverlyOpen: !state.isOverlyOpen

    }
  }
  if(action.type === CLOSE_DROPDOWN_OVERLY){
    return{
      ...state,
      isOverlyOpen: false,
      isDropdownOpen: false,
      showSidebar:false
    }
  }
   if(action.type === DISPLAY_ALERT){
      return {...state,
        showAlert:true,
        alertText: "please provide all values!",
        alertType: "danger"
    }
   }
   if(action.type === CLEAR_ALERT){
        return {...state,
            showAlert:false,
            alertText: "",
            textType: ""
        }
   }
   if(action.type === REGISTER_USER_BEGIN){
     return{...state, isLoading: true}
   }
   if(action.type === REGISTER_USER_SUCCESS){
    return{
      ...state,
      isLoading: false,
      showAlert: true,
      alertType:"success",
      alertText: "User Created! Redirection...",
      user:action.payload.user,
      token:action.payload.token,
      userLoaction: action.payload.location,
      userRegistered: true
    }
   }
   if(action.type === REGISTER_USER_ERROR){
    return{
      ...state,
      isLoading:false,
      showAlert: true,
      alertType:"danger",
      alertText: action.payload.msg,
    }
  }
 if(action.type === LOGIN_USER_BEGIN){
    return{...state, isLoading: true}
  }
  
  if(action.type === LOGIN_USER_SUCCESS){
   return{
     ...state,
     isLoading: false,
     showAlert: true,
     alertType:"success",
     alertText: 'Login User. Redirecting...',
     user:action.payload.user,
     token:action.payload.token,
     userLoaction: action.payload.location,
     userRegistered: true

   }
  }
  if(action.type === LOGIN_USER_ERROR){
   return{
     ...state,
     isLoading:false,
     showAlert: true,
     alertType:"danger",
     alertText: action.payload.msg,
   }
 }
 if(action.type === LOGOUT_USER){
  return{
      ...initialState,
      user: null,
      token: null,
      location: '',
      jobLocation: '',
      isLoading:false,
  }
}
 if (action.type === UPDATE_USER_BEGIN) {
  return { ...state, isLoading: true }
}

if (action.type === UPDATE_USER_SUCCESS) {
  return {
    ...state,
    isLoading: false,
    token:action.payload.token,
    user: action.payload.user,
    userLocation: action.payload.location,
    showAlert: true,
    alertType: 'success',
    alertText: 'User Profile Updated!',
  }
}
if (action.type === UPDATE_USER_ERROR) {
  return {
    ...state,
    isLoading: false,
    showAlert: true,
    alertType: 'danger',
    alertText: action.payload.msg,
  }
}
if(action.type === HIDE_RECOMMENDATIONS){
  return{...state, showRecommendations: false}
}
if(action.type === DISPLAY_RECOMMENDATIONS){
  return{...state, showRecommendations: true}
}
  
if (action.type === UPLOAD_REDOO_BEGIN) {
  return { ...state, isLoading: true }
}

if (action.type === UPLOAD_REDOO_SUCCESS) {
  return {
    ...state,
    isLoading: false,
    showAlert: true,
    alertType: 'success',
    alertText: 'uploaded successfully',
  }
}
if (action.type === UPLOAD_REDOO_ERROR) {
  return {
    ...state,
    isLoading: false,
    showAlert: true,
    alertType: 'danger',
    alertText: action.payload.msg,
  }
}
if (action.type === UPLOAD_VIDEO_BEGIN) {
  return { ...state, isLoading: true }
}

if (action.type === UPLOAD_VIDEO_SUCCESS) {
  return {
    ...state,
    isLoading: false,
    showAlert: true,
    alertType: 'success',
    alertText: 'video uploaded successfully.',
  }
}
if (action.type === UPLOAD_VIDEO_ERROR) {
  return {
    ...state,
    isLoading: false,
    showAlert: true,
    alertType: 'danger',
    alertText: action.payload.msg,
  }
}
if (action.type === GET_REDOOS_BEGIN) {
  return { ...state, isLoading: true
    // , redoos:[],numOfRedoosPages:0, totalRedoos:3 
  }
}

if (action.type === GET_REDOOS_SUCCESS) {
  return {
    ...state,
    isLoading: false,
    // redoos: [...state.redoos,...action.payload.redoosData],
    redoos: action.payload.redoosData,
    numOfRedoosPages: action.payload.numOfRedoosPages,
    totalRedoos: action.payload.totalRedoos
    
  }
}
if(action.type === SET_PAGE){
  return{
    ...state, page: action.payload.page
  }
}

if (action.type === GET_VIDEOS_BEGIN) {
  return { ...state, isLoading: true}
}

if (action.type === GET_VIDEOS_SUCCESS) {
  return {
    ...state,
    isLoading: false,
    videos: action.payload.videosData,
    numOfVideosPages: action.payload.numOfVideosPages,
    totalVideos: action.payload.totalVideos
    
  }
}

if (action.type === GET_VIDEO_BEGIN) {
  return { ...state, isLoading: true}
}

if (action.type === GET_VIDEO_SUCCESS) {
  return {
    ...state,
    isLoading: false,
    video: action.payload.video,
    
    
  }
}

}
