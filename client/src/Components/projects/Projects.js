import React, { useState } from 'react';
import { FaPen, FaTrash, FaRegCalendarAlt } from 'react-icons/fa';
import { Table, Modal } from 'reactstrap';
import ProjectForm from './ProjectForm';
import { getAllProjects } from './../../services/projectApi';
import { useDispatch } from 'react-redux';
import { deleteProject,updateProject } from '../../actions/projectActions';
import { formatDate } from './../../utils';
import useDataFetching from './../../customHooks/useDataFetching'
import NewElementButton from './../NewElementButton'

const Projects = () => {
  const { data, isModalOpen, fetchData, setIsModalOpen } = useDataFetching(getAllProjects);
  const [editedProject, setEditedProject] = useState(null);
  const dispatch = useDispatch();
   
  const handleEdit = (project) => {
    setEditedProject(project);
    toggleModal();
  };

  
  const handleDelete = async (id) => {
    try {
      console.log('Deleting project with ID:', id);
      await dispatch(deleteProject(id));
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Failed to delete the project. Please try again later.');
    }
  };
  const onEditSubmit = async (editedData) => {
    try {
      // Dispatch an action to update the project data with the editedData
      await dispatch(updateProject(editedProject._id, editedData));
      
      fetchData();
    } catch (error) {
      console.error('Error updating project:', error);
      
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleNewProject = () => {
    setEditedProject(null); 
    toggleModal();
  };
  
  
  return (
    <div>
      <NewElementButton element="New Project" handleNewElement={handleNewProject} />
    
      <Table className="custom-table">
            <thead>
              <tr>
                <th className="custom-header">Label</th>
                <th className="custom-header">Description</th>
                <th className="custom-header">Started At</th>
                <th className="custom-header">Ended At</th>
                <th className="custom-header">Created At</th>
                <th className="custom-header">Updated At</th>
                <th className="custom-header">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((project) => (
                <tr key={project._id} className="custom-row">
                  <td className="custom-cell custom-text">{project.label}</td>
                  <td className="custom-cell custom-text">{project.description}</td>
                  <td className="custom-cell">
                    <FaRegCalendarAlt className="calendar-icon" />
                    {formatDate(project.startedAt)}
                  </td>
                  <td className="custom-cell">
                    <FaRegCalendarAlt className="calendar-icon" />
                    {formatDate(project.endedAt)}
                  </td>
                  
                  <td>
                          <div style={{ backgroundColor: '#5fa8d3', color: '#00509d', padding: '1px', borderRadius: '5px' }}>
                            {formatDate(project.createdAt)}
                          </div>
                        </td>
                        <td className="updated-at-cell">
                          <div style={{ backgroundColor: '#f4a261', color: '#e76f51', padding: '1px', borderRadius: '5px' }}>
                            {formatDate(project.updatedAt)}
                          </div>
                        </td>
                  <td>
                  <FaPen onClick={() => handleEdit(project)} className="edit-icon" />
                          {' '}
                          <FaTrash onClick={() => handleDelete(project._id)} className="delete-icon" />
                        </td>
                </tr>
              ))}
            </tbody>
                   
          </Table>     

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ProjectForm
          isOpen={isModalOpen}
          toggle={toggleModal}
          onEditSubmit={onEditSubmit}
          editedProject={editedProject}
          fetchData={fetchData}
        />
      </Modal>
    </div>
  );
};

export default Projects;

