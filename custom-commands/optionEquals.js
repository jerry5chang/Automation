module.exports.command = function(selector, expected, msg){
	var callback, execJS, params;

	params = [selector];

	execJS = function(objName){
		var result = [];
		var elems = document.getElementsByName(objName)[0];

		for(var i=0; i<elems.length; i++){
			result.push(elems[i].value);
		}

		return result.join();
	};

	callback = function(result){
		return this.verify.equal(result.value, expected, msg);
	};

	return this.execute(execJS, params, callback);
}