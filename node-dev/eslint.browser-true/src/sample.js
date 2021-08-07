var request = new XMLHttpRequest();

request.open("POST", url, true);
request.onreadystatechange = readyStateChange.bind({}, d, xhr);
request.upload.onprogress = onProgress.bind({}, d, xhr);
request.send(fd);

var i = 0;

if (i == 0) {
  console.log("i=0");
}
