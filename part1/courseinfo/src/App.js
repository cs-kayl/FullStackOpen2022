const Header = ({ course }) => {
  return <><h1> {course}</h1></>
}

const Content = ({ parts }) => {
  return (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </>
  )
}

function Part(props) {
  return <><p>{props.part.name} {props.part.exercises}</p></>
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

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const parts = [part1, part2, part3]
 

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App;
