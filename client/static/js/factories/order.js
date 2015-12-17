myApp.factory('OrderFactory', function($http){
	var factory = {};
	var factory_order = {};
	factory.indexOrders = function(callback){
		$http.get('/').success(function(output){
			factory_order = output;
			callback(factory_order);
		})
	}
	return factory;
})