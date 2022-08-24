import { Container, Text } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const NoPokemon = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Text h2>No hay pokemones</Text>
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/75.svg"
        }
        alt={"Imagen Fondo"}
        height={300}
        width={300}
      />
    </Container>
  );
};

export default NoPokemon;
