# cross-env

install:

```
npm install --save-dev cross-env
```

usage:

``` json
{
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
  }
}
```

``` json
{
	"scripts": {
		"dev": "cross-env NODE_ENV=development nodemon -w server/ ./server/",
		"start": "cross-env NODE_ENV=production node ./server/"
	}
}
```

cross-env vs cross-env-shell:

``` json
{
  "scripts": {
    "greet": "cross-env-shell GREETING=Hi NAME=Joe \"echo $GREETING && echo $NAME\""
  }
}
```