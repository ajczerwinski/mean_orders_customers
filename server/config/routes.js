var customers = require('../controllers/customers.js');
var orders = require('../controllers/orders.js');

module.exports = function(app){
	app.get('/index', function(req, res){
		customers.index(req, res);
	});
	app.post('/create', function(req, res){
		customers.create(req, res);
	});
	app.get('/delete/:id', function(req, res){
		customers.destroy(req, res);
	});
	app.post('/associate', function(req, res){
		orders.associate(req, res);
	});
	app.get('/indexOrders', function(req, res){
		orders.index(req, res);
	});
}