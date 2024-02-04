// src/pages/Favorites.js

import React from 'react';
import { useClerk } from '@clerk/clerk-react';
import "./Favorites.css";

const Favorites = () => {
  const { user } = useClerk();

  return (
    <div>
      <h2>Favori Kitaplar</h2>
      {user ? (
        <p>Kullanıcının favori kitapları burada listelenecek</p>
      ) : (
        <p>Giriş yapın topladığınız favori kitapları görmek için!</p>
      )}
    </div>
  );
};

export default Favorites;
