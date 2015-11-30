module.exports.command = function(){
	var dut = require('../expected/router.json');
	//var dut = require('../expected/dummyUI.json');

	return this
		.url(dut.proto + dut.url + dut.port)
	    .waitForElementPresent('input[name="login_username"]', 2000, true, function(){}, "# Access " + dut.url)
	    .setValue('input[name="login_username"]', dut.username)
	    .setValue('input[name="login_passwd"]', dut.password)
	    .click('div[class="button"]')
		.waitForElementPresent('div[id="usb_status"]', 5000, true, function(){}, "# Login " + dut.username);
}