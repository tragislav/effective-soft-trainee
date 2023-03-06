import { configureStore } from '@reduxjs/toolkit';

import cart from './cart/reducer';
import products from './products/reducer';

export const store = configureStore({
  reducer: {
    cart,
    products,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
