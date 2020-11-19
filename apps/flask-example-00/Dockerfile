# Official Python Docker images available at https://hub.docker.com/_/python
#   DEPRECATION: Python 2.7 reached the end of its life on January 1st, 2020.
FROM python:3

# Create our application directory
RUN mkdir -p /code
WORKDIR /code

# Install our Python linter
RUN pip install autopep8

# Install our Python packages
ADD ./requirements.txt /code
RUN pip install -r requirements.txt

# Add our application code
ADD . ./code

# Run our Python application
CMD python app.py