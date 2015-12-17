var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CustomerSchema = new mongoose.Schema({
	name: String,
	created_at: {type: String, default: Date().toString().substr(4, 11)},
	orders:[{type: Schema.Types.ObjectId, ref: 'Order'}]
});

var OrderSchema = new mongoose.Schema({
	_customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
	name: {type: String, required: true, minlength: 4 },
	created_at: {type: String, default: Date().toString().substr(4, 11)},
	quantity: Number
})

mongoose.model('Customer', CustomerSchema);
mongoose.model('Order', OrderSchema);