This application explores creating a simple web server and JSON API using a minimal [Python](https://www.python.org) and [Flask](https://flask.palletsprojects.com/en/1.1.x/) starting point.

# Local development

To develop this application on your machine, you will need to have Docker and `docker-compose` installed.

If you are unfamiliar with Docker, don't panic. You can download and install [Docker Desktop](https://www.docker.com/products/docker-desktop) - available for macOS and Windows.

Quick cheat sheet for working with this Dockerized app:

```sh
# ----------------------------------------------------------------------- #
#                     Docker compose cheatsheet                           #
# ----------------------------------------------------------------------- #
# Created by Rob Brennan <rob@therobbrennan.com>                          #
# ----------------------------------------------------------------------- #

# Start the application
#   NOTE: This will build new images/containers the first time; otherwise,
#         it will reuse containers if they exist.
$ docker-compose up

# Start the application after a fresh build of new images and containers
$ docker-compose up --build

# Stop the application
#   NOTE: This stops Docker services/containers for this application but
#         does NOT destroy or remove them
$ docker-compose stop

# Remove stopped service containers and any anonymous volumes
# that are attached to the containers
$ docker-compose rm -f -v

# Remove all unused containers, networks, volumes, and images not referenced
# by any containers
$ docker system prune -f --volumes && docker image prune -a -f
# ----------------------------------------------------------------------- #
```

Once you have started your application, the Python Flask example should be available at:

- Web application - [http://0.0.0.0:5000](http://0.0.0.0:5000) 🤓
- JSON API - [http://0.0.0.0:5000/api/hello-world](http://0.0.0.0:5000/api/hello-world)
  - You can also verify the JSON API using curl from a command line with `curl -X GET -H "Content-Type: application/json" http://0.0.0.0:5000/api/hello-world`
