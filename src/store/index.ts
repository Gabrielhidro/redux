import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    "todo 1",
    "todo 2",
    "todo 3",
  ],
  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo);
    }
  },
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export const { add } = todoSlice.actions;