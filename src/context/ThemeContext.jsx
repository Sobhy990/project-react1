import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = { theme: localStorage.getItem("mytheme") === null ? "light" : "dark"   };
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action.newvalue };

    default:
      return state;
  }
};

export function ThemeContext({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);
  const ToggleTheme = (newvalue) => {
    localStorage.setItem("mytheme", newvalue);
    dispatch({ type: "CHANGE_THEME", newvalue: newvalue });
  };

  return (
    <ThemeContexttt.Provider value={{ ...firstState, ToggleTheme }}>
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
