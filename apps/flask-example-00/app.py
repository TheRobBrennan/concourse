# apps/flask-example-00/app.py
from flask import Flask
from redis import Redis

import debugpy

app = Flask(__name__)
redis = Redis(host='redis', port=6379, charset='utf-8', decode_responses=True)


@app.route('/')
def hello():
    redis.incr('hits')
    return 'This Compose/Flask demo has been viewed %s time(s).' % redis.get('hits')


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
