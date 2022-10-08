import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = []

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        saveProductsArray: (state, action) => {
            // console.log(action)
        }
    }
})

export const {
    saveProductsArray
} = productsSlice.actions
export default productsSlice.reducer;