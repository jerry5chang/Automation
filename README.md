[How To Use]
#1. Install node.js

#2. Install browser driver.
	- Reference site: http://docs.seleniumhq.org/download

#3. Running selenium-server-standalone.jar manually
	- $ java -jar selenium-server-standalone-{VERSION}.jar
	- You can find selenium-server-standalone-2.46.0.jar in ./lib

#4. Running a testcase
	- For Unix-like: ./bin/nightwatch -g {testcase}
	- For Windows: node bin\nightwatch -g {testcase}


[File Tree]
testcase
 |- nightwatch
	 |- bin
	 |- custom-commands
	 |- expected
	 |- index.js
	 |- lib
	 |- node_modules
	 |- pages
	 |- reports
	 |- tests
