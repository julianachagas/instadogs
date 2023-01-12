import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Home } from './Components/Home';
import { Login } from './Components/Login/Login';
import { UserStorage } from './UserContext';
import { User } from './Components/User/User';
import { ProtectedRoute } from './Components/Helper/ProtectedRoute';
import { UserProfile } from './Components/User/UserProfile';
import { Photo } from './Components/Photo/Photo';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="account/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route path="profile/:username" element={<UserProfile />}></Route>
            <Route path="photo/:id" element={<Photo />}></Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
