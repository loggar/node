// when your browser asks..

fetch("http://good.com:3000/public")
  .then(response => response.text())
  .then(result => {
    document.body.textContent = result;
  });

// Error
// Missing Access-Control-Allow-Origin
