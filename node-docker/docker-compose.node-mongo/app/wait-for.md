## Defining Services with Docker Compose

With your code refactored, you are ready to write the `docker-compose.yml` file with your service definitions. A service in Compose is a running container, and service definitions — which you will include in your `docker-compose.yml` file — contain information about how each container image will run. The Compose tool allows you to define multiple services to build multi-container applications.

Before defining our services, however, we will add a tool to our project called `wait-for` to ensure that our application only attempts to connect to our database once the database startup tasks are complete. This wrapper script uses `netcat` to poll whether or not a specific host and port are accepting TCP connections. Using it allows you to control your application’s attempts to connect to your database by testing whether or not the database is ready to accept connections.

Though Compose allows you to specify dependencies between services using the `depends_on` option, this order is based on whether or not the container is running rather than its readiness. Using `depends_on` won’t be optimal for our setup, since we want our application to connect only when the database startup tasks, including adding a user and password to the admin authentication database, are complete. For more information on using `wait-for` and other tools to control startup order, please see the relevant [recommendations in the Compose documentation](https://docs.docker.com/compose/startup-order/).

## The script

```sh
#!/bin/sh

# original script: https://github.com/eficode/wait-for/blob/master/wait-for

TIMEOUT=15
QUIET=0

echoerr() {
  if [ "$QUIET" -ne 1 ]; then printf "%s\n" "$*" 1>&2; fi
}

usage() {
  exitcode="$1"
  cat << USAGE >&2
Usage:
  $cmdname host:port [-t timeout] [-- command args]
  -q | --quiet                        Do not output any status messages
  -t TIMEOUT | --timeout=timeout      Timeout in seconds, zero for no timeout
  -- COMMAND ARGS                     Execute command with args after the test finishes
USAGE
  exit "$exitcode"
}

wait_for() {
  for i in `seq $TIMEOUT` ; do
    nc -z "$HOST" "$PORT" > /dev/null 2>&1

    result=$?
    if [ $result -eq 0 ] ; then
      if [ $# -gt 0 ] ; then
        exec "$@"
      fi
      exit 0
    fi
    sleep 1
  done
  echo "Operation timed out" >&2
  exit 1
}

while [ $# -gt 0 ]
do
  case "$1" in
    *:* )
    HOST=$(printf "%s\n" "$1"| cut -d : -f 1)
    PORT=$(printf "%s\n" "$1"| cut -d : -f 2)
    shift 1
    ;;
    -q | --quiet)
    QUIET=1
    shift 1
    ;;
    -t)
    TIMEOUT="$2"
    if [ "$TIMEOUT" = "" ]; then break; fi
    shift 2
    ;;
    --timeout=*)
    TIMEOUT="${1#*=}"
    shift 1
    ;;
    --)
    shift
    break
    ;;
    --help)
    usage 0
    ;;
    *)
    echoerr "Unknown argument: $1"
    usage 1
    ;;
  esac
done

if [ "$HOST" = "" -o "$PORT" = "" ]; then
  echoerr "Error: you need to provide a host and port to test."
  usage 2
fi

wait_for "$@"
```

## Make the script executable:

```
chmod +x wait-for.sh
```
