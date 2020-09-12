import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({onClick,text}) =>{
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistics = ({good, neutral, bad}) =>{

  if(!good && !neutral && !bad)
    return(
      <div>
        There are no statistics yet
      </div>
    )
  return(
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistic text="good" value= {good}/>
          <Statistic text="neutral" value= {neutral}/>
          <Statistic text="bad" value= {bad}/>
          <Statistic text="all" value= {good+neutral+bad}/>
          <Statistic text="average" value= {(good-bad)/(good + neutral + bad)}/>
          <Statistic text="positive" value= {good/(good+neutral+bad)*100}/>
        </tbody>
      </table>
      
    </div>
  )
}

const Statistic = ({text,value}) =>{
  if(text == "positive")
    return(
      <tr>
        <td>
          {text}
        </td>
        <td>
          {value}%
        </td>
      </tr>
    )
    
  return(
    <tr>
        <td>
          {text}
        </td>
        <td>
          {value}
        </td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good+1)} text="good"/>
      <Button onClick={() => setNeutral(neutral+1)} text="neutral"/>
      <Button onClick={() => setBad(bad+1)} text="bad"/>
      <Statistics good = {good} neutral= {neutral} bad = {bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)