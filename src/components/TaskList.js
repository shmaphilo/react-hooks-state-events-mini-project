import React,{useState}from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);

  function removeTask(id) {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTaskList);
  }
  return (
    <div className="tasks">
    {/* Display a list of tasks using the Task component */}
    {taskList.map((task) => (
      <Task key={task.id} id={task.id} text={task.text} category={task.category} removeTask={removeTask} />
    ))}
  </div>
  )
}

export default TaskList;
