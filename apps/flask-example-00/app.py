# apps/flask-example-00/app.py

# Python Tools for Visual Studio debug server - https://github.com/microsoft/ptvsd
#   IMPORTANT: This has been deprecated in favor of using debugpy
import ptvsd
try:
    ptvsd.enable_attach(address=('0.0.0.0', 4000))
    ptvsd.wait_for_attach()
except Exception as ex:
    raise ex

from flask import Flask
from redis import Redis

app = Flask(__name__)
redis = Redis(host='redis', port=6379, charset='utf-8', decode_responses=True)


@app.route('/')
def hello():
    redis.incr('hits')
    return 'This Compose/Flask demo has been viewed %s time(s).' % redis.get('hits')


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
