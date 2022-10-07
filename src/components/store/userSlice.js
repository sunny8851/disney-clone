const { createSlice } = require("@reduxjs/toolkit");
const nameSlice = createSlice({
  name: "name",
  initialState: [],
  reducers: {
    set(state, action) {
      state.push(action.payload);
    },
    removeUser(state) {
      state.pop();
    },
  },
});
export const { set, removeUser } = nameSlice.actions;
export default nameSlice.reducer;
