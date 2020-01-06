// Then the Download Manager can be used as follows (in this example on the index.js file):

// Require the download manager library
var DownloadManager = require('./fileDownloader');

// Create an instance of the Download Manager
var downloader = new DownloadManager();

// Add event listener of the progress of download
downloader.on('progress', function(progress) {
  console.log('Download progress: ' + progress + '%');
});

// Do something when the download of the file ends
downloader.on('downloadSuccess', function(response) {
  //{
  //    filename: "imaginary.txt",
  //    filesize: 123123
  //}
  console.log(response);
});

// Start download
downloader.downloadAsync('file.txt');
