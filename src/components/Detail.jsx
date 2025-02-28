import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Context } from "../store/context";
import { useContext, useEffect } from "react";
import bgPokemon1 from "../assets/images/bgPokemon1.jpeg";

function Detail({ id, onClose, favorites, addFavorite }) {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPokemonId(id);
  }, [id]);

  const isFavorite = (favorites && favorites[id]) || false;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden max-w-80">
        <div className="relative">
          <img
            src={bgPokemon1}
            alt="Pokemon Background"
            className="w-full h-32 object-cover"
          />
          {store.picture && (
            <img
              src={store.picture}
              alt={store.name}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24"
            />
          )}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-white p-1 text-gray-700 rounded-full w-8 h-8"
          >
            ✕
          </button>
        </div>

        <div className="-p-1">
          <h2 className="text-2xl font-bold text-center capitalize mb-4 mt-1">
            {store.name}
          </h2>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="text-gray-700 font-medium font-semibold text-left ml-10">
              Peso:
            </div>
            <div className="text-left ml-10">{store.weight / 10} kg</div>

            <div className="text-gray-700 font-medium font-semibold text-left ml-10">
              Altura:
            </div>
            <div className="text-left ml-10">{store.height / 10} m</div>

            <div className="text-gray-700 font-medium font-semibold text-left ml-10">
              Tipo:
            </div>
            <div className="capitalize text-left ml-10">{store.type}</div>
          </div>
        </div>

        <div className="bg-gray-100 px-6 py-3 flex justify-between">
          <button className="bg-red-600 text-white rounded-full font-bold hover:bg-red-500 px-4 py-2">
            Share to my friends
          </button>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 border border-gray-300">
            {isFavorite ? (
              <FaStar
                className="text-xl text-yellow-400 cursor-pointer"
                onClick={() => addFavorite(id)}
              />
            ) : (
              <CiStar
                className="text-xl text-gray-400 hover:text-yellow-400 cursor-pointer"
                onClick={() => addFavorite(id)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
