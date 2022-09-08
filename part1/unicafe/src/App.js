import { useState } from 'react' 

const Statistics = ({ good, neutral, bad }) => {
  const calcTotal = () => {
    return good + neutral + bad
  }

  const calcAverage = () => {
    let score = good - bad
    let total = good + neutral + bad
    return score/total
  }

  const calcPositive = () => {
    let total = good + neutral + bad
    return String((good/total)*100) + "%"
  }
  if (calcTotal() === 0) {
    return <p>No feedback given</p>
  }

  return (
    <div>
      <StatisticsLine type={"good"} num={good} />
      <StatisticsLine type={"neutral"} num={neutral} />
      <StatisticsLine type={"bad"} num={bad} />
      <StatisticsLine type={"all"} num={calcTotal()} />
      <StatisticsLine type={"average"} num={calcAverage()} />
      <StatisticsLine type={"positive"} num={calcPositive()} />
    </div>
  )
}

const Header = ({ header }) => {
  return <h1>{header}</h1>
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticsLine = ({ type, num }) => {
  return <p>{type} {num} </p>
}


function App() {
  const [goodCount, setGoodCount] = useState(0)
  const [neutralCount, setNeutralCount] = useState(0)
  const [badCount, setBadCount] =  useState(0)

  const handleClick = (num, callback) => {
    return () => callback(num + 1)
  }

  return (
    <>
      <Header header={"Give Feedback"}/>
      <Button onClick={handleClick(goodCount, setGoodCount)} text={"good"} />
      <Button text={"neutral"} onClick={handleClick(neutralCount, setNeutralCount)} />
      <Button onClick={handleClick(badCount, setBadCount)} text={"bad"} />
      <Header header={"statistics"}/>
      <Statistics good={goodCount} neutral={neutralCount} bad={badCount} />
    </>
  );
}

export default App;
