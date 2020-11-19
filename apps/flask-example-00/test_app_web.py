import app
import json
import logging
import unittest

BASE_URL = 'http://localhost:5000/'
TARGET_FILE = 'test_app_web.py'


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

    def test_web_get_default_page(self):
        self.logger.info(TARGET_FILE + ' test_web_get_default_page')
        response = self.app.get(BASE_URL)

        # Verify we have an HTTP 200 status code
        self.assertEqual(response.status_code, 200)

        # Verify we have a response
        self.logger.info(response)
        # self.assertTrue(expectedSubstring in data['message'])

    def tearDown(self):
        self.logger.info(TARGET_FILE + ' tearDown')
        # If you are using an object like app.myArray, reset app.myArray to the initial data we saved in our setUp method
        # app.myArray = self.myArray


if __name__ == "__main__":
    unittest.main()
