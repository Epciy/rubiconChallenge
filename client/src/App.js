import React from 'react';
import{ 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './Components/NavBar';
import Projects from './Components/projects/Projects';
import TaskList from './Components/tasks/TaskList';

function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar />
    </div>
     <Routes>
        <Route path="/"/>
        <Route path="/projects" element={<Projects/>} />
        
        <Route path="/tasks" element={<TaskList/>} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
