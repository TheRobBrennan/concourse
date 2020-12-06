This folder contains examples exploring using [Hasura Cloud](https://hasura.io/cloud/) with a [PostgreSQL database](https://www.heroku.com/postgres) hosted on [Heroku](https://www.heroku.com/postgres).

# Local development

To develop this application on your machine, you will need to have Docker and `docker-compose` installed.

If you are unfamiliar with Docker, don't panic. You can download and install [Docker Desktop](https://www.docker.com/products/docker-desktop) - available for macOS and Windows.

## Initial setup and configuration

If you would like to work with this example in its entirety, you will need to configure [Hasura Cloud](https://hasura.io/cloud/) - perhaps by creating a new project and using a free [PostgreSQL database](https://www.heroku.com/postgres) on [Heroku](https://www.heroku.com/postgres) - as well as configure [Auth0](https://auth0.com) in order for this example to work.

First, we can configure Auth0.

Please follow the instructions in `# Auth0 Setup` as outlined in the guide at [./HASURA-NEXTJS-APOLLO-AUTH0-TUTORIAL.md](./HASURA-NEXTJS-APOLLO-AUTH0-TUTORIAL.md) for details to create:

- An Auth0 tenant
- An Auth0 application
- An Auth0 API
- Custom claims in Auth0 rules

Then, we need to:

- Update our Hasura configuration file - `__reference__/hasura-cloud-spike/config.yaml` to refer to our new Hasura Cloud application:

  ```yml
  endpoint: https://hasura-cloud-spike.hasura.app
  ```

- Define our environment variables - See `## Environment variables` below
- Start our application - See `## Start the application` below

  - In another terminal window, you will need to run the database migration script - either `npm run hasura:db:migrate` from the top level, or `npm run db:migrate` from this folder - to create your database.

Once you complete the `## Environment variables` and `## Start the application`, please return to the guide to see how to:

- Connect an external Hasura API with Auth0
- Sync Users with Rules

## Environment variables

Please copy `./app/.env.example` to `./app/.env` before you define the appropriate environment variables.

As of this writing, current environment variables that need to be defined for the Next.js example app include:

```sh
DOMAIN=http://localhost:3000

# These GraphQL endpoints must be externally accessible
GRAPHQL_WEB_ENDPOINT=https://hasura-cloud-spike.hasura.app/v1/graphql
GRAPHQL_WEBSOCKET_ENDPOINT=wss://hasura-cloud-spike.hasura.app/v1/graphql

# Auth0 API
AUTH0_AUDIENCE=https://hasura.io/learn

# Auth0 Application
AUTH0_DOMAIN=my-tenant.us.auth0.com
AUTH0_CLIENT_ID=<YOUR_AUTH0_CLIENT_ID>
AUTH0_CLIENT_SECRET=<YOUR_AUTH0_CLIENT_SECRET>
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

Please login to your dashboard on [Hasura Cloud](https://hasura.io/cloud/) to view the Hasura console.

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

# Resources

## Documentation

[Hasura Cloud Documentation](https://hasura.io/docs/1.0/graphql/cloud/index.html)

## Tutorials

[Introduction to setting up a GraphQL back-end with Hasura](https://hasura.io/learn/graphql/hasura/introduction/)

[Introduction to using Next.js with Hasura and Apollo](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/introduction/)

[Learn Hasura and GraphQL](https://hasura.io/learn/)

- Frontend GraphQL Tutorials using a variety of supported frameworks (React, Vue, Next.js, TypeScript, Angular, iOS, and many more)
- Hasura back-end tutorials
- Introduction to GraphQL
