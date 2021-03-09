// define URL and for element
const url = "http://localhost:3000/upload-photos";
const form = document.querySelector("form");

// add event listener
form.addEventListener("submit", e => {
  // disable default action
  e.preventDefault();

  // collect files
  const files = document.querySelector("[name=file]").files;
  const formData = new FormData();
  Array.from(files).forEach(file => {
    formData.append("photos", file);
  });

  // post form data
  const xhr = new XMLHttpRequest();

  // log response
  xhr.onload = () => {
    console.log(xhr.responseText);
  };

  // create and send the reqeust
  xhr.open("POST", url);
  xhr.send(formData);
});
