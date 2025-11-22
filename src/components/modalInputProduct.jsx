import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField, TextareaAutosize } from "@mui/material";
import { useState } from "react";
import {
  addProduct,
  clearChangingProduct,
  editProduct,
} from "../store/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const changing = useSelector((state) => state.product.changingProduct);
  const auth = useSelector((state) => state.auth.auth);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (changing) {
      setOpen(true);
    }
  }, [changing]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (changing) {
      dispatch(editProduct({ ...data, id: changing.id }));
      dispatch(clearChangingProduct());
    } else {
      dispatch(addProduct({ ...data, id: Date.now() }));
    }

    setOpen(false);
    e.target.reset();
  };

  return (
    <div>
      <Button
        onClick={() => {
          if (!auth) {
            navigate("/");
          } else {
            handleOpen();
          }
        }}
        variant="contained"
      >
        {changing ? "Save" : "Add Product"}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ borderRadius: "8px" }}
      >
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              width: "40%",
              justifySelf: "center",
              marginTop: "100px",
              padding: "20px 30px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <h2>Product info</h2>

            <TextField
              name="name"
              label="Name"
              autoFocus={changing ? true : false}
              variant="outlined"
              sx={{ width: "100%" }}
              InputLabelProps={{
                shrink: !!changing || undefined,
              }}
              defaultValue={changing?.name || ""}
            />

            <TextField
              name="price"
              label="Price"
              variant="outlined"
              sx={{ width: "100%" }}
              defaultValue={changing?.price || ""}
              InputLabelProps={{
                shrink: !!changing || undefined,
              }}
            />

            <TextField
              name="count"
              label="Count"
              variant="outlined"
              sx={{ width: "100%" }}
              defaultValue={changing?.count || ""}
              InputLabelProps={{
                shrink: !!changing || undefined,
              }}
            />

            <TextField
              name="url"
              label="URL (image)"
              variant="outlined"
              sx={{ width: "100%" }}
              defaultValue={changing?.url || ""}
              InputLabelProps={{
                shrink: !!changing || undefined,
              }}
            />

            <TextareaAutosize
              minRows={3}
              name="description"
              placeholder="Describe your product..."
              style={{ width: "96%", padding: "5px 10px", outline: "blue" }}
              defaultValue={changing?.description || ""}
              InputLabelProps={{
                shrink: !!changing || undefined,
              }}
            />

            <Button
              variant="contained"
              type="submit"
              sx={{
                paddingBlock: "10px",
                marginBlock: "20px",
                fontWeight: "800",
              }}
            >
              {changing ? "Save Changes" : "Add"}
            </Button>
          </Box>
        </form>
      </Modal>
    </div>
  );
}
