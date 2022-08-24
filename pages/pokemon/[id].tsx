import { Button, Card, Container, Grid, Text } from "@nextui-org/react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import Image from "next/image";
import React, { useState } from "react";
import { Layout } from "../../components/Layouts";
import { clienteAxios } from "../../config";
import { Pokemon } from "../../interfaces";
import { toggleFavorite } from "../../utils";
import { existInFavorites } from "../../utils/localFavorites";

interface Props {
  pokemon: Pokemon;
}

const PokemonSelect: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setisInFavorites] = useState(
    existInFavorites(pokemon.id)
  );

  const handleFavorites = () => {
    toggleFavorite(pokemon.id);
    setisInFavorites(!isInFavorites);
  };

  return (
    <Layout title={`Pokemon ${pokemon.name}`} pokemon={pokemon}>
      <Grid.Container css={{ marginTop: "50px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: " 0 30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width={"100%"}
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={4} md={8}>
          <Card>
            <Card.Header
              css={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                ghost={!isInFavorites}
                color={"gradient"}
                onClick={handleFavorites}
              >
                {!isInFavorites ? "Guardar en favoritos" : "En favoritos"}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await clienteAxios.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonSelect;
