
// The lifecycle of these should be managed via world, do not add components directly.

var utilities = require('./utilities');
function Entity() {
	this.components = {};
    return this;
}	

Entity.prototype.addComponent = function ( component, componentName ){
	this.components[utilities.lowerCaseFirstLetter(componentName)] = component;
	return this;
}
Entity.prototype.removeComponent = function ( componentName ){
	delete this.components[utilities.lowerCaseFirstLetter(componentName)];
}

Entity.prototype.removeAllComponents = function() {
	for(var componentId in this.components) {
		delete this.components[componentId];
	}
}

module.exports = Entity;