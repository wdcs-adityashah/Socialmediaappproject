import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Album from "./components/Album/Album";
import Photos from "./components/Photos/Photos";
import Post from "./components/Posts/Post";
import UserDetail from "./components/UserDetail/UserDetail";
import Comments from "./components/Comments/Comment";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import Landing from "./components/Landing/Landing";

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/albums/:id" element={<Album />} />
          <Route path="/photos/:albumId" element={<Photos />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/comments/:postId" element={<Comments />} />
          <Route path="/userdetail/:id" element={<UserDetail />} />
        </Route>
        <Route path="/login" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
