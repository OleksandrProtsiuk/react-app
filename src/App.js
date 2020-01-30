import React from 'react';
import './style/App.css';
import MainPage from "./components/mainPage";
import Menu from "./components/menu";

function App() {
  return (
      <div className="App">
          <MainPage />
          <Menu />
      </div>
  );
}

export default App;
