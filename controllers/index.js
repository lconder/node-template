const controllers = [
	'keys',
	'main',
];

controllers.forEach( (controller) => {
	const controller_name = controller.replace('/', '_');
	// eslint-disable-next-line import/no-dynamic-require,global-require
 	module.exports[controller_name] = require(`../controllers/${controller}`);
});