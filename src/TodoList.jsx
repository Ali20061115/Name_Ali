import React, { useEffect, useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);          
  const [taskText, setTaskText] = useState("");    
  const[action, setAction] = useState('')
  const addTask = () => {
    if (taskText.trim() === "") return;
    setTasks([...tasks, { text: taskText, completed: false }]);
    setTaskText("");
    setAction('add')
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };
   
  useEffect(()=> {
 if(action=='add'){
  alert('Тапсырма қосылды')
 }
  },[tasks])

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Тапсырма енгізіңіз"
      />
      <button onClick={addTask}>Қосу</button>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.text}
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? "🔁 Қайта бастау" : "✅ Аяқталды"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;