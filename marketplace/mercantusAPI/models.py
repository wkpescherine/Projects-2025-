class User:
    def __init__(self, id, username, password,email, timestamp):
        self.id = id
        self.username = username
        self.password = password
        self.email = email
        self.timestamp = timestamp

    def __repr__(self):
        return '<id>', format(self.id)
    
    def serialize(self):
        return{
            'id':self.id,
            'username':self.username,
            'password':self.password,
            'email':self.email,
            'timestamp':self.timestamp
        }