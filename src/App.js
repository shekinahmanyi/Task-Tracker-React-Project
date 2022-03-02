import { useState } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";



function App() {
  const [tasks,setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        remainder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        remainder: true, 
    },
    {
        id: 3,
        text: 'Clothes Shopping',
        day: 'Feb 5th at 2:30pm',
        remainder: false,
    },
])


// Delete Task
const deleteTask = (id) => {
  console.log('delete',id)
}


  return (
    <div className="container">
      <Header title="Task Tracker"/>
     <Tasks tasks = {tasks} onDelete = {deleteTask} />
      </div>
  );
}


export default App;
