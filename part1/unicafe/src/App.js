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
    return (good/total)*100
  }

  return (
    <div>
      <Feedback type={"good"} count={good} />
      <Feedback type={"neutral"} count={neutral} />
      <Feedback type={"bad"} count={bad} />
      <p>{"all"} {calcTotal()}</p>
      <p>{"average"} {calcAverage()}</p>
      <p>{"positive"} {calcPositive()}{"%"}</p>
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

const Feedback = ({ type, count }) => {
  return <p>{type} {count} </p>
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
