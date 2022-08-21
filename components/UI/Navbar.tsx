import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const { theme } = useTheme();
  const router = useRouter();

  // const handleClick = (route: string) => {
  //   router.push(route);
  // };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <NextLink href={"/"} passHref>
        <Link css={{ display: "flex", alignItems: "center" }}>
          <Image
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            }
            alt={"Imagen pokémon"}
            width={70}
            height={70}
          />
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <NextLink href={"/favorites"} passHref>
        <Link>
          <Text color="white" h3>
            Favoritos
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};

export default Navbar;
