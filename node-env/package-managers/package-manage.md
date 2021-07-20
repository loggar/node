# package managers

## npm check

Check for outdated, incorrect, and unused dependencies.

```
$ npm install -g npm-check
$ npm-check
```

or

```
$ npx npm-check
```

## depcheck

Depcheck is a tool for analyzing the dependencies in a project to see: how each dependency is used, which dependencies are useless, and which dependencies are missing from `package.json`.

```
depcheck [directory] [arguments]
```

```
$ npm install -g depcheck

$ depcheck ./
```

or

```
$ npx depcheck
```

## npkill

Easily find and remove old and heavy node_modules folders

```
npx npkill -d ~/projects
```
