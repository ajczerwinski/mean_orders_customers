var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = {
	associate: function(req, res){
		Customer.findOne({_id: req.params.id})
			.populate('orders')
			.exec(function(err, customer){
				res.json('customer', {customer:customer});
			});
	},
	index: function(req, res){
		Order.find({}, function(err, orders){
			if(err){
				res.json(err);
			}
			else{
				console.log('found all orders');
				console.log(orders);
				res.json(orders);
			}
		})
	}

}