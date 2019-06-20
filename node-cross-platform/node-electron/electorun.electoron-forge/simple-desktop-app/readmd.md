# electroon-forge sample app

refs) 
* https://www.npmjs.com/package/electron-forge

## Using bootstrap

```
$ npm install -S bootstrap
```

`src/index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Temperature Converter</title>
    <link rel="stylesheet" type="text/css" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">

  </head>
  <body>
    <h1>Temperature Converter</h1>
    <div class="form-group col-md-3">
      <label for="usr">Celcius:</label>
      <input type="text" class="form-control" id="celcius" onkeyup="celciusToFahrenheit()">
    </div>
    <div class="form-group col-md-3">
      <label for="pwd">Fahrenheit:</label>
      <input type="text" class="form-control" id="fahrenheit" onkeyup="fahrenheitToCelcius()">
    </div>
    <script src='./renderer.js'></script>
  </body>
  </body>
</html>
```

```js
// src/renderer.js

function celciusToFahrenheit(){
    let celcius = document.getElementById('celcius').value;
    let fahrenheit = (celcius* 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit;

}

function fahrenheitToCelcius(){
    let fahrenheit = document.getElementById('fahrenheit').value;
    let celcius = (fahrenheit - 32) * 5/9
    document.getElementById('celcius').value = celcius;
}
```

## Packaging the application

```
$ npm run package

$ npm run package -- --platform=win32 --arch=x64

$ npm run package -- --platform=linux --arch=x64
```

These will create a folder inside `out` foler called as `simple-desktop-app-win32-x64` or `simple-desktop-app-electronjs-linux-x64`.

## Creating a make file

```
$ npm run make
```

This command will take some time to run. Once it finishes check the out folder within the project folder.

The out/make folder will have a windows installer for the desktop application.

When you run this command without any parameters, by default it creates the installer for the platform which you are using for development.
