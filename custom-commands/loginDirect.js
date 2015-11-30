module.exports.command = function(){
        var dut = require('../expected/router.json');
        //var dut = require('../expected/dummyUI.json');

        return this
                .url(dut.proto + dut.username + ":" + dut.password + "@" + dut.url + ":80" + "/index.asp" )
		//.url(dut.proto +  dut.url + ":8080"  + "/index.asp" )
}

