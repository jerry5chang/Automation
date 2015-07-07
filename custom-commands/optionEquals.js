module.exports.command = function(selector, expected){
	var execcallback, execute, params;

	params = [selector];

	execute = function(selector){
		var result = [];
		var elems = document.getElementsByName(selector)[0];
		for(var i=0; i<elems.length; i++){
			result.push(elems[i].value);
		}
		return result.join();
	};

	callback = function(result){
		return this.verify.equal(result.value, expected);
	};

	return this.execute(execute, params, callback);
}