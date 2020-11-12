# Official Python Docker images available at https://hub.docker.com/_/python
#   DEPRECATION: Python 2.7 reached the end of its life on January 1st, 2020.
FROM python:3

ADD . ./code
WORKDIR /code

# Install our Python packages
RUN pip install -r requirements.txt

# Run our Python application
CMD python app.py