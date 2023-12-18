import {
  createProject as createProjectService,
  updateProject as updateProjectService,
  deleteProject as deleteProjectService,
  getAllProjects 
} from './../services/projectApi';


// action to fetch all Projects :
export const fetchProjects = () => {
  return async (dispatch) => {
    try {
      const projects = await getAllProjects(); // Fetch projects from your API
      console.log(projects)
      dispatch({ type: 'FETCH_PROJECTS_SUCCESS', projects });
    } catch (error) {
      console.error('Error fetching projects:', error);
      dispatch({ type: 'FETCH_PROJECTS_FAILURE', error: error.message });
    }
  };
};
// Action to add a new project
export const addProject = (projectData) => {
  return async (dispatch) => {
    try {
      const response = await createProjectService(projectData);
      dispatch({ type: 'ADD_PROJECT', project: response });
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };
};

// Action to update an existing project
export const updateProject = (projectId, updatedProjectData) => {
  return async (dispatch) => {
    try {
      const response = await updateProjectService(projectId, updatedProjectData);
      dispatch({ type: 'UPDATE_PROJECT', project: response });
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };
};

// Action to delete a project
export const deleteProject = (projectId) => {
  return async (dispatch) => {
    try {
      await deleteProjectService(projectId);
      dispatch({ type: 'DELETE_PROJECT', projectId });
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };
};

// Action to set the table with new data
export const setTable = (tableData) => {
  return {
    type: 'SET_TABLE',
    table: tableData,
  };
};

// Action clear all data
export const emptyTable = () => {
  return {
    type: 'EMPTY_TABLE',
  };
};
