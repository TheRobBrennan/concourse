FROM cypress/base:10
WORKDIR /app

# Install bc for arithmetic calculations in shell scripts
RUN apt-get update
RUN apt-get install bc

# dependencies will be installed only if the package files change
COPY package.json .
COPY package-lock.json .

# Copy our scripts folder
COPY ./scripts /app/scripts
RUN /bin/sh -c 'chmod +x /app/scripts/test-for-flaps.sh'
RUN /bin/sh -c 'chmod +x /app/scripts/test-for-flaps-chrome.sh'

# by setting CI environment variable we switch the Cypress install messages
# to small "started / finished" and avoid 1000s of lines of progress messages
# https://github.com/cypress-io/cypress/issues/1243
ENV CI=1
RUN npm ci
# verify that Cypress has been installed correctly.
# running this command separately from "cypress run" will also cache its result
# to avoid verifying again when running the tests
RUN npx cypress verify