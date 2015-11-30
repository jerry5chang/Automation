module.exports.command = function(logMore){
	var retLog = (typeof logMore === "string") ? "[" + logMore + "]" : "";

	var logUrl = function(args){
		console.log("[" 
			+ args.value
				.split("/")[3].split(".")[0]
				.replace("Advanced_", "")
				.replace("AdaptiveQoS_", "")
				.replace("AiProtection_", "")
				.replace("Main_", "")
				.replace("_Content", "")
			+ "]"
			+ retLog
		);
	}

	var callback = function(result){
		if(typeof result.value === "string") retLog = ("[" + result.value + "]");
		this.url(logUrl);
	};

	return this.execute(logMore, [], callback);
}