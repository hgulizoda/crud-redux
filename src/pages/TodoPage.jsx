import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, TextField, Button } from "@mui/material";
import {
  addTodo,
  deleteTodo,
  completeTodo,
  setEditingTodo,
  editTodo,
} from "../store/slices/todoSlice";
import TodoCard from "../components/todoBar";
import Header from "../components/header";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const editingTodo = useSelector((state) => state.todo.editingTodo);

  const [input, setInput] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setInput(editingTodo.text);
    } else {
      setInput("");
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (editingTodo) {
      dispatch(editTodo({ id: editingTodo.id, text: input }));
    } else {
      dispatch(addTodo({ text: input }));
    }
    setInput("");
  };

  return (
    <>
      <Header />
      <Box sx={{ width: "400px", margin: "50px auto" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type="submit" variant="contained">
            {editingTodo ? "Save" : "Add"}
          </Button>
        </form>

        <Box sx={{ marginTop: "20px" }}>
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              onDelete={(id) => dispatch(deleteTodo(id))}
              onComplete={(id) => dispatch(completeTodo(id))}
              onEdit={(todo) => dispatch(setEditingTodo(todo))}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}
