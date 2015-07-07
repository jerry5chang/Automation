module.exports.command = function(){
	var dut = require('../expected/router.json');
	//var dut = require('../expected/dummyUI.json');

	return this
		.url(dut.proto + dut.url + dut.port)
	    .waitForElementPresent('input[name="login_username"]', 2000, false)
	    .setValue('input[name="login_username"]', dut.username)
	    .setValue('input[name="login_passwd"]', dut.password)
	    .click('input[type=button]');
}