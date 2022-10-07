const { createSlice } = require("@reduxjs/toolkit");
// const { Action } = require("history");
const initialState = [];
const cardSlice = createSlice({
  name: "cart",
  initialState,
  //   initialState:[],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      state = state.filter((el) => el.id !== action.payload);
    },
  },
});

export const { add, remove } = cardSlice.actions;
export default cardSlice.reducer;
