import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import {
  SET_LOADING,
  SET_CURRENT_CATEGORY,
  SET_CATEGORIES,
  SET_TOAST,
  SET_CURRENT_ACTION,
  SET_CATEGORY_INPUT,
} from "../types";

const AppState = (props) => {
  const initialState = {
    currentCategory: {},
    isLoading: false,
    categories: [],
    toast: null,
    currentAction: "",
    categoryInput:""
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setCurrentCategory = (_currentCategory) => {
    dispatch({ type: SET_CURRENT_CATEGORY, payload: _currentCategory });
  };

  const setCategories = (_categories) => {
    dispatch({ type: SET_CATEGORIES, payload: _categories });
  };

  //setLoading
  const setLoading = (_isLoading) => {
    dispatch({ type: SET_LOADING, payload: _isLoading });
  };

  const setToast = (_toast) => {
    dispatch({ type: SET_TOAST, payload: _toast });
  };
  const setCurrentAction = (_currentAction) => {
    dispatch({ type: SET_CURRENT_ACTION, payload: _currentAction });
  };

  const setCategoryInput = (_categoryInput) => {
    dispatch({ type: SET_CATEGORY_INPUT, payload: _categoryInput });
  };
  return (
    <AppContext.Provider
      value={{
        isLoading: state.isLoading,
        setLoading,

        currentCategory: state.currentCategory,
        setCurrentCategory,

        categories: state.categories,
        setCategories,

        toast: state.toast,
        setToast,

        currentAction: state.currentAction,
        setCurrentAction,

        categoryInput:state.categoryInput,
        setCategoryInput
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
