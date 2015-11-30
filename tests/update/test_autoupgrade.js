module.exports = {
        'Firmware AutoUpdate': function(browser){
	
	/*************login Google & get Data ****************/
	var spreadsheet = require('edit-google-spreadsheet');
	var google = require('../../pages/loginGoogle.js');
	var data;

	google(function(data)
	{
		console.log(data);
	});
	/********************************************************/

                return browser
			.login()
			.waitForElementPresent('body', 5000)
			.useCss()
			.click('div[id="option9"]')
			.useXpath()
			.waitForElementPresent("//td[text()='Firmware Upgrade']",5000)
			.click("//td[text()='Firmware Upgrade']")
			.acceptAlert()
			.waitForText('//div[@id="loading_block1"]/descendant::span',function(text){console.log(sheet.data[2][2]);return text ===  '45%';},200000)
			.loginDirect()
			.useCss()
			.assert.containsText("#firmver", "1786")
			.end();

        }

};

