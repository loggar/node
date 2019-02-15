// If you didn't get it with the introduction, don't worry, we're sure that handling the example as a library in the real life (or something similar) will help you to understand.
// In this example, imagine that we are going to use a Download Manager library, this library is really simple, it offers a way to download a file from your server asynchronously.
// Using the Event Emitters class of Node.js, you are able to know when the download of the file finishes and allows you to know the progress of the download.

// The example doesn't download anything really, we are just simulating a download using the setInterval (for progress event) and the setTimeout (for downloadSuccess event) function.
// Create the fileDownloader.js in some folder of your workspace and add the following code on it:

var EventEmitter = require('events');
var inherits = require('util').inherits;

// Create the constructor of DownloadManager and add the EventEmitter to the this context
function DownloadManager() {
  EventEmitter.call(this);
}

// Use Inheritance to add the properties of the event emitter to DownloadManager
inherits(DownloadManager, EventEmitter);

// Export the Download Manager
module.exports = DownloadManager;

//
// Write your library down here by prototyping !
//

/**
 * @param URL {String} Url of the imaginary file to download
 */
DownloadManager.prototype.downloadAsync = function downloadAsync(URL) {
  var _this = this;
  var progress = 0;

  console.log('Download file "' + URL + '" ...');

  // Trigger the progress event every second
  var progressInterval = setInterval(function() {
    progress += 20;

    // Emit progress event with the progress as argument
    _this.emit('progress', progress);
  }, 1000);

  // Trigger the downloadSuccess event in 5.5 seconds and clear the progress interval
  setTimeout(function() {
    var optionalDataResponse = {
      filename: 'imaginary.txt',
      filesize: 123123,
      fileUrl: URL
    };

    // Stop triggering progress
    clearInterval(progressInterval);

    // Use the emit method of the EventEmitter to trigger the downloadSuccess event !
    _this.emit('downloadSuccess', optionalDataResponse);
  }, 5500);
};
