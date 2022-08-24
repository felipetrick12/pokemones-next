import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layouts";
import { NoPokemon } from "../../components/UI";
import { pokemons } from "../../utils/localFavorites";

const favorites = () => {
  const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    setFavoritesPokemon(pokemons());
  }, []);

  const handleGo = (id: number) => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Layout title="Favoritos">
      {favoritesPokemon.length === 0 ? (
        <NoPokemon />
      ) : (
        <Grid.Container
          css={{ marginTop: "50px" }}
          gap={2}
          direction="row"
          justify="flex-start"
        >
          {favoritesPokemon.map((id) => {
            return (
              <Grid
                xs={6}
                sm={3}
                md={2}
                xl={1}
                key={id}
                onClick={() => handleGo(id)}
              >
                <Card isHoverable isPressable css={{ padding: 10 }}>
                  <Card.Body>
                    <Card.Image
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                      alt={"pokemon"}
                      width={"100%"}
                      height={200}
                    />
                  </Card.Body>
                </Card>
              </Grid>
            );
          })}
        </Grid.Container>
      )}
    </Layout>
  );
};

export default favorites;
