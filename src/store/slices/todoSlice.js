import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  editingTodo: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    setEditingTodo: (state, action) => {
      state.editingTodo = action.payload;
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
      state.editingTodo = null;
    },
    clearEditingTodo: (state) => {
      state.editingTodo = null;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  completeTodo,
  setEditingTodo,
  editTodo,
  clearEditingTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
