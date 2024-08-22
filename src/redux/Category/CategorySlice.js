import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../../firebase.js"; // Adjust the path based on your folder structure

export const featchCategory = createAsyncThunk(
  "getCategories",
    async (data, { rejectWithValue }) => {
    const db = getFirestore(app);
    try {
      const querySnapshot = await getDocs(collection(db, "Jewellery"));
      const dataList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return dataList;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  products: [],
  loading: false,
};

const categorySlice = createSlice({
  name: "products",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(featchCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(featchCategory.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(featchCategory.rejected, (state, action) => {
        state.loading = false;
        console.error("Error fetching categories:", action.payload);
      });
  },
});

export default categorySlice.reducer;
