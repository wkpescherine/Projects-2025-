from flask import Flask, render_template, request, jsonify
import os, re, datetime
import db

app = Flask(__name__)

# create the database and table. Insert 10 test books into db
# Do this only once to avoid inserting the test books into 
# the db multiple times
if not os.path.isfile('users.db'):
    db.connect()

#@app.route('/')
#def hello_world():
#    return 'Hello World!'

#@app.route("/")
#def index():
#    return render_template("index.html")

#def isValid(email):
#    regex = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')
#    if re.fullmatch(regex, email):
#      return True
#    else:
#      return False

if __name__ == '__main__':
    app.run()