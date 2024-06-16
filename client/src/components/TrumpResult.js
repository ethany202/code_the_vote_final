import * as React from 'react';
import "./TrumpResult.css";
import donald_trump from "../assets/donald_trump.png"

function TrumpResult() {
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
        <img src={donald_trump} alt="donaldtrump.png" className="trump" />
        <h2 className = "subheader">Donald Trump</h2 >
        </div>
    )
}

export default TrumpResult;