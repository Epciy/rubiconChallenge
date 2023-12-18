const initialState = {
  projects: [],
  
};
const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.project],
      };

    case 'UPDATE_PROJECT':
      
      const updatedProject = action.project;
      const updatedProjects = state.projects.map((project) =>
        project._id === updatedProject._id ? updatedProject : project
      );

      return {
        ...state,
        projects: updatedProjects,
      };

    case 'DELETE_PROJECT':
      // Handle the action to delete a project
      const deletedProjectId = action.projectId;
      const filteredProjects = state.projects.filter(
        (project) => project._id !== deletedProjectId
      );

      return {
        ...state,
        projects: filteredProjects,
      };
    case 'FETCH_PROJECTS_SUCCESS':
      // Handle the action to update projects with the fetched data
      return {
        ...state,
        projects: action.projects,

      };

    default:
      return state;
  }
};

export default projectReducer;
