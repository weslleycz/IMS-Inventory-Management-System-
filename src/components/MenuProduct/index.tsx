import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { DeleteProductModal } from "../DeleteProductModal";
import { FormEdit } from "../FormEdit";

type Props = {
  id: string;
  setProducts: any;
  // product:ProductModel
  setproductsAll: any;
};

export const MenuProduct = ({ id, setProducts, setproductsAll }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    handleClose();
    setOpenModal(true);
  };
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <DeleteProductModal
        setproductsAll={setproductsAll}
        id={id}
        open={openModal}
        handleDelete={handleOpenModal}
        handleClose={handleCloseModal}
        setProducts={setProducts}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleOpenModal}>Excluir</MenuItem>
        <FormEdit
          setproductsAll={setproductsAll}
          setProducts={setProducts}
          id={id}
        />
      </Menu>
    </>
  );
};
