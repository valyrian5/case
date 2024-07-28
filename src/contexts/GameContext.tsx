import React, {createContext, useContext, useState, ReactNode} from 'react';
import {Game} from '../types';

type GamesContextType = {
  games: Game[];
  favourites: Game[];
  handleFavourite: (id: number) => void;
  setAllGames: (games: Game[]) => void;
  checkFavourites: (id: number) => boolean;
};

const GamesContext = createContext<GamesContextType | undefined>(undefined);

export const GamesProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [games, setGames] = useState<Game[]>([]);
  const [favourites, setFavourites] = useState<Game[]>([]);

  const handleFavourite = (id: number) => {
    const gameToAdd = games.find(game => game.id === id);
    if (gameToAdd && !favourites.some(fav => fav.id === id)) {
      setFavourites([...favourites, gameToAdd]);
    } else {
      setFavourites(favourites.filter(fav => fav.id !== id));
    }
  };
  const setAllGames = (games: Game[]) => {
    setGames(games);
  };
  

  const checkFavourites = (id: number) => {
    return favourites.some(fav => fav.id === id);
  }

  return (
    <GamesContext.Provider
      value={{
        games,
        favourites,
        handleFavourite,
        setAllGames,
        checkFavourites,
      }}>
      {children}
    </GamesContext.Provider>
  );
};

export const useGames = (): GamesContextType => {
  const context = useContext(GamesContext);
  if (context === undefined) {
    throw new Error('useGames must be used within a GamesProvider');
  }
  return context;
};
