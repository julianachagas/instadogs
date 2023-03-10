import React from 'react';
import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Home } from './Components/Home';
import { Login } from './Components/Login/Login';
import { UserStorage } from './UserContext';
import { User } from './Components/User/User';
import { ProtectedRoute } from './Components/Helper/ProtectedRoute';
import { UserProfile } from './Components/User/UserProfile';
import { Photo } from './Components/Photo/Photo';
import { NotFound } from './Components/NotFound';

function App() {
  return (
    <div className="app">
      <HashRouter>
        <UserStorage>
          <Header />
          <main>
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
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </HashRouter>
    </div>
  );
}

export default App;
