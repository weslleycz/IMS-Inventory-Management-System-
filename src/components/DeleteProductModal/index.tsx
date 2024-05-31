import { Box, Button, Modal, Typography } from "@mui/material";
import { api } from "../../servers/api";

type Props = {
  open: boolean;
  handleClose: () => void;
  handleDelete: () => void;
  setProducts: any;
  id: string;
};

export const DeleteProductModal = ({
  open,
  handleClose,
  // handleDelete,
  id,
  setProducts,
}: Props) => {
  const handleDeleteProduct = async () => {
    try {
      const res = await api.delete(`/product/${id}`);
      setProducts(res.data);
      handleClose();
    } catch (error) {
      alert("Aconteceu um erro inesperado.");
    }
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as const,
            top: "50%" as const,
            left: "50%" as const,
            transform: "translate(-50%, -50%)" as const,
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirmar Exclusão
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Você tem certeza que deseja excluir este produto? Esta ação não pode
            ser desfeita.
          </Typography>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={handleClose} sx={{ mr: 1 }}>
              Cancelar
            </Button>
            <Button
              onClick={handleDeleteProduct}
              variant="contained"
              color="error"
            >
              Excluir
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
