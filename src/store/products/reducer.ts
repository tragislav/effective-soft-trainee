import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '@types';
import { getAllProducts } from 'api/products';

interface InitialState {
  data: Record<number, IProduct>;
  loading: boolean;
}

const initialState: InitialState = {
  data: {},
  loading: false,
};

export const addAllProducts = createAsyncThunk(
  'products/addAllProducts',
  async () => {
    const response = await getAllProducts();
    return response;
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      addAllProducts.fulfilled,
      (state, action: PayloadAction<IProduct[]>) => {
        action.payload.reduce<Record<number, IProduct>>(
          (obj, item) => ({ ...obj, [item.id]: item }),
          {},
        );
        state.loading = false;
        state.data = action.payload;
      },
    );
  },
});

export default productsSlice.reducer;
