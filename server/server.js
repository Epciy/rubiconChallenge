const express = require('express');
const cors = require('cors');
const mongoose=require("mongoose");
const dotenv=require('dotenv');
const projectController = require('./controllers/projectController');
const taskController = require('./controllers/taskController');

const app = express();
app.use(cors());
const port = process.env.PORT || 8000;
dotenv.config({path:'./config.env'})

//connect to mongoDb
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);


mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB connection successful!'));

//API route prefix
app.use('/api', express.json());

// Project Routers
app.post('/api/projects', projectController.createProject);
app.get('/api/projects', projectController.getAllProjects);
app.get('/api/project/:id', projectController.getProjectById);
app.put('/api/project/:id', projectController.updateProjectById);
app.delete('/api/project/:id', projectController.deleteProjectById);
//using route 
/*
app.route('/api/projects')
  .post(projectController.createProject)
  .get(projectController.getAllProjects);

app.route('/api/project/:id')
  .get(projectController.getProjectById)
  .put(projectController.updateProjectById)
  .delete(projectController.deleteProjectById);

*/
//Task Routers
app.post('/api/tasks', taskController.createTask);
app.get('/api/tasks', taskController.getAllTasks);
app.get('/api/task/:id', taskController.getTaskById); 
app.put('/api/task/:id', taskController.updateTaskById);
app.delete('/api/task/:id', taskController.deleteTaskById);



// Start the server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

