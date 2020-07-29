# npm-check-updates

https://www.npmjs.com/package/npm-check-updates

## Installation and Usages

```
$ npm install -g npm-check-updates
```

```
$ ncu
 
 express           4.12.x  →   4.13.x
 multer            ^0.1.8  →   ^1.0.1
 react-bootstrap  ^0.22.6  →  ^0.24.0
 react-a11y        ^0.1.1  →   ^0.2.6
 webpack          ~1.9.10  →  ~1.10.5
 
Run with -u to upgrade your package.json
```

```
$ ncu -u
 
 express           4.12.x  →   4.13.x
 
package.json upgraded
 
$ npm install      # update installed packages and package-lock.json 
```

You can include or exclude specific packages using the `--filter` and `--reject` options. They accept strings, comma-delimited lists, or regular expressions:

```
# match mocha and should packages exactly 
$ ncu mocha             # shorthand for ncu -f mocha (or --filter) 
$ ncu one, two, three
 
# exclude packages 
$ ncu -x nodemon        # shorthand for ncu --reject nodemon 
 
# match packages that start with "gulp-" using regex 
$ ncu '/^gulp-.*$/'
 
# match packages that do not start with "gulp-". Note: single quotes are required 
# here to avoid inadvertent bash parsing 
$ ncu '/^(?!gulp-).*$/'
```

## Options

```
-f, --filter             include only package names matching the given string,
                         comma-delimited list, or regex
-g, --global             check global packages instead of in the current project
-h, --help               output usage information
-m, --packageManager     npm or bower (default: npm)
-r, --registry           specify third-party NPM registry
-u, --upgrade            overwrite package file
-x, --reject             exclude packages matching the given string, comma-
                         delimited list, or regex
-V, --version            output the version number
```

Advanced Options

```
-d, --dev                check only devDependencies
-e, --error-level        set the error-level. 1: exits with error code 0 if no
                         errors occur. 2: exits with error code 0 if no
                         packages need updating (useful for continuous
                         integration)
-j, --jsonAll            output new package file instead of human-readable
                         message
--jsonUpgraded           output upgraded dependencies in json
-l, --loglevel           what level of logs to report: silent, error, warn,
                         info, verbose, silly (default: warn)
-p, --prod               check only dependencies (not devDependencies)
--packageData            include stringified package file (use stdin instead)
--packageFile            package file location (default: ./package.json)
--packageFileDir         use same directory as packageFile to compare against
                         installed modules. See #201.
--configFilePath         rc config file path (default: ./)
--configFileName         rc config file name (default: .ncurc.{json,yml,js})                             
-n, --newest             find the newest published versions available instead
                         of the latest stable versions
-o, --optional           check only optionalDependencies
--peer                   check only peerDependencies
-s, --silent             don't output anything (--loglevel silent)
--semverLevel            find the highest version within "major" or "minor"
-t, --greatest           find the highest versions available instead of the
                         latest stable versions
-a, --upgradeAll         include even those dependencies whose latest
                         version satisfies the declared semver dependency
--removeRange            remove version ranges from the final package version
--timeout                a global timeout in ms
```

## Configuration Files

Use a `.ncurc.{json,yml,js}` file to specify configuration information. You can specify file name and path using -`-configFileName` and `--configFilePath` command line options.

For example, `.ncurc.json`:

```json
{
  "upgrade": true, 
  "filter": "express",
  "reject": [
    "@types/estree",
    "ts-node"
  ]
}
```

### Integration

```js
const ncu = require('npm-check-updates');
 
ncu.run({
    // Always specify the path to the package file
    packageFile: 'package.json',
    // Any command-line option can be specified here.
    // These are set by default:
    silent: true,
    jsonUpgraded: true
}).then((upgraded) => {
    console.log('dependencies to upgrade:', upgraded);
});
```

## Docker

Docker volumes can be used to easily update a package:

```
docker run --rm -v $(pwd)/package.json:/app/package.json creack/ncu -u -a --packageFile /app/package.json
```
