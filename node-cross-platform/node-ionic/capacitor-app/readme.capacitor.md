# Capacitor—How To Get Five Apps In One time

Capacitor in six points:

- Cross Platform
- Native Access
- Use with Ionic and Angular 7
- Web Native
- Extensible with Plugins
- Open Source (MIT)

## init

```
npx -p @angular/cli ng capacitor-app

cd capacitor-app

npm install @capacitor/core @capacitor/cli --save

npx cap init

# name capacitor-app-ex
# package com.example.capacitor.ex1
```

## PWA — Progressive Web App

`angular.json`
```
outputPath = "www"
```

`capacitor.config.json`
```
webDir = "www"

bundledWebRuntime = false
```

After this you can run:

```
npx ng build --prod

npx cap serve
```

## iOS

```
npx cap add ios

npx cap copy ios

npc cap run ios
```

# Android

```
npx cap add android

npx cap copy android

npc cap run android
```

# Windows, MacOS

`index.html`
```html
<base href="./">
```

```
npx ng build --prod

npx cap add electron

cd electron

npm run electron:start
```