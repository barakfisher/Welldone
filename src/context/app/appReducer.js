import {
  SET_LOADING,
  SET_CURRENT_CATEGORY,
  SET_CATEGORIES,
  SET_TOAST,
  SET_CURRENT_ACTION,
  SET_CATEGORY_INPUT
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_TOAST:
      return {
        ...state,
        toast: action.payload,
      };
      case SET_CURRENT_ACTION:
        return {
          ...state,
          currentAction: action.payload,
        };
      case SET_CATEGORY_INPUT:
        return{
          ...state,
          categoryInput:action.payload
        };
    default:
      return state;
  }
};
