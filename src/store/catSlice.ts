import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface CatState {
  imageUrl: string;
  enabled: boolean;
  autoUpdate: boolean;
}

const initialState: CatState = {
  imageUrl: "",
  enabled: false,
  autoUpdate: false,
};

export const fetchCat = createAsyncThunk("cat/fetchCat", async () => {
  const response = await axios.get(
    "https://api.thecatapi.com/v1/images/search"
  );
  return response.data[0].url as string;
});

const catSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    toggleEnabled(state) {
      state.enabled = !state.enabled;
    },
    toggleAutoUpdate(state) {
      state.autoUpdate = !state.autoUpdate;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCat.fulfilled, (state, action) => {
      state.imageUrl = action.payload;
    });
  },
});

export const { toggleEnabled, toggleAutoUpdate } = catSlice.actions;
export default catSlice.reducer;
