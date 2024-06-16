import * as React from 'react';
import "./KennedyResult.css";
import robert_kennedy_jr from "../assets/robert_kennedy_jr.png"

function KennedyResult() {
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
        <img src={robert_kennedy_jr} alt="kennedyjr.png" className="kennedy" />
        <h2 className = "subheader">Robert Kennedy Jr.</h2 >
        </div>
    )
}

export default KennedyResult;