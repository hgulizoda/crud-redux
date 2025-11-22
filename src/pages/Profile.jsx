import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/slices/authSlice";

export default function UserSettings() {
  const user = useSelector((state) => state.auth.user);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [avatar, setAvatar] = useState(user?.avatar || "");
  const dispatch = useDispatch();

  function onSave(object) {
    dispatch(setUser(object));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, email, avatar });
  };

  return (
    <Card
      sx={{
        width: "50%",
        mx: "auto",
        mt: 5,
        p: 3,
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Stack spacing={3} alignItems="center">
          <Avatar src={avatar} alt={name} sx={{ width: 100, height: 100 }} />

          <Button variant="outlined" component="label">
            Change Photo
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) setAvatar(URL.createObjectURL(file));
              }}
            />
          </Button>

          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />

          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
            sx={{ mt: 2 }}
          >
            Save Changes
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
