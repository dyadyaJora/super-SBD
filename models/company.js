var mongoose = require('mongoose');

var Company = new mongoose.Schema({
		Brand: {
	        type: String,
	        unique: true,
	        required: true
    	},
        Logo: {
            type: String
        },
    	Country: {
    		type: String,
    		required: true
    	},
    	Year: {
    		type: Date
    	} 
});

module.exports = mongoose.model('Company', Company);
