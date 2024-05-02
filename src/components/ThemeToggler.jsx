import React from "react";
import { useDispatch } from "react-redux"; //importera dispatch-funktionen från Redux store
import { toggleTheme } from "../store";

function ThemeToggler() {
  const dispatch = useDispatch(); //hooken används för att hämta/använda dispatch-funktionen 

  return (
    <div>
      <button onClick={() => dispatch(toggleTheme())}>Byt tema</button>
	  {/* renderar en knapp. när användaren klickar på knappen skickas action toggleTheme() till store genom dispatch-funktionen.  */}
    </div>
  );
}

export default ThemeToggler;
