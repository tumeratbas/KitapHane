import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import './App.css';

const App = () => {
  return (
    <ClerkProvider
    publishableKey='pk_test_bGVuaWVudC1tYW1tb3RoLTE3LmNsZXJrLmFjY291bnRzLmRldiQ'
    >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/favorites"
            element={
              <SignedIn>
                <Favorites />
              </SignedIn>
            }
          />
        </Routes>
      </Router>
    </ClerkProvider>
  );
};

export default App;

