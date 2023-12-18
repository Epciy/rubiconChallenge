# Coding Challenge: Task Management Application
This repository is a coding challenge for building a Task Management Application. The challenge is divided into front-end and back-end components. Below are the key instructions for completing this challenge.

## Front-End:
- Create a React application with a navigation bar featuring "Projects" and "Tasks" links.
- Implement a "Projects" page to display a list of projects in a table.
- Provide columns for label, description, status, starting_date, ending_date, and actions (edit and delete).
- Add an "Add Project" button that opens a modal form to add new projects.
- Implement a "Tasks" page similar to the "Projects" page, displaying tasks in a table.
- Include a dropdown to select the associated project when adding a new task.
-Use Redux for state management with actions for adding, updating, and deleting projects and tasks.
- Use Axios for API integration with server routes for CRUD operations.
- Utilize Reactstrap for UI components and SCSS for styling.
- Create a shared modal dialog component for both projects and tasks.

## Back-End:
- Set up a Node.js/Express server with MongoDB using Mongoose.
- Define Mongoose models for "Project" and "Task."
- Ensure tasks have references to their associated projects.
- Create controllers for projects and tasks with functions for CRUD operations:
- Create a new project or task.
- Retrieve all projects or tasks.
- Get a specific project or task by ID.
- Update an existing project or task by ID.
- Delete a project or task by ID.
## Getting Started:
- Clone this repository.
- Install front-end dependencies: cd client && npm install.
- Install back-end dependencies: cd server && npm install.
- Start both the front-end and back-end servers: npm start (inside both client and server directories).
- Access the application at http://localhost:3000 in your web browser.
