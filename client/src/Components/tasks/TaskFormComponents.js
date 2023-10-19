import React from 'react';
import {  Form, FormGroup, Label, Input } from 'reactstrap';

const TaskFormComponents=({taskData,validationErrors,handleChange,projects})=>{
		return(
		<Form>
	      <FormGroup>
	        <Label for="label" className="bold-label">Label*</Label>
	        <Input
	          id="label"
	          name="label"
	          placeholder="Write a label..."
	          type="text"
	          value={taskData.label}
	                onChange={handleChange}
	                required
	        />
	        <span className="text-danger">{validationErrors.label}</span>
	      </FormGroup>
	      <FormGroup>
	        <Label for="description" className="bold-label">Description*</Label>
	        <Input
	          id="description"
	          name="description"
	          placeholder="Write a description..."
	          type="textarea"
	          value={taskData.description}
	          onChange={handleChange}
	          required
	        />
	        <span className="text-danger">{validationErrors.description}</span>
	      </FormGroup>
	      <FormGroup>
	        <Label for="projects" className="bold-label">Projects*</Label>
	        <Input
			    id="projects"
			    name="project"
			    type="select"
			    value={taskData.project}
			    onChange={handleChange}
			    required	         
	        >
	        <option value="">Select a project</option>
	           {projects.map((project) => (
	                <option key={project._id} value={project._id}>
	              		{project.label}
	            	</option>
	           	))}
	        </Input>
	        <span className="text-danger">{validationErrors.project}</span>
	      </FormGroup>
	      <FormGroup>
	        <Label for="startedAt" className="bold-label">Started At*</Label>
	        <Input
	          id="startedAt"
	          name="startedAt"
	          type="date"
	          value={taskData.startedAt}
	          onChange={handleChange}
	          required
	        />
	        <span className="text-danger">{validationErrors.startedAt}</span>
	      </FormGroup>
	      <FormGroup>
	        <Label for="endedAt" className="bold-label">Ended At*</Label>
	        <Input
	          id="endedAt"
	          name="endedAt"
	          type="date"
	          value={taskData.endedAt}
	          onChange={handleChange}
	          required
	        />
	        <span className="text-danger">{validationErrors.endedAt}</span>
	      </FormGroup>
    </Form>
	);
}




export default TaskFormComponents; 