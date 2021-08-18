import {actionType} from 'src/types' 

const counterReducer = (state = 1, action:actionType) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "RESET":
        return (state = 0);
      default:
        return state;
    }
  };
  export default counterReducer;