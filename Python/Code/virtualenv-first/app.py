import sys

print(sys.path)

# It prints a list of strings (the Python module search path) — the directories Python searches for modules. Example output (on most systems) looks like:

# ['',
# '/usr/lib/python3.11',
# '/usr/lib/python3.11/lib-dynload',
# '/home/youruser/.local/lib/python3.11/site-packages',
# '/usr/local/lib/python3.11/dist-packages',
# '/usr/lib/python3/dist-packages']

# The first entry may be an empty string '' (meaning the current working directory).
# Exact contents depend on your Python version, environment (virtualenv/venv), and OS.