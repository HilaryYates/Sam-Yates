import React from "react";
import "./App.css";
import Nav from "./Nav/Nav";

function App() {
  return (
    <div className='App'>
      <h1 className='Job-Title'>SY Consulting</h1>
      <img
        className='Logo'
        src='https://www.pngitem.com/pimgs/m/556-5567996_accounting-blue-financial-accounting-logo-png-transparent-png.png'
      />
      <Nav />
    </div>
  );
}

export default App;
