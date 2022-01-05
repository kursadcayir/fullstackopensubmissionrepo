import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>

      <Header course={course.name} />
      <Content parts={course.parts} />
  
      <Total parts={course.parts} />
      
    </div>
  )
}


const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Content = ({parts}) => {
  return (
    <>
      {parts.map(part => <Part key={part.name} part={part.name} exercises={part.exercises} />)}
    </>
  )
}

const Part = (props) => {
  return (
    <p>
    {props.part} {props.exercises}
  </p>
  )
}
const Total = ({parts}) => {
  console.log(parts)
  return (
    <p>Number of exercises {parts.reduce((accumulator, current) => accumulator + current.exercises, 0)} </p>
  )
}

export default App