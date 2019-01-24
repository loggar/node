## Debug logs are printed on error files (PM2 + WINSTON)

[Winston doc](https://github.com/winstonjs/winston?PHPSESSID=02b65463441ebb6580ba41bde8f03247#console-transport) states:

> debugStdout: Boolean flag indicating if 'debug'-level output should be redirected to stdout instead of to stderr. (default false)

Default is to stderr, it's not a bug it's a feature.