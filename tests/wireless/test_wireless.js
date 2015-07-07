module.exports = {
  	'Channel Comparison': function(browser){
		var wl_unit = 0;
		var expChannelList = require('../../expected/channel.json').result;
		
		var iterBw = function(elems){
			var i = 0;
			var callback = function(e){
				this.optionEquals("wl_channel", expChannelList[wl_unit][e.value]);
			}

			elems.value.forEach(function(){
				browser
					.click('select[name="wl_bw"] option[value="' + (i++) + '"]')
					.getValue('select[name="wl_bw"]', callback);
			});
		}

		var iterUnit= function(elems){
			var i = 0;
			var callback = function(e){
				wl_unit = e.value;
			};

			elems.value.forEach(function(){
				browser
					.click('select[name="wl_unit"] option[value="' + (i++) + '"]')
					.waitForElementPresent('select[name="wl_bw"]', 2000)
					.getValue('select[name="wl_unit"]', callback)
					.elements('xpath', '//select[@name="wl_bw"]/option', iterBw);
			});
		}

		return browser
			.login()
			.waitForElementPresent('body', 5000)
			.click('div[id="option1"]')
			.waitForElementPresent('select[name="wl_unit"]', 2000)
			.elements('xpath', '//select[@name="wl_unit"]/option', iterUnit)
			.end();
	}
};