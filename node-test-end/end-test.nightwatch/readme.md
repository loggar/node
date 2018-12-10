# end to end testing

## nightwatch

refs)

* http://nightwatchjs.org/guide

### requirements

jvm (http://www.oracle.com/technetwork/java/javase/downloads/index.html)

selenium server (http://selenium-release.storage.googleapis.com/index.html)

```
npm install --save-dev selenium-server-standalone-jar
```

chromedriver (https://sites.google.com/a/chromium.org/chromedriver/downloads)

```
npm install --save-dev chromedriver
```

### install nightwatch

```
npm install nightwatch --save-dev
```

### Configuring Nightwatch.js

``` json
// nightwatch.json
{
	"src_folders": [
		"src-test-nightwatch"
	],
	"output_folder": "reports-nightwatch",
	"selenium": {
		"start_process": true,
		"server_path": "./node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.13.0.jar",
		"log_path": "",
		"port": 31010,
		"cli_args": {
			"webdriver.chrome.driver": "./node_modules/bin/chromedriver"
		}
	},
	"test_settings": {
		"default": {
			"launch_url": "http://localhost",
			"selenium_port": 31010,
			"selenium_host": "localhost",
			"desiredCapabilities": {
				"browserName": "chrome",
				"javascriptEnabled": true,
				"acceptSslCerts": true
			}
		}
	}
}
```

### run test

```
$ npm run test-e2e

$ ./node_modules/.bin/nightwatch [source1] [source2] [...] [options]

$ node nightwatch.js [source1] [source2] [...] [options]

```