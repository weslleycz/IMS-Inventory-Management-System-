import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { DeleteProductModal } from "../DeleteProductModal";

type Props = {
  id: string;
  setProducts: any;
};

export const MenuProduct = ({ id, setProducts }: Props) => {
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
      </Menu>
    </>
  );
};
