import { Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";
import Pokemon from "./Pokemon";

interface Props {
  pokemons: number[];
}

const ListPokemon: FC<Props> = ({ pokemons }) => {
  const router = useRouter();

  return (
    <Grid.Container
      css={{ marginTop: "50px" }}
      gap={2}
      direction="row"
      justify="flex-start"
    >
      {pokemons.map((id: number) => {
        return <Pokemon id={id} key={id} />;
      })}
    </Grid.Container>
  );
};

export default ListPokemon;
