# node process.env

## NODE_ENV

linux

```
export NODE_ENV=production

export NODE_ENV=production && node app.js

NODE_ENV=production node app.js
```

windows cmd

```
set NODE_ENV=production

npm run env NODE_ENV=production

cross-env NODE_ENV=production my-command
```

windows powershell

```
$Env:NODE_ENV = 'production'

$Env:NODE_ENV = 'production'; node app.js
```

You can also set it in your js file:

```
process.env.NODE_ENV = 'production';
```