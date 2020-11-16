# apps/flask-example-00/app.py
from flask import Flask
from redis import Redis

# Application settings
HOST = "0.0.0.0"
DEBUG_PORT = 5678
REDIS_PORT = 6379

try:
    import debugpy
    # We're just being explicit here. By default, debugpy listens on port 5678
    debugpy.listen((HOST, DEBUG_PORT))
except RuntimeError as err:
    print("debugpy is already listening on port %d" % DEBUG_PORT)
# REFERENCE: This is a catch all exception handler example. It is a best practice to handle specific errors and exceptions; not generalized like this.
# except Exception as ex:
#     template = "An exception of type {0} occurred. Arguments:\n{1!r}"
#     message = template.format(type(ex).__name__, ex.args)
#     print(message)

app = Flask(__name__)
redis = Redis(host='redis', port=REDIS_PORT,
              charset='utf-8', decode_responses=True)


@app.route('/')
def hello():
    # Log before
    app.logger.info(
        'Hit counter is at %s' % redis.get('hits'))

    # Increment our hit counter key in Redix
    redis.incr('hits')

    # Log after
    app.logger.info(
        'Hit counter is now %s' % redis.get('hits'))

    # Return result to the web page
    return 'This Compose/Flask demo has been viewed %s time(s).' % redis.get('hits')


if __name__ == "__main__":
    app.run(host=DEBUG_PORT, debug=True)
