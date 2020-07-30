# Kill all forever processes

```
ps -efa | grep  node | grep forever | `awk '{ print "kill "$2}'`
```

Kill all node processes

```
ps -efa | grep  node | `awk '{ print "kill "$1}'`
```
