import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>

      <Header course={course} />
      <Content part1={part1} exercise1={exercises1} part2={part2} exercise2={exercises2} part3={part3} exercise3={exercises3} />
  
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      
    </div>
  )
}


const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Content = ({part1,part2,part3,exercise1,exercise2,exercise3}) => {
  return (
    <>
      <Part part={part1} exercises={exercise1} />
      <Part part={part2} exercises={exercise2} />
      <Part part={part3} exercises={exercise3} />
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
const Total = ({exercises1,exercises2,exercises3}) => {
  return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )
}

export default App