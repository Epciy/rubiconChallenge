import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const ProjectFormComponent=({projectData,validationErrors,handleChange})=>{
	return (

		<Form>
            <FormGroup>
              <Label for="label" className="bold-label">Label*</Label>
              <Input
                id="label"
                name="label"
                placeholder="Write a label..."
                type="text"
                value={projectData.label}
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
                value={projectData.description}
                onChange={handleChange}
                required
              />
              <span className="text-danger">{validationErrors.description}</span>
            </FormGroup>
            <FormGroup>
              <Label for="status" className="bold-label">
                Status*
              </Label>
              <Input
                id="status"
                name="select"
                type="select"
                value={projectData.status}
                onChange={handleChange}
                required
              >
                <option>
                  False
                </option>
                <option>
                  True
                </option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="startedAt" className="bold-label">Started At*</Label>
              <Input
                id="startedAt"
                name="startedAt"
                type="date"
                value={projectData.startedAt}
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
                value={projectData.endedAt}
                onChange={handleChange}
                required
              />
              <span className="text-danger">{validationErrors.endedAt}</span>
            </FormGroup>
        </Form>
	);
}

export default ProjectFormComponent;  