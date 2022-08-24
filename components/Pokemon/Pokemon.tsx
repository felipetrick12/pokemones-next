import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface Props {
  id: number;
}

const Pokemon: FC<Props> = ({ id }) => {
  const router = useRouter();

  const handleGo = (id: number) => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} onClick={() => handleGo(id)}>
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
};

export default Pokemon;
