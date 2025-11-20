import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";

export default function TodoCard({ todo, onDelete, onComplete, onEdit }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: todo.completed ? "#e0ffe0" : "#f5f5f5",
        borderRadius: "8px",
        padding: "10px 15px",
        marginBottom: "10px",
        boxShadow: 1,
      }}
    >
      <Typography
        sx={{
          textDecoration: todo.completed ? "line-through" : "none",
          fontWeight: 500,
          wordBreak: "break-word",
        }}
      >
        {todo.text}
      </Typography>

      <Box>
        <IconButton
          aria-label="complete"
          color={todo.completed ? "success" : "default"}
          onClick={() => onComplete(todo.id)}
        >
          <CheckCircleIcon />
        </IconButton>

        <IconButton aria-label="edit" onClick={() => onEdit(todo)}>
          <EditIcon />
        </IconButton>

        <IconButton aria-label="delete" onClick={() => onDelete(todo.id)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
