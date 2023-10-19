import {
  createTask as createTaskService,
  updateTask as updateTaskService,
  deleteTask as deleteTaskService,
} from './../services/taskApi';

// Action to add a new task
export const addTask = (taskData) => {
  return async (dispatch) => {
    try {
      const response = await createTaskService(taskData);
      dispatch({ type: 'ADD_TASK', task: response });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };
};

// Action to update an existing task
export const updateTask = (taskId, updatedTaskData) => {
  return async (dispatch) => {
    try {
      const response = await updateTaskService(taskId, updatedTaskData);
      dispatch({ type: 'UPDATE_TASK', task: response });
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };
};

// Action to delete a task
export const deleteTask = (taskId) => {
  return async (dispatch) => {
    try {
      await deleteTaskService(taskId);
      dispatch({ type: 'DELETE_TASK', taskId });
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
};
