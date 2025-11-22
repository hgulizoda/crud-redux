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

export default function ProfileAside({ user, selected, onSelect }) {
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

      {/* Navigation */}
      <List component="nav" sx={{ mt: 2 }}>
        <ListItemButton
          selected={selected === "todos"}
          onClick={() => onSelect("todos")}
        >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Todos" />
        </ListItemButton>

        <ListItemButton
          selected={selected === "products"}
          onClick={() => onSelect("products")}
        >
          <ListItemIcon>
            <StorefrontIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItemButton>

        <ListItemButton
          selected={selected === "settings"}
          onClick={() => onSelect("settings")}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </Box>
  );
}
