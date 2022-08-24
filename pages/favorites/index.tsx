import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layouts";
import ListPokemon from "../../components/Pokemon/ListPokemon";
import { NoPokemon } from "../../components/UI";
import { pokemons } from "../../utils/localFavorites";

const favorites = () => {
  const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemon(pokemons());
  }, []);

  return (
    <Layout title="Favoritos">
      {favoritesPokemon.length === 0 ? (
        <NoPokemon />
      ) : (
        <ListPokemon pokemons={favoritesPokemon} />
      )}
    </Layout>
  );
};

export default favorites;
