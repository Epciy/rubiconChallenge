const Task=require('./../models/Task')


//create a new task
exports.createTask= async (req, res) => {
    try {
      const { label, description, startedAt, endedAt , project} = req.body;
      const task = new Task({
        label,
        description,
        startedAt,
        endedAt,
        project,
        
      });

      const newTask = await task.save();
      res.status(201).json(newTask);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

//Get all tasks 
exports.getAllTasks=async (req, res) => {
    try {
      const tasks = await Task.find();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
 
};

// Get a specific task by ID
exports.getTaskById= async (req, res) => {
    try {
      const { id } = req.params;
      const task = await Task.findById(id);

      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }

      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};


// Update an existing task by ID
exports.updateTaskById= async (req, res) => {
    try {
      const { id } = req.params;
      const updatedTaskData = req.body;

      const task = await Task.findByIdAndUpdate(id, updatedTaskData, { new: true });

      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }

      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    } 
};


// Delete a task by ID
exports.deleteTaskById=async (req, res) => {
    try {
      const { id } = req.params;
      const deletedTask = await Task.findByIdAndDelete(id);

      if (!deletedTask) {
        return res.status(404).json({ error: 'Task not found' });
      }

      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

};