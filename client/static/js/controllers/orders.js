myApp.controller('OrdersController', function(OrderFactory){
	var _this = this;

	this.ctrl_order = {};

	this.index = function(){
		console.log(this.orderInfo);
		this.errors = {};
		OrderFactory.indexOrders(function(factory_data){
			this.ctrl_order = factory_data;
		});
	}
})