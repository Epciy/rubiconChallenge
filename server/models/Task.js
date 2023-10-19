const mongoose=require('mongoose');
const taskSchema=new mongoose.Schema({
	
	label:{
		type:String,
		required:[true,'Please add a label for the task'],
	},

	description: {
	    type: String,
	    trim:true,
	    required: [true, 'Please add a description for the task.'], 
  	},
	
	startedAt:{
		type: Date,
    	required: [true, 'Please specify the starting date.'],
	},
	endedAt:{
		type: Date,
    	required: [true, 'Please specify the ending date.'],
	},
	
	updatedAt:{
		type:Date,
		default:Date.now()
	},

	createdAt:{
		type:Date,
		default:Date.now() 
	},
	project: {
	    type: mongoose.Schema.ObjectId,
	    ref: 'Project',
  	},
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;