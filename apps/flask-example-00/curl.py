import os

tests = """
# Default web route -> /
curl -i http://localhost:5000/

# API -> /api/hello-world
curl -i http://localhost:5000/api/hello-world

# API -> /apidocs
curl -i http://localhost:5000/apidocs

# API -> /api/user
curl -i http://localhost:5000/api/user
"""

for line in tests.strip().split('\n'):
    print('\n{}'.format(line))
    if not line.startswith('#'):
        cmd = line.strip()
        os.system(cmd)
