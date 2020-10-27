import React from "react";
import HeaderComponent from "../components/HeaderComponent";

import { Box, Container, Typography } from "@material-ui/core";

const IndexPage = () => {
  return (
    <>
      <HeaderComponent />

      <section>
        <Container maxWidth="md">
          <Box py={8} textAlign="center">
            <Typography variant="h3" component="h2" gutterBottom={true}>
              App <code>Title</code>
            </Typography>
            <Typography variant="h5" color="textSecondary" paragraph={true}>
              app subtitle
            </Typography>
            <Box mt={4}></Box>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default IndexPage;
