var canvas = require('../../canvas');
var drawableName = require('../components/drawable').name;
var transformName = require('../components/transform').name;

function DrawingSystem() {
	this.meshByEntityId = {};
	this.componentTypes = [drawableName, transformName];
}

DrawingSystem.prototype.update = function(entities, delta) {
	entities.forEach(function(entity){
		var mesh = this.meshByEntityId[entity.id];
		var rigidBody = entity.components.rigidBody;
		var transform = entity.components.transform;

		// TODO: iterpolate mesh to position of transform at appropriate delay.
		mesh.position.x = transform.position.x;
		mesh.position.y = transform.position.y;
	}, this);
}

DrawingSystem.prototype.onRegister = function(entity) {
	var mesh = this[entity.components.drawable.fn](entity.components.drawable.arguements); // call the function on myself to draw the thing requested.
	this.meshByEntityId[entity.id] = mesh;
}

DrawingSystem.prototype.onDeregister = function(entity) {
	this.meshByEntityId[entity.id].dispose();
	this.meshByEntityId[entity.id] = null;
}

// demo
DrawingSystem.prototype.sphere = function(args) {
	var sphere = BABYLON.Mesh.CreateSphere("sphere", 16, args.diameter || 2, scene);
	return sphere;
}

module.exports = DrawingSystem;