import * as React from 'react';
import "./SteinResult.css";
import jill_stein from "../assets/jill_stein.png"

export default function JillResult() {
    function Title({ value }) {
        function handleClick() {
            console.log('clicked!');
        }
        return <button className="title" onClick = {handleClick}>{value}</button>;
    }
    
    return (
        <div className = "all">
        <div className="header">
            <Title value="Congratulations! You matched closest with:" />
        </div>
        <img src={jill_stein} alt="jillstein.png" className="stein" />
        <h2 className = "subheader">Jill Stein</h2 >
        </div>
    )
}

