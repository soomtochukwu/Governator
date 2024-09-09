import React, { createContext, useReducer } from "react";
// import { ActionType } from "./common/actiontype";

const PostContext = createContext("post");

const INITIALSTATE = {
  menuState: false, // menu state
  theme: "light",
  store: [], // store data
  style: {}, // style state
};

const actionType = {
  THEME: "Theme",
  OPEN: "Open",
  CLOSE: "Close",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.THEME:
      return { ...state, theme: "dark" };
    case actionType.style:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIALSTATE);
  return (
    <PostContext.Provider value={[state, dispatch]}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider, INITIALSTATE, reducer };
