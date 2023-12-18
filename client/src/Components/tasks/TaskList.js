import React, { useState,useEffect} from 'react';
import { FaPen, FaTrash, FaRegCalendarAlt} from 'react-icons/fa';
import { Table, Modal } from 'reactstrap';
import { getAllTasks } from './../../services/taskApi';
import { formatDate } from './../../utils';
import useDataFetching from './../../customHooks/useDataFetching'
import TaskForm from './TaskForm';
import {useDispatch ,useSelector} from 'react-redux';
import { deleteTask,updateTask } from '../../actions/taskActions';
import {fetchProjects} from'../../actions/projectActions';
import NewElementButton from './../NewElementButton'
const TaskList=()=>{
	const { data, isModalOpen, fetchData, setIsModalOpen } = useDataFetching(getAllTasks);
	
  	const [editedTask, setEditedTask] = useState(null);
  	const dispatch = useDispatch();
   

   	// Create a function to find the project label based on project _id
   	/*const findProjectLabel = (projectId) => {
	    if (Array.isArray(projects)) {
	      const project = projects.find((project) => project._id === projectId);
	      return project ? project.label : 'Unknown Project'; // Handle cases where the project is not found
	    }
	    //return 'Unknown Project'; // Handle cases where projects is not an array
	};
	*/   	
	const toggleModal = () => {
	    setIsModalOpen(!isModalOpen);
	};

	const handleEdit = (task) => {
	    setEditedTask(task);
	    toggleModal()
	};

  
  	const handleDelete = async (id) => {
	    try {
	      console.log('Deleting project with ID:', id);
	      await dispatch(deleteTask(id));
	    } catch (error) {
	      console.error('Error deleting project:', error);
	      alert('Failed to delete the project. Please try again later.');
	    }
	  };
	const onEditSubmit = async (editedData) => {
	    try {
	      // Dispatch an action to update the project data with the editedData
	      await dispatch(updateTask(editedTask._id, editedData));
	      
	      fetchData();
	    } catch (error) {
	      console.error('Error updating project:', error);
	      
	    }
	};
	const handleNewTasks = () => {
	    setEditedTask(null); 
	    toggleModal();
		
  	};
	return (
		<div>
		  <NewElementButton element="New Task" handleNewElement={handleNewTasks} />
		  <Table className="custom-table">
			<thead>
			    <tr>
			      <th className="custom-header">Label</th>
			      <th className="custom-header">Description</th>
			      <th className="custom-header">Started At</th>
			      <th className="custom-header">Ended At</th>
			      <th className="custom-header">Created At</th>
			      <th className="custom-header">Updated At</th>
			      <th className="custom-header">Projects</th>
			      <th className="custom-header">Actions</th>
			    </tr>
			  </thead>
			  <tbody>
			    {data.map((task) => (
			      <tr key={task._id} className="custom-row">
			        <td className="custom-cell custom-text">{task.label}</td>
			        <td className="custom-cell custom-text">{task.description}</td>
			        <td className="custom-cell">
			          <FaRegCalendarAlt className="calendar-icon" />
			          {formatDate(task.startedAt)}
			        </td>
			        <td className="custom-cell">
			          <FaRegCalendarAlt className="calendar-icon" />
			          {formatDate(task.endedAt)}
			        </td>
			        <td>
		                <div style={{ backgroundColor: '#5fa8d3', color: '#00509d', padding: '1px', borderRadius: '5px' }}>
		                  {formatDate(task.createdAt)}
		                </div>
		              </td>
		              <td className="updated-at-cell">
		                <div style={{ backgroundColor: '#f4a261', color: '#e76f51', padding: '1px', borderRadius: '5px' }}>
		                  {formatDate(task.updatedAt)}
		                </div>
		              </td>
			        
			        <td className="custom-cell">
			        {task.project}
			        </td>
			        <td>
		                <FaPen onClick={() => handleEdit(task)} className="edit-icon" />
		                {' '}
		                <FaTrash onClick={() => handleDelete(task._id)} className="delete-icon" />
		              </td>
			      </tr>
			    ))}
			  </tbody>
			</Table>
	      <Modal isOpen={isModalOpen} toggle={toggleModal}>
	       <TaskForm
            isOpen={isModalOpen}
            toggle={toggleModal}
            onEditSubmit={onEditSubmit}
            editedTask={editedTask}
            fetchData={fetchData}
        
          />
	        
	      </Modal>
    </div>
  );
};


export default TaskList;


