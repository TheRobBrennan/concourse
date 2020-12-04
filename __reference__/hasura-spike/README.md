This folder contains examples exploring using [Hasura](https://hasura.io) as a backend API.

# Local development

To develop this application on your machine, you will need to have Docker and `docker-compose` installed.

If you are unfamiliar with Docker, don't panic. You can download and install [Docker Desktop](https://www.docker.com/products/docker-desktop) - available for macOS and Windows.

## Initial setup and configuration

If you would like to work with this example in its entirety, you will need to have access to an external Hasura API as well as configure [Auth0](https://auth0.com) in order for this example to work.

First, we can configure Auth0.

Please follow the instructions in `# Auth0 Setup` as outlined in the guide at [./HASURA-NEXTJS-APOLLO-AUTH0-TUTORIAL.md](./HASURA-NEXTJS-APOLLO-AUTH0-TUTORIAL.md) for details to create:

- An Auth0 tenant
- An Auth0 application
- An Auth0 API
- Custom claims in Auth0 rules

Then, we need to:

- Define our environment variables - See `## Environment variables` below
- Start our application - See `## Start the application` below

  - In another terminal window, you will need to run the database migration script - either `npm run hasura:db:migrate` from the top level, or `npm run db:migrate` from this folder - to create your database.

- Expose our local Docker enviroment to the world - See `## Make your local application accessible to the outside world` below

Once you complete the `## Environment variables` and `## Start the application`, please return to the guide to see how to:

- Connect an external Hasura API with Auth0
- Sync Users with Rules

## Environment variables

Please copy `./.env.local.sample` to `./.env` **AND** `./app/.env.example` to `./app/.env` before you define the appropriate environment variables.

As of this writing, current environment variables that need to be defined for Hasura's GraphQL engine include:

```sh
HASURA_GRAPHQL_DATABASE_URL="postgres://postgres:postgrespassword@postgres:5432/postgres"
## Enable the console served by server
HASURA_GRAPHQL_ENABLE_CONSOLE="true"
## Enable debugging mode. It is recommended to disable this in production
HASURA_GRAPHQL_DEV_MODE="true"
HASURA_GRAPHQL_ENABLED_LOG_TYPES="startup, http-log, webhook-log, websocket-log, query-log"
HASURA_GRAPHQL_ADMIN_SECRET=myhasura

# Generate an Auth0 JWT secret by going to https://hasura.io/jwt-config/
HASURA_GRAPHQL_JWT_SECRET='{"type": "RS512", "key": "-----BEGIN CERTIFICATE-----\n<EXAMPLE>\n-----END CERTIFICATE-----"}'
```

As of this writing, current environment variables that need to be defined for the Next.js example app include:

```sh
DOMAIN=http://localhost:3000

# These GraphQL endpoints must be externally accessible
GRAPHQL_WEB_ENDPOINT=https://5ab4f6eaa674.ngrok.io/v1/graphql
GRAPHQL_WEBSOCKET_ENDPOINT=wss://5ab4f6eaa674.ngrok.io/v1/graphql

# Auth0 API
AUTH0_AUDIENCE=

# Auth0 Application
AUTH0_DOMAIN=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
REDIRECT_URI=http://localhost:3000/api/callback
POST_LOGOUT_REDIRECT_URI=http://localhost:3000/
SESSION_COOKIE_SECRET=BXyv4qDtBKYxJtLopfY7nj75sJg3p2Ka
```

## Start the application

Before starting the application, please make sure that you have defined your environment variables (see `Environment variables` above) as directed.

If you have [Node.js](https://nodejs.org/en/) installed on your system, you'll be able to run scripts in `package.json` with `npm run <script-name>` - such as `npm run start:clean`

If you don't have [Node.js](https://nodejs.org/en/) or `npm` installed, you can run the `docker-compose` commands directly. For example, instead of `npm run start:clean`, you would use `docker-compose up --build` instead to start the application.

Once you have started your application:

- The Next.js web application with [Hasura](https://hasura.io), [Apollo](https://www.apollographql.com), and [Auth0](https://auth0.com) is available at [http://localhost:3000](http://localhost:3000)

![__screenshots__/hasura-nextjs-app-example-00.png](__screenshots__/hasura-nextjs-app-example-00.png)

![__screenshots__/hasura-nextjs-app-example-01.png](__screenshots__/hasura-nextjs-app-example-01.png)

![__screenshots__/hasura-nextjs-app-example-02.png](__screenshots__/hasura-nextjs-app-example-02.png)

- The Hasura Console is available at [http://localhost:8080/console](http://localhost:8080/console)

![__screenshots__/hasura-console-fresh-install.png](__screenshots__/hasura-console-fresh-install.png)

![__screenshots__/hasura-console-graphiql-example-00.png](__screenshots__/hasura-console-graphiql-example-00.png)

![__screenshots__/hasura-console-graphiql-example-01.png](__screenshots__/hasura-console-graphiql-example-01.png)

![__screenshots__/hasura-console-graphiql-example-02.png](__screenshots__/hasura-console-graphiql-example-02.png)

![__screenshots__/hasura-console-graphiql-example-03.png](__screenshots__/hasura-console-graphiql-example-03.png)

![__screenshots__/hasura-console-data-tables-example-00.png](__screenshots__/hasura-console-data-tables-example-00.png)

### Scripts

This project also contains several scripts to simplify developing your application.

The following scripts are in `package.json` for convenience:

- `build` - This stops any running services and destroys containers defined in `./docker-compose.yml` before performing a fresh build of the project.
- `start` - This launches the Dockerized application - all services defined in `./docker-compose.yml` - and can be enhanced as desired.
- `start:clean` - This starts the entire Dockerized application - all services defined in `./docker-compose.yml` - with freshly built Docker images
- `stop` - This stops all services defined in `./docker-compose.yml`
- `db:migrate` - This runs database migrations defined in `./migrations` against the Hasura endpoint specified in `./config.yaml`
  - After running `db:migrate`, your Hasura console should look like:
    ![__screenshots__/hasura-console-after-running-db-migrate.png](__screenshots__/hasura-console-after-running-db-migrate.png)
- `destroy` - This removes all stopped containers (services) as defined in `./docker-compose.yml`
- `destroy:global` - **WARNING: This removes all unused Docker containers, networks, volumes, and images not referenced by any containers on your system - including those created in other projects. Be careful!**

## Make your local application accessible to the outside world

We need to make our locally running application available to the outside world.

You can use a tool like [ngrok](https://ngrok.com/) to create an external URL to your locally running application. This tutorial will assume `ngrok` is running from the home directory of a user on macOS. Please refer to [https://dashboard.ngrok.com/get-started/setup](https://dashboard.ngrok.com/get-started/setup) for more details if the following snippet does not work for you:

```sh
$ ~/ngrok authtoken <NGROK_AUTH_TOKEN>
```

Once we have configured `ngrok` we can open a tunnel to our locally running Hasura application:

```sh
$ ~/ngrok http 8080

ngrok by @inconshreveable                                                                                                             (Ctrl+C to quit)

Session Status                online
Account                        (Plan: Free)
Version                       2.3.35
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://5056da7cc449.ngrok.io -> http://localhost:8080
Forwarding                    https://5056da7cc449.ngrok.io -> http://localhost:8080

Connections                   ttl     opn     rt1     rt5     p50     p90
                              3       5       0.04    0.01    0.14    0.28

HTTP Requests
-------------

POST /v1/query                 200 OK
POST /v1/query                 200 OK
POST /v1/query                 200 OK
POST /v1/query                 200 OK
GET  /v1/query                 404 Not Found
POST /v1/query                 200 OK
POST /v1/graphql               200 OK
GET  /v1/version               200 OK
GET  /v1alpha1/config          200 OK
POST /v1/query                 200 OK
```

In the above `ngrok` example, we can see that our Hasura Console is available at both [https://5056da7cc449.ngrok.io](https://5056da7cc449.ngrok.io) and [http://5056da7cc449.ngrok.io](http://5056da7cc449.ngrok.io) - until the `ngrok` process is canceled and those tunnels are no longer available.

**IMPORTANT: If you are using the free ngrok plan, please note that your forwarding address WILL CHANGE EVERY TIME YOU RUN ngrok.**

# Resources

## Documentation

[Hasura GraphQL Engine Documentation](https://hasura.io/docs/1.0/graphql/core/index.html)

## Tutorials

[Introduction to setting up a GraphQL back-end with Hasura](https://hasura.io/learn/graphql/hasura/introduction/)

[Introduction to using Next.js with Hasura and Apollo](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/introduction/)

[Learn Hasura and GraphQL](https://hasura.io/learn/)

- Frontend GraphQL Tutorials using a variety of supported frameworks (React, Vue, Next.js, TypeScript, Angular, iOS, and many more)
- Hasura back-end tutorials
- Introduction to GraphQL
