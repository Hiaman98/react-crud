import { useState } from 'react';
import './App.css';
import Task from './Task';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleNewTask = (event) => {
    setNewTask(event.target.value);
  }

  const addNewTask = () => {
    // get id of the the last element, if array is empty take 1 as default value of id
    let idOfLastElement = todoList.length === 0? 1: todoList[todoList.length - 1].id;

    let task = {
      id: idOfLastElement + 1,
      taskName: newTask === ""? 'Please add a task': newTask,
      status: false
    }
    
    // Make 'add task' input empty and add new task to todo list 
    setNewTask("")    
    setTodoList([...todoList, task]);
  }

  const deleteTask = (id) => {
    // if 'task' is equal to 'taskToDelete', it will return ture else it will return false.
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  const updateStatus = (id) => {
    let updateList = todoList.map((task) => {

        if (task.id === id) {
          return {...task, status: !task.status};
        }

        return task;
    });

    // update todoList
    setTodoList(updateList)
  }
  return (
    
    <div id='main' className="data-reactroot">
      <h1>Todo List</h1>

      <div className='form-inline'>
        <input className='form-control' onChange={handleNewTask} value={newTask} />
        <button className='addTask btn btn-default' onClick={addNewTask}>Add task</button>
      </div>
      <ul className='list-group'>
          {
            todoList.map((task) => {
                return <Task task={task} deleteTask={deleteTask} updateStatus={updateStatus}/>;
            })
          }
      </ul>
    </div>
  );
}

export default App;
