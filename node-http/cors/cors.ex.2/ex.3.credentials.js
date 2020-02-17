fetch("http://good.com:3000/private", {
  credentials: "include"
})
  .then(response => response.text())
  .then(result => {
    let output = document.createElement("div");
    output.textContent = result;
    document.body.appendChild(output);
  });
