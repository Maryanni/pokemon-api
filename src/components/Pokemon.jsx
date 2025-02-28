import { CiStar } from "react-icons/ci";
import { Context } from "../store/context";
import { FaStar } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import Detail from "./Detail";
import pokeball1 from "../assets/images/pokeball1.png";
import NoPokemon from "./NoPokemon";

function Pokemon({ showOnlyFavorites = false, searchTerm = "" }) {
  const { store, actions } = useContext(Context);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    actions.getPokemon();
  }, []);

  const modal = (item) => {
    setSelectedPokemon(item.name);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
  };

  const addFavorite = (item) => {
    const newFavorites = { ...favorites };
    if (newFavorites[item]) {
      delete newFavorites[item];
    } else {
      newFavorites[item] = true;
    }
    setFavorites(newFavorites);
  };

  const filteredPokemon = store.listPokemon.filter((item) => {
    if (showOnlyFavorites && !favorites[item.name]) {
      return false;
    }
    if (
      searchTerm &&
      !item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="flex flex-col items-center w-full container">
      {filteredPokemon.length > 0 ? (
        filteredPokemon.map((item, index) => {
          const isFavorite = favorites[item.name] || false;

          return (
            <div
              className="w-full max-w-4xl mx-auto bg-white rounded-lg p-4 text-justify capitalize border border-gray-200 m-2 flex justify-between"
              key={index}
            >
              <div className="text-lg font-medium" onClick={() => modal(item)}>
                {item.name}
              </div>
              <div className="flex items-center justify-center">
                {isFavorite ? (
                  <FaStar
                    className="text-xl text-yellow-400 cursor-pointer"
                    onClick={() => addFavorite(item.name)}
                  />
                ) : (
                  <CiStar
                    className="text-xl text-gray-400 hover:text-yellow-400 cursor-pointer"
                    onClick={() => addFavorite(item.name)}
                  />
                )}
              </div>
            </div>
          );
        })
      ) : store.listPokemon.length > 0 ? (
        <NoPokemon />
      ) : (
        <div className="p-4 text-gray-500 text-center">
          <img className="w-64 h-64 mx-auto" src={pokeball1} alt="Pokeball" />
          <span>Cargando Pokémon...</span>
        </div>
      )}

      {selectedPokemon && (
        <Detail
          id={selectedPokemon}
          onClose={closeModal}
          favorites={favorites}
          addFavorite={addFavorite}
        />
      )}
    </div>
  );
}

export default Pokemon;
