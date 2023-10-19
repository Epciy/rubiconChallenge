const mongoose=require('mongoose');

const projectSchema=new mongoose.Schema({
	label:{
		type:String,
		required:[true,'Please add a label for the project'],
	},
	description: {
	    type: String,
	    trim:true,
	    required: [true, 'Please add a description for the project.'], 
    },
	status:{
		type:Boolean,
		default:false
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
	}
})

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;