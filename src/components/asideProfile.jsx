import {
  Box,
  Avatar,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProfileAside() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: 250,
        bgcolor: "background.paper",
        borderRight: "1px solid #ddd",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Avatar
          src={user?.avatar || ""}
          alt={user?.name}
          sx={{ width: 80, height: 80, mb: 1 }}
        />
        <Typography variant="h6" fontWeight="bold">
          {user?.name || "John Doe"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user?.email || "johndoe@example.com"}
        </Typography>
      </Box>

      <Divider />

      <List component="nav" sx={{ mt: 2 }}>
        <ListItemButton onClick={() => navigate("/todos")}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Todos" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/products")}>
          <ListItemIcon>
            <StorefrontIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/profile")}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </Box>
  );
}
