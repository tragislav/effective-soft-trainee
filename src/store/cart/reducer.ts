import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICart } from '@types';

const initialState: Record<string, ICart> = {};
interface AddProductPayload {
  itemID: number;
  itemPrice: number;
}

interface ChangeProductQuantityPayload {
  itemID: number;
  quantity: number;
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<AddProductPayload>) => {
      const { itemID, itemPrice } = action.payload;
      state[itemID] = {
        productId: itemID,
        productPrice: itemPrice,
        productQuantity: 1,
      };
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      delete state[action.payload];
    },
    deleteAllProducts: () => ({}),
    changeProductQuantity: (
      state: Record<string, ICart>,
      action: PayloadAction<ChangeProductQuantityPayload>,
    ) => {
      const { itemID, quantity } = action.payload;
      state[itemID] = {
        ...state[itemID],
        productQuantity: quantity,
      };
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  deleteAllProducts,
  changeProductQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
