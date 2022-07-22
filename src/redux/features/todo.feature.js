import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    list: []
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
        state.list.push({
            id: uuidv4(),
            description: action.payload,
            completed: false,
            editable: false
          });
    },
    removeTodo(state, action) {
      const index = state.list.findIndex((todo) => todo.id === action.payload);
      state.list.splice(index, 1);
    },
    setTodoStatus(state,action) {
      const index = state.list.findIndex((todo) => todo.id === action.payload.id);
      state.list[index].completed = action.payload.completed;
    },
    updateTodo(state, action) {
        const index = state.list.findIndex((todo) => todo.id === action.payload.id);
        state.list[index].description = action.payload.description;
    },
    toggleEditable(state, action) {
      const index = state.list.findIndex((todo) => todo.id === action.payload.id);
      state.list[index].editable = action.payload.editable;
    }
  },
});

export const { addTodo, removeTodo, setTodoStatus, updateTodo, toggleEditable } = todoSlice.actions;
export default todoSlice.reducer;