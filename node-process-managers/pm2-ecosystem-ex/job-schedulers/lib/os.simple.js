/**
 * os simple
 * @author Charly Lee <charly.loggar@gmail.com>
 * @description with gmail smtp
 * @version 0.1.1
 */

var windowPlatformTemplate = 'win32';

module.exports = {
	nl: (process.platform === windowPlatformTemplate ? '\r\n' : '\n')
}