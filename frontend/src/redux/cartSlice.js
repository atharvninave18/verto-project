
import { createSlice } from '@reduxjs/toolkit';

const getCartFromLocalStorage = () => {
    try {
        const serializedCart = localStorage.getItem('cart');
        return serializedCart ? JSON.parse(serializedCart) : { items: {} };
    } catch (e) {
        return { items: {} };
    }
};

const saveCartToLocalStorage = (cart) => {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (e) {
        console.warn("Could not save cart to local storage", e);
    }
};

const initialState = getCartFromLocalStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      if (state.items[product.id]) {
        state.items[product.id].quantity += 1;
      } else {
        state.items[product.id] = { ...product, quantity: 1 };
      }
      saveCartToLocalStorage(state);
    },
    incrementQuantity: (state, action) => {
        const { id } = action.payload;
        if(state.items[id]) state.items[id].quantity += 1;
        saveCartToLocalStorage(state);
    },
    decrementQuantity: (state, action) => {
        const { id } = action.payload;
        if(state.items[id]?.quantity > 1) {
            state.items[id].quantity -= 1;
        } else {
            delete state.items[id];
        }
        saveCartToLocalStorage(state);
    },
    deleteItem: (state, action) => {
        const { id } = action.payload;
        if(state.items[id]) {
            delete state.items[id];
        }
        saveCartToLocalStorage(state);
    },
    clearCart: (state) => {
      state.items = {};
      saveCartToLocalStorage(state);
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, clearCart,deleteItem } = cartSlice.actions;
export default cartSlice.reducer;