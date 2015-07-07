module.exports = {
	'Find JS Error On Every Page': function(browser){
		var iterTabs = function(elems){
			var i = 0;

			elems.value.forEach(function(){
				browser
					.elements('xpath', '//div[@class="tab"]', function(tabs){
						browser
							.elementIdClick(tabs.value[i++].ELEMENT)
							.waitForElementPresent('div[id="usb_status"]', 5000)
							.pause(1000);
					});
			});
		};

		var iterMenus = function(elems){
			var i = 0;

			elems.value.forEach(function(){
				browser
					.elements('xpath', '//div[@class="menu"]', function(menus){
						browser
							.elementIdClick(menus.value[i++].ELEMENT)
							.waitForElementPresent('div[id="usb_status"]', 5000)
							.pause(1000)
							.elements('xpath', '//div[@class="tab"]', iterTabs);
					});
			});
		};

		return browser
			.login()
			.waitForElementPresent('body', 3000)
			.elements('xpath', '//div[@class="menu"]', iterMenus)
			.end();
	}
};