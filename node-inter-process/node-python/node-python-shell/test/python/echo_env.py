import os
import sys

process_env = 'development'

if 'NODE_ENV' in os.environ:
    process_env = os.environ.get('NODE_ENV', 'development')
else:
    print('not in system variables: NODE_ENV')
    if len(sys.argv) > 1:
        process_env = sys.argv[1]
        print('use argv[1]: %s' % process_env)
    else:
        process_env = 'development'
        print('use default: %s' % process_env)

print('process_env: %s' % process_env)
