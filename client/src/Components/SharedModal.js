import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import {FaTimes,FaClipboardList,FaFlag} from 'react-icons/fa';
const SharedModal = ({ isOpen, toggle, title, formComponent, onSubmit }) => {
  return (
  
    <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader className="d-flex justify-content-between align-items-center">
             {title === 'Add new task' ? <FaClipboardList /> : title === 'Add new project' ? <FaFlag /> : null}
              {' '}
              {title}
            <div className="modal-close-icon" onClick={toggle}>
              <FaTimes />
            </div> 
           
            <div>
              {title === 'Add new task' ? <h6 className="modal-secondary-title">  Fill your task attributs</h6> : title === 'Add new project' ? <h6 className="modal-secondary-title">   Fill your project attributs</h6> : null}
            </div> 
        </ModalHeader>
        <ModalBody>
          {formComponent}
        </ModalBody>
        <ModalFooter>
          <Button className="cancel-button" onClick={toggle}>
            Cancel
          </Button>
          <Button  className="save-button" onClick={onSubmit}>
            Save
          </Button>
        </ModalFooter>
    </Modal>

  );
};

export default SharedModal;
