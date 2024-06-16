import React, {useState, useEffect} from 'react';
import "./questions.css";

function Questions(props) {
  let keyID = 0
  const [results, setResults] = useState('')
  let answersMap = {}

  const questions = [
    {
      value: "Tax cuts are essential for boosting the economy and providing relief to American families."
    },
    {
    value: "A strong stance on immigration, including building a wall to secure the US-Mexico border, is necessary."
    },
    {
      value:"Protecting the Second Amendment and opposing stricter gun control laws is important."
    }, 
    {
      value: "Appointing conservative judges to the Supreme Court is essential in upholding the Constitution."
    },
    {
      value: "Putting America First in international relations, focusing on the interests of the United States over globalism, is the right approach."
    }, 
    {
      value:"Abortion should only be permitted in cases of rape, incest, or when the mother's life is at risk."
    }, 
    {
      value: " Schools should have the flexibility to decide how LGBTQ+ issues are taught in their curriculum."
    }, 
    {
      value: "Strengthening the US military ensures that America remains a global superpower."
    }, 
    {
      value: "Cutting bureaucratic red tape and promoting economic growth through a deregulatory agenda is important."
    }, 
    {
      value: " The United States should reduce its involvement in foreign conflicts that do not directly threaten national security"
    }
  ]

  const redirectToResults = () => {
    window.location.href = `/${results}`
  }

  const sendAnswers = () => {
    // console.log(getNum())
      var sum = 0
      for(var key in answersMap){
        sum+=Number(answersMap[key])
      }


      fetch("http://localhost:5000/send-responses", {
          method: "POST",
          body: JSON.stringify({
              answers: sum
          }),
          headers: {
              'Content-type': 'application/json; charset=UTF-8'
          }
      })
          .then(response => response.json())
          .then(json => { setResults(json.results); redirectToResults()})
  }

    function Series(props) {
      return <button className="button-30" onClick = {() => {       answersMap[props.prompt] = props.value}}> {props.value}</button>;

    }
      return (
        // <div className = "comp">
        // <h2>{props.question}</h2>
        // <div className="button-series">
        // <h3>Disagree</h3>
        //     <Series value = "1" />
        //     <Series value = "2" />
        //     <Series value = "3" />
        //     <Series value = "4" />
        // <h3>Agree</h3>
        // </div>
        // </div>
        <div>
          {
            questions.map((prompt) => {
              keyID +=1 
              answersMap[prompt.value] = 1
              return (
                <div className = "comp" key={keyID}>
                <h2>{prompt.value}</h2>
                <div className="button-series">
                <h3>Disagree</h3>
                    <Series prompt={prompt.value} value = "1" />
                    <Series prompt={prompt.value} value = "2" />
                    <Series prompt={prompt.value} value = "3" />
                    <Series prompt={prompt.value} value = "4" />
                <h3>Agree</h3>
                </div>
                </div>
              )
            })
          }

          <div className="middle">
            <div className = "button-40">
              <button onClick={sendAnswers} href = {results} >Submit</button>
            </div>
          </div>
        </div>
      
    );
  }

  export default Questions