import React from 'react';
import { Button } from 'reactstrap';
import { FaPlus } from 'react-icons/fa';

const NewElementButton = ({ element, handleNewElement }) => {
  return (
    <div className="button-container">
      <Button className="white-button" onClick={() => handleNewElement()}>
        <FaPlus className="plus-icon purple-icon" /> {element}
      </Button>
    </div>
  );
};

export default NewElementButton;
