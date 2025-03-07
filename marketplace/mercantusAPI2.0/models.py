from flask_sqlalchemy  import SQLAlchemy

db = SQLAlchemy

class Users(db.Model):
    __tablename__="table"

    id=db.Column(db.Integer, primary_key=True)

    user_id=db.Column(db.Integer(), unique=True)