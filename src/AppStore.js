import { createStore } from "redux";
import { companies } from "./data";
const initialState = {
  isLoggedIn: false,
  companies: companies,
};
// is a afunction
// action is always an object { type: 'value is always a string'}
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "LOGGED_IN":
      console.log("Logged In");
      const loginState = { ...state, isLoggedIn: true };
      console.log(loginState);
      return loginState;
      break;
    case "LOGOUT":
      console.log("Logged Out");
      const logoutState = { ...state, isLoggedIn: false };
      return logoutState;
    case "GET_COMPANY_LIST":
      //axios.get
      const comState = { ...state, companies: companies };
      return logoutState;
  }
  return state;
};

const AppStore = createStore(reducer, initialState);
export default AppStore;
