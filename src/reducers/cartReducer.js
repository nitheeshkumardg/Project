// const initialState = {
//     cartItems: [],
//     cartCounter: 0,
//     totalPrice:0,
//     extraCost:50,
//     taxes:0,
//     grandTotal:0
//   };
  
//   const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_TO_CART':
//         const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
//         console.log('++++++++++++:',action.payload);
        
//         if (existingItemIndex !== -1) {
//           const updatedCartItems = state.cartItems.map((item, index) => {
//             if (index === existingItemIndex) {
//               return { ...item, quantity:item.quantity + 1,total_item_price:(item.quantity + 1) * item.price };
//             }
//             return item;
//           });
//           return {
//             ...state,
//             cartItems: updatedCartItems,
//             cartCounter: state.cartCounter + 1,
//             totalPrice: state.totalPrice + action.payload.price,
//             taxes:(state.totalPrice + action.payload.price) * 0.18,
//             grandTotal: state.totalPrice + state.taxes + action.payload.price
//           };
//         } else {
//           return {
//             ...state,
//             cartItems: [...state.cartItems, { ...action.payload, quantity: 1, total_item_price: action.payload.price }],
//             cartCounter: state.cartCounter + 1,
//             totalPrice: state.totalPrice + action.payload.price,
//             taxes:(state.totalPrice + action.payload.price) * 0.18,
//             grandTotal: state.totalPrice + state.taxes + action.payload.price
//           };
//         }
//       case 'REMOVE_FROM_CART':
//         const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
//         const removedItem = state.cartItems.find(item => item.id === action.payload.id);
//         return {
//           ...state,
//           cartItems: updatedCartItems,
//           cartCounter: state.cartCounter - removedItem.quantity,
//           totalPrice: state.totalPrice - (removedItem.price * removedItem.quantity),
//           taxes:(state.totalPrice + action.payload.price) * 0.18,
//           grandTotal: state.totalPrice + state.taxes + action.payload.price
//         };
//       default:
//         return state;
//     }
//   };
  
  
//   export default cartReducer;

// 1. Utility functions for localStorage
const saveCartToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch (error) {
    console.error("Could not save cart state", error);
  }
};

const loadCartFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('cartState');
    if (serializedState === null) {
      return undefined;  // Return undefined to let Redux initialize the state
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Could not load cart state", error);
    return undefined;
  }
};

// 2. Modify the initial state to load from localStorage if available
const initialState = loadCartFromLocalStorage() || {
  cartItems: [],
  cartCounter: 0,
  totalPrice: 0,
  extraCost: 50,
  taxes: 0,
  grandTotal: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.product.id);

      if (existingItemIndex !== -1) {
        const updatedCartItems = state.cartItems.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
              total_item_price: (item.quantity + 1) * item.product.price
            };
          }
          return item;
        });

        const updatedState = {
          ...state,
          cartItems: updatedCartItems,
          cartCounter: state.cartCounter + 1,
          totalPrice: state.totalPrice + action.payload.product.price,
          taxes: (state.totalPrice + action.payload.product.price) * 0.18,
          grandTotal: state.totalPrice + state.taxes + action.payload.product.price
        };

        // Save to localStorage
        saveCartToLocalStorage(updatedState);

        return updatedState;
      } else {
        const updatedState = {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1, total_item_price: action.payload.product.price }],
          cartCounter: state.cartCounter + 1,
          totalPrice: state.totalPrice + action.payload.product.price,
          taxes: (state.totalPrice + action.payload.product.price) * 0.18,
          grandTotal: state.totalPrice + state.taxes + action.payload.product.price
        };

        // Save to localStorage
        saveCartToLocalStorage(updatedState);

        return updatedState;
      }

    case 'REMOVE_FROM_CART':
      const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.product.id);
      const removedItem = state.cartItems.find(item => item.id === action.payload.product.id);

      const newState = {
        ...state,
        cartItems: updatedCartItems,
        cartCounter: state.cartCounter - removedItem.quantity,
        totalPrice: state.totalPrice - (removedItem.product.price * removedItem.quantity),
        taxes: (state.totalPrice - removedItem.product.price * removedItem.quantity) * 0.18,
        grandTotal: state.totalPrice + state.taxes - removedItem.product.price
      };

      // Save to localStorage
      saveCartToLocalStorage(newState);

      return newState;

    default:
      return state;
  }
};

export default cartReducer;




