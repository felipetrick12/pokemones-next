import type { NextPage } from "next";
import { Layout } from "../components/Layouts/Layout";
import { GetStaticProps } from "next";
import { clienteAxios } from "../config";
import { PokemoneList, SmallPokemon } from "../interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";

interface Props {
  pokemones: SmallPokemon[];
}
const Home: NextPage<any> = ({ pokemones }: Props) => {
  return (
    <>
      <Layout title={"Listado de pokemones"}>
        <Grid.Container gap={2} justify="flex-start">
          {pokemones.map(({ id, name, img }) => {
            return (
              <Grid xs={6} sm={3} md={2} xl={1} key={id}>
                <Card isHoverable isPressable>
                  <Card.Body>
                    <Card.Image
                      src={img}
                      alt={`pokemon ${name}`}
                      width={"100%"}
                      height={140}
                    />
                  </Card.Body>

                  <Card.Footer>
                    <Row justify="space-between">
                      <Text transform="capitalize">{name}</Text>
                      <Text>#{id}</Text>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            );
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
