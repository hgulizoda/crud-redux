import { Box, Typography, Button, Stack } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../store/slices/authSlice";

export default function Home() {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        minHeight: "50vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: 20,
        px: 2,
      }}
    >
      <Stack spacing={3} alignItems="center" maxWidth={500} textAlign="center">
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: "50%",
            p: 3,
            boxShadow: 3,
            display: "flex",
          }}
        >
          <LockOutlinedIcon sx={{ fontSize: 60, color: "grey.700" }} />
        </Box>

        <Typography variant="h4" fontWeight="bold">
          Log in to edit todos or products
        </Typography>

        <Typography variant="body1" color="text.secondary">
          You must be logged in to create, edit, or delete todos and products.
          Please sign in to continue.
        </Typography>

        <Stack spacing={2} width="100%" maxWidth={300}>
          <Button
            variant="contained"
            size="large"
            onClick={() => dispatch(logIn())}
          >
            Log In
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
