# npm config

## Automating npm init

```
C:\_loggar\_workspace\loggar-note\node (master)
λ sh ./npm-config.sh

C:\_loggar\_workspace\loggar-note\node (master)
λ npm get
; cli configs
metrics-registry = "https://registry.npmjs.org/"
scope = ""
user-agent = "npm/6.4.1 node/v10.13.0 win32 x64"

; userconfig C:\Users\webnl\.npmrc
init.author.email = "charly.loggar@gmail.com"
init.author.name = "Charly Lee"
init.license = "MIT"
init.version = "1.0.0"

; node bin location = C:\_dev\nodejs\node-v10.13.0-win-x64\node.exe
; cwd = C:\_loggar\_workspace\loggar-note\node
; HOME = C:\Users\webnl
; "npm config ls -l" to show all defaults.
```

```
λ npm init -y
Wrote to C:\_loggar\_workspace_tmp\npm-init-ex\package.json:
{
  "name": "npm-init-ex",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Charly Lee <charly.loggar@gmail.com>",
  "license": "MIT"
}
```
