import { Avatar, Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import boxProduct from "../../../public/box-product.jpg";
import { Container } from "../../components/Container";
import { Form } from "../../components/Form";
import { ProductModel } from "../../models/product.model";
import { api } from "../../servers/api";

export const Home = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  useEffect(() => {
    (async () => {
      const res = (await api.get("/product")).data;
      setProducts(res);
    })();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "image",
      headerName: "#",
      width: 100,
      renderCell: (params) => (
        <Avatar
          src={
            params.value === undefined || params.value === ""
              ? boxProduct
              : params.value
          }
        />
      ),
    },
    { field: "name", headerName: "Produto", width: 200 },
    { field: "price", headerName: "Preço", width: 200 },
    { field: "stock", headerName: "Estoque", width: 200 },
  ];

  return (
    <>
      <Container>
        <Box justifyContent={"space-between"} sx={{ p: 2 }} display={"flex"}>
          <Typography variant="h6" gutterBottom>
            Estoque
          </Typography>
          <Form setProducts={setProducts} />
        </Box>
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            rows={products
              .sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                  return -1;
                }
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  return 1;
                }
                return 0;
              })
              .map((product: ProductModel) => {
                return {
                  id: product.__id,
                  name: product.name,
                  price: `R$ ${(product.price / 100).toFixed(2)}`,
                  stock: product.stock,
                  image: product.image,
                };
              })}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 8 },
              },
            }}
            pageSizeOptions={[8]}
          />
        </div>
      </Container>
    </>
  );
};
