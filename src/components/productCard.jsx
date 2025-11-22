import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Stack,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  setChangingProduct,
} from "../store/slices/productSlice";
import { useNavigate } from "react-router-dom";

export default function AdminProductCard(product) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.auth);
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: 280,
        borderRadius: 3,
        boxShadow: 3,
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.url}
        alt={product.name}
        sx={{ objectFit: "cover" }}
      />

      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 0.5 }}
      >
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          color="text.primary"
          noWrap
        >
          {product.name}
        </Typography>

        <Typography variant="h6" color="primary" fontWeight="bold">
          ${product.price}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Stock: {product.count || 0}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
        <Stack direction="row" spacing={1}>
          <IconButton
            color="primary"
            onClick={() =>
              auth ? dispatch(setChangingProduct(product.id)) : navigate("/")
            }
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={() =>
              auth ? dispatch(deleteProduct(product.id)) : navigate("/")
            }
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
}
