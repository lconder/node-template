async function sayHello(req, res, next) {
	try {
		res.send("Node template");
	} catch (e) {
		next(e);
	}
}

module.exports = {
	sayHello,
}