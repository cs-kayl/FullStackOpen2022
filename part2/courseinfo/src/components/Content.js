const Content = ({ parts }) => {
    return (
      <>
        {parts.map(part => <Part key={part.id} part={part} />)}
        <Total parts={parts} />
      </>
    )
  }
  
const Part = ({ part }) => {
    return <><p>{part.name} {part.exercises}</p></>
}

const Total = ({ parts }) => {
    let totalNumExercises = 0
    parts.forEach( part => totalNumExercises += part.exercises)
    return (
      <>
        <p>
          Number of exercises {totalNumExercises}
        </p>
      </>
    )
  }

export default Content