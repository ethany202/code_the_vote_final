import * as React from 'react';
import "./BidenResult.css";
import joe_biden from "../assets/joe_biden.png"

export default function BidenResult() {
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
        <img src={joe_biden} alt="joebiden.png" className="biden" />
        <h2 className = "subheader">Joe Biden</h2 >
        </div>
    )
}
