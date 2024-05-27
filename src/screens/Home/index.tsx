import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { Form } from "../../components/Form";
import { api } from "../../servers/api";


export const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = (await api.get("/product")).data;
      setProducts(res);
    })();
  }, []);
  return (
    <>
      <Container>
        <Box justifyContent={"space-between"} sx={{ p: 2 }} display={"flex"}>
          <Typography variant="h6" gutterBottom>
            Estoque
          </Typography>
          <Form />
        </Box>
      </Container>
    </>
  );
};
