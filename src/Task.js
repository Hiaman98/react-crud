import React from 'react'

export default function Task(props) {
  return (
    <li className="list-group-item ">
    <div>
      <span className="glyphicon glyphicon-ok icon" aria-hidden="true"></span>
      {props.taskName}
      <button type="button" className="close" onClick={() => props.deleteTask(props.id)}>&times;</button>
    </div>
  </li>   
  )
}
