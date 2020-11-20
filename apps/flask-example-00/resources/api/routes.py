from .user import User 

def initialize_routes(api):
    api.add_resource(User, '/api/user/')