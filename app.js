var Sequelize = require('sequelize');

var connection = new Sequelize('petfinder_schema', 'root', 'holy!!crap!!2480');

var Animal = connection.define('animal', {
	name:Sequelize.STRING,
	//category:Sequelize.BOOLEAN,
	//age:Sequelize.INTEGER,
	//gender:Sequelize.BOOLEAN
});

connection.sync().then(function () {
	Animal.create({
		name: "Mr Chops"

	});



	Animal.findById(1).then(function(animal) {
		console.log(animal.dataValues);

	});
});	