import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();

FavoritesContext.displayName = "Favoritos";

// eslint-disable-next-line react/prop-types
export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFavoriteContext() {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  function toggleFavorite(newFavorite) {
    const isFavorite = favorites.some((item) => item.id === newFavorite.id);

    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = favorites.filter((item) => item.id !== newFavorite.id);
    } else {
      updatedFavorites = [...favorites, newFavorite];
    }

    setFavorites(updatedFavorites);
  }

  return {
    favorites,
    toggleFavorite,
  };
}
