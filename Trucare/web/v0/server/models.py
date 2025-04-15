class User:
  def __init__(self, id, username, password, timestamp):
    self.id = id
    self.username = username
    self.password = password
    self.timestamp = timestamp

  def __repr__(self):
    return '<id {}>'.format(self.id)

  def serialize(self):
    return {
      'id': self.id,
      'username': self.username,
      'password': self.password,
      'timestamp':self.timestamp
    }