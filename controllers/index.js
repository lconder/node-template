

/*async */function sayHello(req, res, next) {

    res.status(200).send('Hello World!');

}


module.exports = {
    sayHello
};