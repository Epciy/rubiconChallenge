const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };

    case 'UPDATE_TASK':
      // Handle the action to update a task
      const updatedTask = action.task;
      const updatedTasks = state.tasks.map((task) =>
        task._id === updatedTask._id ? updatedTask : task
      );

      return {
        ...state,
        tasks: updatedTasks,
      };

    case 'DELETE_TASK':

      const deletedTaskId = action.taskId;
      const filteredTasks = state.tasks.filter(
        (task) => task._id !== deletedTaskId
      );

      return {
        ...state,
        tasks: filteredTasks,
      };

    default:
      return state;
  }
};

export default taskReducer;
