import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const createTask = async (taskData) => {
  try {
    const response = await axios.post(`${API_URL}/tasks`, taskData);
    return response.data; 
  } catch (error) {
    throw error; 
  }
}

export const getAllTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data; 
  } catch (error) {
    throw error; 
  }
}

export const updateTask = async (taskId, updatedTaskData) => {
  try {
    const response = await axios.put(`${API_URL}/task/${taskId}`, updatedTaskData);
    return response.data;
  } catch (error) {
    throw error; 
  }
}

export const deleteTask= async (taskId) => {
  try {
    await axios.delete(`${API_URL}/task/${taskId}`);
    
  } catch (error) {
    throw error; 
  }
}