// For the example in ES6, we'll use the same idea of the first example in ES5, imagine that we are going to use a Download Manager library,
// this library is really simple, it offers a way to download a file from your server asynchronously.
// Using the Event Emitters class of Node.js, you are able to know when the download of the file finishes and allows you to know the progress of the download.

// The example doesn't download anything really, we are just simulating a download using the setInterval (for progress event) and the setTimeout (for downloadSuccess event) function.
// Create the fileDownloader.js in some folder of your workspace and add the following code on it:

const EventEmitter = require('events');

class DownloadManager extends EventEmitter {
  constructor() {
    super();
  }

  downloadAsync(URL) {
    let _this = this;
    let progress = 0;

    console.log(`Download file '${URL}' ...`);

    // Trigger the progress event every second
    let progressInterval = setInterval(() => {
      progress += 20;

      // Emit progress event with the progress as argument
      _this.emit('progress', progress);
    }, 1000);

    // Trigger the downloadSuccess event in 5.5 seconds and clear the progress interval
    setTimeout(() => {
      let optionalDataResponse = {
        filename: 'imaginary.txt',
        filesize: 123123,
        fileUrl: URL
      };

      // Stop triggering progress
      clearInterval(progressInterval);

      // Use the emit method of the EventEmitter to trigger the downloadSuccess event !
      _this.emit('downloadSuccess', optionalDataResponse);
    }, 5500);
  }
}

module.exports = DownloadManager;
