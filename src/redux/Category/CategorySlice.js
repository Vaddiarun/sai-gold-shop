import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../../firebase.js"; // Adjust the path based on your folder structure


export const featchCategory = createAsyncThunk("getcategorys", async (data, { isRejectedWithValue }) => {
    try {
          const querySnapshot = await getDocs(collection(app, "Jewellery"));
      console.log(querySnapshot);
      const dataList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
          ...doc.data(),
        
      }));
        return dataList
    } catch(error) {
        console.log(error.message)
    }
 
})

const initialState = {
    products: [],
    loading:false
}

const categorySlice = createSlice({
    name: "products",
    initialState,

    extraReducers: (builder) => {
        builder.addCase(
            featchCategory.pending, (state, action) => {
                state.loading=true
            }
        )

        builder.addCase(
            featchCategory.fulfilled, (state, action) => {
                state.products = action.payload
                state.loading=false
        }
        )

        builder.addCase(
            featchCategory.rejected, (state, action) => {
                state.loading=false
            }
        )
    }


})

export default categorySlice.reducer