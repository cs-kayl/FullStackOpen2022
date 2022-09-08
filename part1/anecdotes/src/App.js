import { useState } from 'react'

const Header = ({ header }) => {
  return <h1>{header}</h1>
}

const Button = ({ text , onClick}) => {
  return <button onClick={onClick}>{text}</button>
}

const Anecdote = ({ anecdote, votes }) => {
  return (
    <>  
      <p>{anecdote}</p>
      <p>{"This anecdote has"} {votes} {"votes"}</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    {anecdote:'If it hurts, do it more often.', votes: 0},
    {anecdote:'Adding manpower to a late software project makes it later!',votes: 0},
    {anecdote:'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',votes: 0},
    {anecdote:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0},
    {anecdote:'Premature optimization is the root of all evil.', votes:0},
    {anecdote:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes:0},
    {anecdote:'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', votes:0}
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotes)
  const [maxVotes, setMaxVotes]= useState([])

  const handleNextAnecdote = () => {
    let max = anecdotes.length
    setSelected(Math.floor(Math.random()*max))
  }

  const handleVote = () => {
    let newArray = votes.map(obj => {
      if (anecdotes[selected].anecdote === obj.anecdote) {
        return {...obj, votes: obj.votes + 1}
      } else {
        return obj
      }
    })
    setVotes(newArray)
    findMaxVote()
  }

  const findMaxVote = () => {
    let maxVotesArr = []
    console.log("arr before loop", maxVotesArr)
    console.log("state of maxVotes", maxVotes)
    votes.forEach(obj => {
      if (maxVotesArr.length == 0) {
        console.log("Inside first branch")
        maxVotesArr.push(obj)
      } else {
        if(obj.votes > maxVotesArr[0].votes) {
          console.log("Inside second branch")
          maxVotesArr[0] = obj
          setMaxVotes(maxVotesArr)
        }       
      }
    })
    console.log("arr after loop", maxVotesArr)
    console.log("state of maxVotes", maxVotes)
  }

  return (
    <div>
      <Header header={"Anecdote of the day"} />
      <Anecdote anecdote={anecdotes[selected].anecdote} votes={votes[selected].votes} />
      <Button text={"next anecdote"} onClick={handleNextAnecdote} />
      <Button text={"vote"} onClick={handleVote} />
      {maxVotes.length > 0 ? 
      <>
        <Header header={"Anecdote with most votes"} />
        <Anecdote anecdote={maxVotes[0].anecdote} votes={maxVotes[0].votes} />
        {console.log("Max vote anecdote", maxVotes[0].anecdote)}
        {console.log("Max vote votes", maxVotes[0].votes)}
      </> :
      null
      }
    </div>
  )
}

export default App