import { configureStore, createSlice } from "@reduxjs/toolkit";

// Skapa en slice för teman med createSlice. Vi definierar namnet på slicen, det initiala statet för temat samt reducerfunktioner för att ändra tema
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "light", // Starta med ljust läge som standard
  },
  reducers: {
    toggleTheme(state) { //vår action
      //reducerfunktion som ändrar tema
      state.mode = state.mode === "light" ? "dark" : "light"; // För att växla mellan ljust och mörkt läge.
      //state.mode = aktuella värdet på mode egeneskapen
      //state.mode === "light" = villkoret som kontrollerar om det aktuella temat är ljust eller inte
      //om villkoret state.mode === "light" är sant tilldelas värdet "dark" till state.mode
    },
  },
});

// Skapa en Redux-store med configureStore-funktionen från Redux Toolkit
export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer, // theme = namnet på slicen. Detta är vår reducer
  },
});

// Exportera actions för att växla tema
export const { toggleTheme } = themeSlice.actions;
//{ toogleTheme } = objektdestrukturering, vi extraherar action från themeSliceactions-onjektet och exporterar som en variabel
//themSlice.actions = objektet som skapas av createSlice-funktionen från redux toolkit. 
