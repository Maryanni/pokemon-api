const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      listPokemon: [],
      pokemonSelect: null,
      name: "",
      weight: "",
      height: "",
      type: "",
      picture: "",
      favorites: [],
    },
    actions: {
      getPokemon: async () => {
        setStore({ loading: true });
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/?limit=10`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setStore({
            listPokemon: data.results,
            loading: false,
          });
        } catch (error) {
          console.error("Error fetching Pokémon list:", error);
          setStore({ loading: false });
        }
      },
      getPokemonId: (id) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({
              pokemonSelect: data,
              name: data.name,
              weight: data.weight,
              height: data.height,
              picture: data.sprites.other.dream_world.front_default,
              type:
                data.types && data.types.length > 0
                  ? data.types[0].type.name
                  : "",
            });
          })
          .catch((error) => console.log(error));
      },
    },
  };
};

export default getState;
