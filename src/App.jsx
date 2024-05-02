// App.js
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store"; // Importera den skapade Redux-storen
import ThemeToggler from "./components/ThemeToggler";
import ThemeProvider from "./features/ThemeProvider";
import "./App.css"; // Används för att tillämpa temat via CSS

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="App">
          <h1>Light- och darkmode!</h1>
          <ThemeToggler />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
