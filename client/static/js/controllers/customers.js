myApp.controller('CustomersController', function(CustomerFactory){
	var _this = this;

	this.ctrl_customer = {};

	this.index = function(){
		console.log(this.customerInfo);
		this.errors = {};
		CustomerFactory.indexCustomers(function(factory_data){
			_this.ctrl_customer = factory_data;
		});
	},
	this.index();
	this.create = function(){
		console.log(this.customerInfo);
		this.errors = {};
		CustomerFactory.createCustomer(this.customerInfo, function(factory_data){
			if(factory_data.message){
				_this.errors = factory_data.errors.name.message;
			}
			else{
				_this.index();
				// _this.ctrl_customer = factory_data;
				console.log(factory_data);
				_this.customerInfo = {};
			}
		})
	},
	this.delete = function(id){
		console.log(id);
		CustomerFactory.removeCustomer(id, this.indexCustomers);
	}
})