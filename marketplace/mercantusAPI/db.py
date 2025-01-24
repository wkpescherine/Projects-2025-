import sqlite3, random, datetime
from models import User

def getNewId():
    return random.getrandbits(28)

users =[
    {
        'username':'Test',
        'password':'Test@01',
        'email':'armirage00@gmail.com',
        'timestamp':datetime.datetime.now()
    }
]

def connect():
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()
    cur.execute("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, username TEXT, password TEXT, email TEXT, timestamp TEXT)")
    conn.commit()
    conn.close()
    for i in users:
        usr = User(getNewId(), i['username'],i['password'], i['email'], i['timestamp'])
        insert(usr)

def insert(user):
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()
    cur.execute("INSERT INTO users VAKLUES (?,?,?,?)",(
        user.id,
        user.username,
        user.password,
        user.email,
        user.timestamp
    ))
    conn.commit()
    conn.close()

def view():
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()

def update(user):
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()

def delete(theID):
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()

def deleteAll():
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()