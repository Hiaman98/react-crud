import React from 'react'

export default function Task(props) {
  return (
    <li className="list-group-item" id={props.task.id}>
    <div className={props.task.status? "done": "undone"}>
      {props.task.taskName}
      <button type="button" className="close" onClick={() => props.deleteTask(props.task.id)}>&times;</button>
      <button type="button" className="status" onClick={() => props.updateStatus(props.task.id)}>{props.task.status? "Undone": "Done"}</button>
    </div>
  </li>   
  )
}
