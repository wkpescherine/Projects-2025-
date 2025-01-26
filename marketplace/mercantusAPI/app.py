from flask import Flask, request, jsonify
import os,re,datetime
import db
from models import Book

app = Flask(__name__)

# creates the database if non exists
if not os.path.isfile('user.db'):
    db.connect()

def isValid(email):
    regex = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z09]+@[A-Zaz0-9-]+(\.[A-Z|a-z{2,}])+')
    if re.fullmatch(regex,email):
        return True
    else:
        return False
    
@app.route("/request", methods =['POST'])
def postRequest():
    req_data = request.get_json()
    email = req_data['email']
    if not isValid(email):
        return jsonify({
            'status':'422',
            'res':'failure',
            'error': "Invalid email please enter a valid one"
        })
    username = req_data['username']
    usrs = [u.serialize() for u in db.view()]
    for u in usrs:
        if u['username'] == username:
            return jsonify({
                'res': f'Error no username',
                'status':'404'
            })

if __name__ == '__main__':
    app.run()