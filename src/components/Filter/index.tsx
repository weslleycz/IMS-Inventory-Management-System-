import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import { ProductModel } from "../../models/product.model";

type Props = {
  productsAll: ProductModel[];
  setProducts: any;
};

export const Filter = ({  productsAll, setProducts }: Props) => {
  const handleChange = (event: any) => {
    if (event.target.value !== "") {
      const filterData = productsAll.filter((product) =>
        product.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setProducts([...filterData]);
    } else {
      setProducts([...productsAll]);
    }
  };
  return (
    <>
      <TextField
        size="small"
        onChange={handleChange}
        sx={{
          "& .MuiInputBase-root": {
            borderRadius: 2,
            padding: "0.25em 0.5em",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
          },
        }}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
