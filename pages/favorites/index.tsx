import { Card, Grid } from "@nextui-org/react";
import React from "react";
import { Layout } from "../../components/Layouts";

const index = () => {
  return (
    <Layout title="Favoritos">
      <Grid.Container css={{ marginTop: "50px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: " 0 30px" }}>
            <Card.Body>
              <Card.Image
                src={"/no-image.png"}
                alt={"adasd"}
                width={"100%"}
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export default index;
