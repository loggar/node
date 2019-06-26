# dotenv

## preload

You can use the `--require` (`-r`) command line option to preload dotenv. By doing this, you do not need to require and load dotenv in your application code. This is the preferred approach when using import instead of require.

```
$ node -r dotenv/config your_script.js

$ node -r dotenv/config your_script.js dotenv_config_path=/custom/path/to/your/env/vars
```
