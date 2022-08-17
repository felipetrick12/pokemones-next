import type { NextPage } from "next";
import { Layout } from "../components/Layouts/Layout";
import { GetStaticProps } from "next";
import { clienteAxios } from "../config";
import { PokemoneList, SmallPokemon } from "../interfaces";
import { CardPokemon } from "../components/Pokemon";
import { Grid } from "@nextui-org/react";

interface Props {
  pokemones: SmallPokemon[];
}
const Home: NextPage<Props> = ({ pokemones }) => {
  return (
    <>
      <Layout title={"Listado de pokemones"}>
        <Grid.Container gap={2} justify="flex-start">
          {pokemones.map((pokemon) => {
            return <CardPokemon pokemon={pokemon} key={pokemon.id} />;
          })}
        </Grid.Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await clienteAxios.get<PokemoneList>("/pokemon?limit=151");

  const dataPokemon: SmallPokemon[] = data.results.map((poke, index) => {
    return {
      ...poke,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        index + 1
      }.svg`,
    };
  });

  return {
    props: {
      pokemones: dataPokemon,
    },
  };
};

export default Home;
