module.exports = {
  	'Channel Comparison': function(browser){
		var wl_unit = 0;
		var unitName = ["2.4GHz", "5GHz", "5GH(High)"];
		var bandName = ["Auto", "20MHz", "40MHz", "80MHz"];
		var expChannelList = require('../../expected/channel.json').result;
		
		var iterBw = function(elems){
			elems.value.forEach(function(elem, idx){
				browser
					.click('select[name="wl_bw"] option[value="' + idx + '"]')
					.getValue('select[name="wl_bw"]', function(wl_bw){
						browser
							.optionEquals("wl_channel", expChannelList[wl_unit][wl_bw.value], unitName[wl_unit] + " - " + bandName[wl_bw.value]);
					});
			});
		}

		var iterUnit= function(elems){
			elems.value.forEach(function(elem, idx){
				browser
					.click('select[name="wl_unit"] option[value="' + idx + '"]')
					.waitForElementPresent('select[name="wl_bw"]', 2000, true, null, "# Switch unit to " + unitName[idx])
					.getValue('select[name="wl_unit"]', function(e){wl_unit = e.value;})
					.elements('xpath', '//select[@name="wl_bw"]/option', iterBw);
			});
		}


		return browser
			.login()
			.click('div[id="option1"]')
			.waitForElementPresent('select[name="wl_unit"]', 2000, true, null, "# Access wireless page")
			.elements('xpath', '//select[@name="wl_unit"]/option', iterUnit)
			.end();
	}
};