import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
}

const CardPokemon: FC<Props> = ({ pokemon }) => {
  const { id, img, name } = pokemon;

  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card isHoverable isPressable onClick={(e) => handleClick(pokemon.id)}>
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
};

export default CardPokemon;
