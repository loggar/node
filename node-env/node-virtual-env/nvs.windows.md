# nvs: windows

```
https://github.com/jasongin/nvs

# or

choco install nvs
```

## Mac, Linux

```
export NVS_HOME="$HOME/.nvs"
git clone https://github.com/jasongin/nvs "$NVS_HOME"
. "$NVS_HOME/nvs.sh" install
```

## Basic Usage

```
$ nvs add latest
$ nvs add lts
```

```
$ nvs use lts
```

To add it to PATH permanently, use nvs link:

```
$ nvs link lts
```

## VS Code support

`launch.json`

```
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${file}",
      "args": [ ],
      "runtimeArgs": [ "6.10" ],
      "windows": { "runtimeExecutable": "nvs.cmd" },
      "osx": { "runtimeExecutable": "nvs" },
      "linux": { "runtimeExecutable": "nvs" }
    },
  ]
```
