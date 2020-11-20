import os

tests = """
# Default web route -> /
curl -i http://localhost:5000/

# API -> /api/hello-world
curl -i http://localhost:5000/api/hello-world
"""

for line in tests.strip().split('\n'):
    print('\n{}'.format(line))
    if not line.startswith('#'):
        cmd = line.strip()
        os.system(cmd)
