import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";

import {
  deleteProduct,
  setChangingProduct,
} from "../store/slices/productSlice";

export default function ProductCard({ ...rest }) {
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image={rest.url}
        alt={rest.title}
      />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <Typography
          variant="h6"
          sx={{ color: "text.secondary", fontWeight: "800" }}
        >
          {rest.name}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          {rest.description}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {rest.count}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => dispatch(deleteProduct(rest.id))}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          aria-label="share"
          onClick={() => dispatch(setChangingProduct(rest))}
        >
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
