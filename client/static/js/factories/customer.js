myApp.factory('CustomerFactory', function($http){
	var factory = {};
	var factory_customer = {};
	factory.indexCustomers = function(callback){
		$http.get('/index').success(function(output){
			factory_customer = output;
			callback(factory_customer);
		})
	}
	factory.createCustomer = function(info, callback){
		console.log('what is info here? I really want to know', info);
		$http.post('/create', info).success(function(DB_data){
			factory_customer = DB_data;
			callback(factory_customer);
		});
	}
	factory.removeCustomer = function(id, callback){
		$http.delete('/delete/'+id).success(function(output){
			factory_customer = output;
			callback(factory_customer);
		})
	}
	return factory;
})