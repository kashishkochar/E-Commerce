import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const applicationItems = [
  {
    id: 1,
    productName: "IphoneX",
    specs: "128 gb, black",
    price: "50000",
    prodImg: "https://via.placeholder.com/150",
    seller: "XYZ",
    count: 1,
  },
  {
    id: 2,
    productName: "One Plus LED",
    specs: "55'' Android",
    price: "55000",
    prodImg: "https://via.placeholder.com/150",
    seller: "XYZ",
    count: 1,
  },
  {
    id: 3,
    productName: "Laptop",
    specs: "256 gb, i7",
    price: "100000",
    prodImg: "https://via.placeholder.com/150",
    seller: "XYZ",
    count: 1,
  },
  {
    id: 4,
    productName: "Airpods 3rd Gen",
    specs: "3rd generation",
    price: "20000",
    prodImg: "https://via.placeholder.com/150",
    seller: "XYZ",
    count: 1,
  },
  {
    id: 5,
    productName: "Airpods 2",
    specs: "2nd generation",
    price: "12000",
    prodImg: "https://via.placeholder.com/150",
    seller: "XYZ",
    count: 1,
  },
  {
    id: 6,
    productName: "Macbook",
    specs: "256 gb",
    price: "90000",
    prodImg: "https://via.placeholder.com/150",
    seller: "XYZ",
    count: 1,
  },
  {
    id: 7,
    productName: "IphoneXI",
    specs: "256 gb, red",
    price: "60000",
    prodImg: "https://via.placeholder.com/150",
    seller: "XYZ",
    count: 1,
  },
  {
    id: 8,
    productName: "Sony LED",
    specs: "65'' Android",
    price: "65000",
    prodImg: "https://via.placeholder.com/150",
    seller: "XYZ",
    count: 1,
  },
  {
    id: 9,
    productName: "Airpods 1st Gen",
    specs: "1st generation",
    price: "9000",
    prodImg: "https://via.placeholder.com/150",
    seller: "XYZ",
    count: 1,
  },
];

const initialState = {
  isLoggedIn: false,
  cartItems: [],
  cartItemsCount: 0,
  appItems: applicationItems,
  paid: false,
  user:''
};

const myReducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.item],
        cartItemsCount: state.cartItemsCount + 1,
      };

    case "DECREASE_ITEM":
      return {
        ...state,
        cartItems: action.item,
        cartItemsCount: state.cartItemsCount - 1,
      };
    case "INCREASE_ITEM":
      return {
        ...state,
        cartItems: action.item,
        cartItemsCount: state.cartItemsCount + 1,
      };
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.user
      };
    case "PAY_NOW":
      return{
        ...state,
        paid: true,
      }
    default:
      return {
        ...state,
      };
  }
};

const store = createStore(myReducer, composeWithDevTools());

export default store;
