from flask_restful import Resource

class User(Resource):
    def get(self):
        return [{'id': 15, 'name': 'James'}, {'id': 20, 'name': 'Peter'}]