# npm windows

issue

```
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.
```

powershell (admin)

```
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force

npm install --global --production npm-windows-upgrade

npm-windows-upgrade --npm-version latest

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

```
