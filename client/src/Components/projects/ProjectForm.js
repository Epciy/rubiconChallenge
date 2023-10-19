import React, { useState, useEffect } from 'react';
import ProjectFormComponent from './ProjectFormComponent';
import { useDispatch } from 'react-redux';
import { addProject} from '../../actions/projectActions';
import SharedModal from './../SharedModal';


const ProjectForm = ({ isOpen, toggle, editedProject, onEditSubmit }) => {
  const dispatch = useDispatch();
  const initialProjectData = {
    label: '',
    description: '',
    startedAt: '',
    endedAt: '',
  };
  
  const [projectData, setProjectData] = useState(editedProject ? editedProject : initialProjectData);

  useEffect(() => {
    if (editedProject) {
      setProjectData({
        label: editedProject.label,
        description: editedProject.description,
        startedAt: editedProject.startedAt,
        endedAt: editedProject.endedAt,
      });
    }
  }, [editedProject]);

  const [validationErrors, setValidationErrors] = useState({
    label: '',
    description: '',
    startedAt: '',
    endedAt: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });

    setValidationErrors({
      ...validationErrors,
      [name]: '',
    });
  }

  const handleSubmit = () => {
    const errors = {};
    if (!projectData.label) {
      errors.label = 'Label is required';
    }
    if (!projectData.description) {
      errors.description = 'Description is required';
    }
    if (!projectData.startedAt) {
      errors.startedAt = 'Started At is required';
    }
    if (!projectData.endedAt) {
      errors.endedAt = 'Ended At is required';
    }

    setValidationErrors(errors);

    if (Object.values(errors).some((error) => error)) {
      return;
    }

    if (editedProject) {
      // This is an edit operation
      onEditSubmit(projectData); 
    } else {
      // This is an add operation
      dispatch(addProject(projectData));
    }

    toggle();
  }
  
  return (
    <SharedModal 
         isOpen={isOpen}
         toggle={toggle}
         title="Add new project"
         formComponent={
          <ProjectFormComponent
            projectData={projectData}
            validationErrors={validationErrors}
            handleChange={handleChange}
            
          />
         }
        onSubmit={handleSubmit} 
    />

  );
};

export default ProjectForm;


