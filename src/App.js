import { useState } from 'react';
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState([]);

  const handleNewTask = (event) => {
    setNewTask(event.target.value);
  }

  const addNewTask = () => {
        // get id of the the last element, if array is empty take 1 as default value of id
        let idOfLastElement = todoList.length === 0? 1: todoList[todoList.length - 1].id;

        let task = {
          id: idOfLastElement + 1,
          taskName: newTask
        }

        
    setTodoList([...todoList, task]);
    console.log(todoList, todoList.length)
  }

  const deleteTask = (taskToDelete) => {
    // if 'task' is equal to 'taskToDelete', it will return ture else it will return false.
    setTodoList(todoList.filter((task) => task.id !== taskToDelete.id));
  }

  return (
    
    <div id='main' className="data-reactroot">
      <h1>Todo List</h1>

      <div className='form-inline'>
        <input className='form-control' onChange={handleNewTask} />
        <button className='addTask btn btn-default' onClick={addNewTask}>Add task</button>
      </div>
      <ul className='list-group'>
          {
            todoList.map((task) => {

                return(
                  <li className="list-group-item ">
                    <div>
                      <span className="glyphicon glyphicon-ok icon" aria-hidden="true"></span>
                      {task.taskName}
                      <button type="button" className="close" onClick={() => deleteTask(task)}>&times;</button>
                    </div>
                  </li>     
                );
            })
          }
      </ul>
    </div>
  );
}

export default App;
