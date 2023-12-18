import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../actions/taskActions';
import SharedModal from './../SharedModal';
import TaskFormComponents from './TaskFormComponents'
import useDataFetching from './../../customHooks/useDataFetching'
import { getAllProjects } from './../../services/projectApi';

const TaskForm = ({ isOpen, toggle, editedTask, onEditSubmit}) => {
  const { data } = useDataFetching(getAllProjects)
  const dispatch = useDispatch();

  const initialTaskData = {
    label: '',
    description: '',
    project:'',
    startedAt: '',
    endedAt: '',
  };
  const [taskData, setTaskData] = useState(editedTask ? editedTask : initialTaskData);
  useEffect(() => {
    if (editedTask) {
      setTaskData({
        label: editedTask.label,
        description: editedTask.description,
        project:editedTask.project,
        startedAt: editedTask.startedAt,
        endedAt: editedTask.endedAt,
      });
    }
  }, [editedTask]);

  const [validationErrors, setValidationErrors] = useState({
    label: '',
    description: '',
    project:'',
    startedAt: '',
    endedAt: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });

    setValidationErrors({
      ...validationErrors,
      [name]: '',
    });
  }

  const handleSubmit = () => {
    const errors = {};
    if (!taskData.label) {
      errors.label = 'Label is required';
    }
    if (!taskData.description) {
      errors.description = 'Description is required';
    }
     if (!taskData.project) {
      errors.project = 'Project is required';
    }
    
    if (!taskData.startedAt) {
      errors.startedAt = 'Started At is required';
    }
    if (!taskData.endedAt) {
      errors.endedAt = 'Ended At is required';
    }

    setValidationErrors(errors);

    if (Object.values(errors).some((error) => error)) {
      return;
    }

    if (editedTask) {
      // This is an edit operation
      onEditSubmit(taskData); 
    } else {
      // This is an add operation
      dispatch(addTask(taskData));
    }

    toggle();
  }

  return (
    
    <SharedModal 
         isOpen={isOpen}
         toggle={toggle}
         title="Add new task"
         formComponent={
          <TaskFormComponents 
            taskData={taskData}
            validationErrors={validationErrors}
            handleChange={handleChange}
            projects={data}
          />
         }
         onSubmit={handleSubmit} 
    />

  );
  
};

export default TaskForm;
