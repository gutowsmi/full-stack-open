import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const excersises1 = 10
  const part2 = 'Using props to pass data'
  const excersises2 = 7
  const part3 = 'State of component'
  const excersises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} excersises1={excersises1} excersises2={excersises2} excersises3={excersises3}/>
      <Total excersises1={excersises1} excersises2={excersises2} excersises3={excersises3}/>
    </div>
  )
}
const Content = (props) => {
  return(
    <div>
      <Part part={props.part1} excersises={props.excersises1} />
      <Part part={props.part2} excersises={props.excersises2} />
      <Part part={props.part3} excersises={props.excersises3} />      
    </div>
  )
}
const Total = (props) => {
return(
  <div>
    <p>Number of excersises {props.excersises1+props.excersises2+props.excersises3}</p>
  </div>
)
}
const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.excersises}
      </p>
    </div>
  )
}
const Header = (props) =>{
  return(
    <div>
        <h1>{props.course}</h1>
    </div>

  )
}
export default App