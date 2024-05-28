import {
  Box,
  Modal,
  Button,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import CloseIcon from "@mui/icons-material/Close";
import { api } from "../../servers/api";

type Props = {
  setProducts: any;
};

export const Form = ({ setProducts }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [fileName, setFileName] = useState("");
  const [image, setImage] = useState("");

  const [name, setName] = useState("");
  const [barCode, setBarCode] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);

  const handleImageUpload = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ["image/jpeg", "image/png"];
      setFileName(file.name);
      if (!allowedTypes.includes(file.type)) {
        alert("Por favor, selecione um arquivo de imagem válido.");
        return;
      }

      const reader = new FileReader();

      reader.onloadend = async () => {
        setImage(reader.result as string);
        e.target.value = null;
      };

      reader.readAsDataURL(file);
    }
  };

  const handleCloseImage = () => {
    setFileName("");
    setImage("");
  };

  const handleSubmit = async () => {
    try {
      const req = await api.post("/product", {
        name,
        description,
        price: Number(price) * 100,
        category,
        stock: Number(stock),
        image,
      });
      setName("");
      setBarCode("");
      setPrice(0);
      setCategory("");
      setDescription("");
      setStock(0);
      setProducts(req.data);
      handleClose();
    } catch (error) {
      console.log(error);
      alert("Aconteceu um erro inesperado.");
    }
  };

  return (
    <>
      <Button onClick={handleOpen} endIcon={<AddIcon />} variant="contained">
        Adicionar Novo
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: 600,
            bgcolor: "white",
            boxShadow: 24,
            p: 2,
          }}
        >
          <Typography sx={{ fontWeight: 900 }} variant="h6" gutterBottom>
            Criar Produto
          </Typography>
          <TextField
            fullWidth
            sx={{ marginBottom: 1.4 }}
            label="Nome"
            required
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            fullWidth
            sx={{ marginBottom: 1.4 }}
            label="Código de barras"
            variant="outlined"
            onChange={(e) => setBarCode(e.target.value)}
            value={barCode}
          />
          <TextField
            fullWidth
            sx={{ marginBottom: 1.4 }}
            label="Preço"
            type="number"
            variant="outlined"
            required
            onChange={(e) => setPrice(e.target.value as unknown as number)}
            value={price}
          />
          <TextField
            fullWidth
            sx={{ marginBottom: 1.4 }}
            label="Estoque"
            type="number"
            variant="outlined"
            required
            onChange={(e) => setStock(e.target.value as unknown as number)}
            value={stock}
          />
          <TextField
            fullWidth
            sx={{ marginBottom: 1.4 }}
            label="Categoria"
            variant="outlined"
            required
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
          <Box justifyContent={"space-between"} display={"flex"}>
            <Box>
              <Box display={"flex"}>
                <FileUploadIcon sx={{ marginRight: 1 }} color="primary" />
                <Typography variant="subtitle1" gutterBottom>
                  Escolher imagem do produto
                </Typography>
              </Box>
              {image !== "" ? (
                <Box alignItems={"center"} display={"flex"}>
                  <Typography
                    color={"GrayText"}
                    variant="subtitle2"
                    gutterBottom
                  >
                    {fileName}
                  </Typography>
                  <IconButton onClick={handleCloseImage} color="error">
                    <CloseIcon />
                  </IconButton>
                </Box>
              ) : (
                <Typography color={"GrayText"} variant="subtitle2" gutterBottom>
                  Tipos de arquivo aceitos: JPEG, PNG.
                </Typography>
              )}
            </Box>

            <Box>
              <label htmlFor="image-upload">
                <Button component="span" fullWidth variant="contained">
                  Escolher
                </Button>
              </label>
            </Box>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </Box>
          <TextField
            fullWidth
            sx={{ marginBottom: 1.4 }}
            label="Descrição"
            variant="outlined"
            multiline
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows={3}
          />
          <Button
            onClick={handleSubmit}
            sx={{ marginBottom: 0.5 }}
            fullWidth
            variant="contained"
          >
            Salvar
          </Button>
          <Button onClick={handleClose} fullWidth variant="text">
            Cancelar
          </Button>
        </Box>
      </Modal>
    </>
  );
};
