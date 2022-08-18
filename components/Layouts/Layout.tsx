import Head from "next/head";
import React, { FC } from "react";
import { Pokemon } from "../../interfaces";
import { Navbar } from "../UI";

interface Props {
  children: JSX.Element;
  title: string;
  pokemon: Pokemon;
}

export const Layout: FC<Props> = ({ children, pokemon, title }) => {
  return (
    <>
      <Head>
        <title>{title || "PokemonApp"}</title>
        <meta name="author" content="Duvan Felipe" />
        <meta
          name="description"
          content={`Información sobre el pokemon ${pokemon}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "10px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
