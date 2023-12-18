import axios from 'axios';

const API_URL = 'http://localhost:8000/api';


// Function to create a new project
export const createProject = async (projectData) => {
  try {
    const response = await axios.post(`${API_URL}/projects`, projectData);
    return response.data; 
  } catch (error) {
    throw error; 
  }
}


// Function to fetch all projects
export const getAllProjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data; 
  } catch (error) {
    throw error; 
  }
}

// Function to update a project
export const updateProject = async (projectId, updatedProjectData) => {
  try {
    const response = await axios.put(`${API_URL}/project/${projectId}`, updatedProjectData);
    return response.data;
  } catch (error) {
    throw error; 
  }
}

// Function to delete a project
export const deleteProject = async (projectId) => {
  try {
    await axios.delete(`${API_URL}/project/${projectId}`);
    
  } catch (error) {
    throw error; 
  }
}


