import * as React from 'react';
import "./Header.css";
import flag1 from "../assets/flag1.png"

function Header() {
  function Start({ value }) {
    function handleClick() {
      console.log('clicked!');
    }
    return <button className="start" onClick = {handleClick}>{value}</button>
  }
    return (
      <div className = "all">
      <div className="header">
          <h2 className = "title">Code The Vote</h2 >
          <Start value="Unleash Your Inner Candidate"/>
      </div>
      <img src={flag1} alt="flag picture" className="flag1" />
      </div>
    )
}

export default Header;