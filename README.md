This project explores working with [Python](https://www.python.org), [Flask](https://flask.palletsprojects.com/en/1.1.x/), [Next.js](https://nextjs.org), and [TypeScript](https://www.typescriptlang.org) within a Docker environment for local development.

# Local development

To develop this application on your machine, you will need to have Docker and `docker-compose` installed.

If you are unfamiliar with Docker, don't panic. You can download and install [Docker Desktop](https://www.docker.com/products/docker-desktop) - available for macOS and Windows.

If you have [Node.js](https://nodejs.org/en/) installed on your system, you'll be able to run scripts in `package.json` with `npm run <script-name>` - such as `npm run start:clean`

If you don't have [Node.js](https://nodejs.org/en/) or `npm` installed, you can run the `docker-compose` commands directly. For example, instead of `npm run start:clean`, you would use `docker-compose up --build` instead to start the application.

Once you have started your application, the Python Flask example should be available at [http://0.0.0.0:5000](http://0.0.0.0:5000) 🤓

## Docker scripts

This project also contains several scripts to simplify developing your application using Docker.

The following scripts are in `package.json` for convenience:

- `start` - This launches the Dockerized application - all services defined in `./docker-compose.yml` - and can be enhanced to launch additional client apps as desired.
- `start:clean` - This starts the entire Dockerized application - all services defined in `./docker-compose.yml` - with freshly built Docker images
- `stop` - This stops all services defined in `./docker-compose.yml`
- `destroy` - This removes all stopped containers (services) as defined in `./docker-compose.yml`
- `destroy:global` - WARNING: This removes all unused Docker containers and images on your system - including those that may have been created in other projects. Be careful!

## Visual Studio Code

If you are using [VS Code](https://code.visualstudio.com), you can install the free [Python extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-python.python) extension, which includes a bunch of useful features and functionality - including a debugger.

Suggested extensions for [VS Code](https://code.visualstudio.com) are available for you at `.vscode/extensions.json` - all you need to do is click on `Extensions` in the left sidebar and search for `@recommended`

### Debugging

To debug your application using [VS Code](https://code.visualstudio.com):

- Make sure your application is running within the Dockerized environment (see `Local development` above)
- Click on `Run` in the left sidebar and select the launch configuration you would like to use (e.g. `Attach to Flask Example 00`)
  - Select breakpoint(s) to verify that your debugger has connected successfully
    - You may need to make a minor change (such as saving the `app.py` file) for breakpoints and the debugger to take effect

Launch configurations for [VS Code](https://code.visualstudio.com) are in `.vscode/launch.json` - with `Attach to Flask Example 00` demonstrating how to connect to an example Python Flask application which is running within a Docker container 🤓
