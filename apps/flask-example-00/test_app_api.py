import app
import json
import logging
import unittest

BASE_URL = 'http://localhost:5000/api'
API_URL_HELLO_WORLD = BASE_URL + '/hello-world'
TARGET_FILE = 'test_app_api.py'


class TestFlaskApi(unittest.TestCase):
    logger = logging.getLogger(__name__)
    logging.basicConfig(format='%(asctime)s %(module)s %(levelname)s: %(message)s',
                        datefmt='%m/%d/%Y %I:%M:%S %p', level=logging.INFO)

    def setUp(self):
        self.logger.info(TARGET_FILE + ' setUp')
        # If you are using an object like app.myArray, be sure to create a deep copy so references aren't dangling
        # self.myArray = deepcopy(app.myArray)  # no references!
        self.app = app.app.test_client()
        self.app.testing = True

    def test_logger(self):
        self.logger.info(TARGET_FILE + ' test_logger')
        pass

    def test_api_get_hello_world(self):
        self.logger.info(TARGET_FILE + ' test_api_get_hello_world')
        response = self.app.get(API_URL_HELLO_WORLD)
        data = json.loads(response.get_data())
        expectedSubstring = "Hello, world!"

        # Verify we have an HTTP 200 status code
        self.assertEqual(response.status_code, 200)

        # Verify we have an expected substring in the message property of our JSON data
        self.assertTrue(expectedSubstring in data['message'])

    def tearDown(self):
        self.logger.info(TARGET_FILE + ' tearDown')
        # If you are using an object like app.myArray, reset app.myArray to the initial data we saved in our setUp method
        # app.myArray = self.myArray


if __name__ == "__main__":
    unittest.main()
