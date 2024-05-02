import React from "react";
import { useSelector } from "react-redux";

function ThemeProvider({ children }) { //react props för att automatiskt fylla med barnkomponenter som placeras inuti komponenten 
  const theme = useSelector((state) => state.theme.mode);
  //useSelector hooken för att välja delen från store som heter theme och sedan hämta mode från den. 
  //theme = värdet av state.theme.mode
  return <div className={`theme-${theme}`}>{children}</div>;
  //returnerar JSX-kod där vi använder värdet av theme för att sätta CSS-klass på den yttre div-taggen. 
  //använder children-propen för att rendera barnkomponenten. 
}

export default ThemeProvider;
