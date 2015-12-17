var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var Order = mongoose.model('Order');

module.exports = {
	index: function(req, res){
		Customer.find({}, function(err, customers){
			if(err){
				res.json(err);
			}
			else{
				console.log("found all customers");
				console.log(customers);
				res.json(customers);
			}
		})
		// res.render('index.html');
	},
	create: function(req, res){
		Customer.findOne({ name: req.body.name }, function(err, customers){
			if(customers){
				console.log("That customer already exists!", customers);
				res.json(customers);
			}
			else if(!customers){
				var customers = new Customer({name: req.body.name});
				console.log("CL-ing customer", customers);
				customers.save(function(err){
					if(err){
					console.log(err);
					res.json(err);
					}
					else{
						console.log('here', customers);
						res.json(customers);
					}
				});
			}
		})
	},
	destroy: function(req, res){
		console.log("CL-ing the id of the req.body that's about to get deleted", req.params.id);
		Customer.remove({_id: req.params.id}, function(err, customers){
			if(err){
				console.log("something went wrong and it didn't delete from the database");
			}
			else{
				console.log('deletion successful');
			}
			res.redirect('/#/customers');
		})
	}
}