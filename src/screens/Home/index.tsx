import { Avatar, Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import boxProduct from "../../../public/box-product.jpg";
import { Container } from "../../components/Container";
import { Form } from "../../components/Form";
import { MenuProduct } from "../../components/MenuProduct";
import { ProductModel } from "../../models/product.model";
import { api } from "../../servers/api";
import { Filter } from "../../components/Filter";

export const Home = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [productsAll, setproductsAll] = useState<ProductModel[]>([]);
  useEffect(() => {
    (async () => {
      const res = (await api.get("/product")).data;
      setProducts(res);
      setproductsAll(res);
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
    { field: "barCode", headerName: "Código de barras", width: 200 },
    {
      field: "actions",
      headerName: "Ações",
      width: 200,
      renderCell: (params) => (
        <MenuProduct
          setproductsAll={setproductsAll}
          setProducts={setProducts}
          id={params.value}
        />
      ),
    },
  ];

  return (
    <>
      <Container>
        <Box sx={{ p: 2 }}>
          <Typography sx={{ fontWeight: 900 }} variant="h6" gutterBottom>
            Estoque
          </Typography>
          <Box justifyContent={"space-between"} display={"flex"}>
            <Filter
              setProducts={setProducts}
              productsAll={productsAll}
            />
            <Form setproductsAll={setproductsAll} setProducts={setProducts} />
          </Box>
        </Box>
        <Box p={2}>
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
                    actions: product.__id,
                    barCode: product.bar_code,
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
        </Box>
      </Container>
    </>
  );
};
