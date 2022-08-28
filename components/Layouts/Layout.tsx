import Head from "next/head";
import React, { FC } from "react";
import { Pokemon } from "../../interfaces";
import { Navbar } from "../UI";

interface Props {
  children: JSX.Element;
  title: string;
  pokemon?: Pokemon;
}

const originPath = typeof window === "undefined" ? "" : window.location.origin;

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
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina de ${title}`}
        />
        <meta property="og:image" content={`${originPath}/img/banner.png`} />
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
