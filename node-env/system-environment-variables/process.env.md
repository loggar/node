# node process.env

## NODE_ENV

bash

```
export NODE_ENV=production
```

```
NODE_ENV=production node app.js
```

windows cmd

```
SET NODE_ENV=production
```

```
SET NODE_ENV=production && node app.js
```

windows powershell

```
$Env:NODE_ENV = 'production'
```

```
$Env:NODE_ENV = 'production'; node app.js
```

You can also set it in your js file:

```
process.env.NODE_ENV = 'production';
```