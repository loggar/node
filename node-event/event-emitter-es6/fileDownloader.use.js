// Require the download manager library
const DownloadManager = require('./fileDownloader');

// Create an instance of the Download Manager
const downloader = new DownloadManager();

// Add event listener of the progress of download
downloader.on('progress', progress => {
  console.log(`Download progress ${progress}%`);
});

// Do something when the download of the file ends
downloader.on('downloadSuccess', response => {
  //{
  //    filename: "imaginary.txt",
  //    filesize: 123123
  //}
  console.log(response);
});

// Start download
downloader.downloadAsync('file.txt');
