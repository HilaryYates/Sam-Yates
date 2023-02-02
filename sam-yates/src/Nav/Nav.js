import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className='Container'>
      <div className='About'>About</div>
      <div className='Slash'>/</div>
      <div className='Work'>Work</div>
      <div className='Slash'>/</div>
      <div className='Contact'>Contact</div>
    </div>
  );
};

export default Nav;
