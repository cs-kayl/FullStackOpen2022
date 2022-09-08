import { useState } from 'react' 

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

  const calcTotal = () => {
    return goodCount + neutralCount + badCount
  }

  const calcAverage = () => {
    let score = goodCount - badCount
    let total = goodCount + neutralCount + badCount
    return score/total
  }

  const calcPositive = () => {
    let total = goodCount + neutralCount + badCount
    return (goodCount/total)*100
  }

  return (
    <>
      <Header header={"Give Feedback"}/>
      <Button onClick={handleClick(goodCount, setGoodCount)} text={"good"} />
      <Button text={"neutral"} onClick={handleClick(neutralCount, setNeutralCount)} />
      <Button onClick={handleClick(badCount, setBadCount)} text={"bad"} />
      <Header header={"statistics"}/>
      <Feedback type={"good"} count={goodCount} />
      <Feedback type={"neutral"} count={neutralCount} />
      <Feedback type={"bad"} count={badCount} />
      <p>{"all"} {calcTotal()}</p>
      <p>{"average"} {calcAverage()}</p>
      <p>{"positive"} {calcPositive()}{"%"}</p>
    </>
  );
}

export default App;
