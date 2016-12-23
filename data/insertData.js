var mongoose = require('mongoose');
var nconf = require('../config.js');

var Company = require('../models/company.js');
var Auto = require('../models/auto.js');
var fs = require('fs');

mongoose.connect('mongodb://' + nconf.get('mongo:host') + '/' + nconf.get('mongo:dbName'));

//db = mongoose.connect;

mongoose.connection.on('error', function (err) {
  console.log('error' + err);
});
mongoose.connection.once('open', function callback() {
  console.log('+');
});

var cmps = [];

fs.readFile(__dirname + '/dataCompany.json', function(error, data) {
	//console.log(JSON.parse(data));
	var comp = JSON.parse(data);
	comp.forEach(function(item, i) {
		cmps[i] = new Company(item);
		cmps[i].save(function(err, comp1){
			if(err) console.log('err123' + err);
			else
				console.log('uraaa');
		});
	});
});

console.log(cmps);


fs.readFile(__dirname + '/dataAuto.json', function(error, data) {
	//console.log(JSON.parse(data));
	var auto = JSON.parse(data),
	doc, x;
	auto.forEach(function(item, i) {
		console.log(item );
		
		for (var j = 0; j < cmps.length; j++) {
			if(cmps[j].Brand == item.Brand) {
				x = cmps[j];
				break;
			}
		}
		console.log(item);
		item.Brand = x._id;
		doc = new Auto(item);
		doc.save(function(err, comp1){
			if(err) console.log('err123' + err);
			else
				console.log('uraaa2');
		});
	});
});