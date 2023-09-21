import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Landing, Settings,Home, Register, ProtectedRoute, Error} from "./pages/index"
import {AddPost, Profile, SharedLayout} from './pages/dashboard/index'
import {ClipShotsCards, WatchCards, RedooCards} from './components/index'


import { useAppContext } from './context/appContext.js'

function App() {
  const {userRegistered} = useAppContext()
  return (
    <>
      <BrowserRouter>
 
          <Routes>         

            <Route path="/" element={
              <ProtectedRoute> 
                <SharedLayout /> 
              </ProtectedRoute>} >
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="create-post" element={<AddPost />} />
              <Route path="settings" element={<Settings />} />
              <Route path="redoos" element={<RedooCards />} />
              <Route path="watch" element={<WatchCards />} />
              <Route path="clipshots" element={<ClipShotsCards />} />


              </Route>
              {!userRegistered && <Route path="/landing" element={<Landing />} />}
            <Route path="/register" element={<Register/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
      </BrowserRouter>
    </>    
  );
}

export default App;
