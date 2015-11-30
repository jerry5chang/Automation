module.exports = {
	'Find JS Error On Every Page': function(browser){
		var urls = {
			list: [],
			update: function(uri){urls.list.push(uri);}
		}

		var loadUrls = function(curLang){
			urls.list.forEach(function(elems){
				browser
					.url(elems.value)
					.pause(1000)
					.getLog('browser', function(logEntriesArray){
						logEntriesArray.forEach(function(log){
							if(log.level !== "SEVERE") return true;
							if(log.message.search("Failed to load") !== -1) return true;

	 						browser
	 							.verify.equal((log.level === "SEVERE"), false, ""
	 								+ "Error: ["
									+ curLang.value
									+ "]["
									+ elems.value
										.split("/")[3].split(".")[0]
										.replace("Advanced_", "")
										.replace("AdaptiveQoS_", "")
										.replace("AiProtection_", "")
										.replace("Main_", "")
										.replace("_Content", "")
										.toUpperCase()
									+ "] "
									+ log.message
								);
						})
 					})
			});
		}

		var updateTabs = function(elems){
			elems.value.forEach(function(elem, idx){
				browser
					.elements('xpath', '//div[@class="tab"]', function(tabs){
						browser
							.elementIdClick(tabs.value[idx].ELEMENT)
							.waitForElementPresent('div[id="usb_status"]', 5000, false, null, "# Updating url ...")
							.url(urls.update)
							.pause(500);
					})
			});	
		}

		var updateMenus = function(elems){
			elems.value.forEach(function(elem, idx){
				browser
					.elements('xpath', '//div[@class="menu"]', function(menus){
						browser
							.elementIdClick(menus.value[idx].ELEMENT)
							.waitForElementPresent('div[id="usb_status"]', 5000, false, null, "# Updating url ...")
							.url(urls.update)
							.elements('xpath', '//div[@class="tab"]', updateTabs);
					})
			});	
		}

		var iterLangs = function(elems){
			elems.value.forEach(function(elem, idx){
				browser
					.elements('xpath', '//dd/a', function(langs){
						browser
							.click('dt[id="selected_lang"]')
							.elementIdClick(langs.value[idx].ELEMENT)
							.url(urls.list[0])
							.waitForElementPresent('input[id="preferred_lang"]', 5000, false, null, "# Switch language")
							.getValue('input[id="preferred_lang"]', loadUrls);
					});
			});
		};

		return browser
			.login()
			.url(urls.update)
			.elements('xpath', '//div[@class="menu"]', updateMenus)
			.elements('xpath', '//dd/a', iterLangs)
			.end();
	}
};