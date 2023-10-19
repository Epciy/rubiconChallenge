const Project=require('../models/Project');

//create a new project 
exports.createProject= async (req, res) => {
    try {
      const { label, description, startedAt, endedAt, status } = req.body;
      const project = new Project({
        label,
        description,
        startedAt,
        endedAt,
        status,
      });

      const newProject = await project.save();
      res.status(201).json(newProject);
    
    } catch (error) {
    	
      res.status(400).json({ error: error.message });
    }
  
};


// Get all projects
exports.getAllProjects= async (req, res) => {
    try {
      const projects = await Project.find();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  
};



// Get a specific project by ID
exports.getProjectById= async (req, res) => {
    try {
      const { id } = req.params;
      const project = await Project.findById(id);
      
      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }

      res.status(200).json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};




// Update an existing project by ID
exports.updateProjectById=async (req, res) => {
    try {
      const { id } = req.params;
      const updatedProjectData = req.body;

      const project = await Project.findByIdAndUpdate(id, updatedProjectData, { new: true });

      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }

      res.status(200).json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

};

// Delete a project by ID
exports.deleteProjectById=async (req, res) => {
    try {
      const { id } = req.params;
      const deletedProject = await Project.findByIdAndDelete(id);

      if (!deletedProject) {
        return res.status(404).json({ error: 'Project not found' });
      }

      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  
};