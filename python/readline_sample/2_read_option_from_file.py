import readline
import os, sys  # for tab test (show commands)

readline.read_init_file('option.rc')

while True:
    line = input('Prompt ("stop" to quit): ')
    if line == 'stop':
        break
    print ('ENTERED: "%s"' % line)
