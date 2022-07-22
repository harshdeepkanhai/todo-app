import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (description) => ({
        payload: {
          id: uuidv4(),
          description,
          completed: false,
          editable: true
        },
      }),
    },
    removeTodo(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
    setTodoStatus(state,action) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },

  },
});

export const { addTodo, removeTodo, setTodoStatus, toggleEditable } = todoSlice.actions;
export default todoSlice.reducer;