var mongoose = require('mongoose');

var Auto = new mongoose.Schema({
		Brand: {
			type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true
		},
		Logo: {
			type: String
		},
		Name: {
			type: String
		},
		Type: {
			type: String
		},
		Drive: {
			type: String
		},
		Size: {
			Length: { type: String},
			Width: { type: String},
			Height: { type: String}
		}
});

module.exports = mongoose.model('Auto', Auto);
