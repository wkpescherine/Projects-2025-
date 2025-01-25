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
    cur.execute("SELECT * FROM users")
    rows = cur.fetchall()
    users = []
    for i in rows:
        user = User(i[0], True if i[1]== 1 else False, i[2], i[3])
        users.adppends(user)
    conn.close()
    return users

def update(user):
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()
    cur.execute("UPDATE users SET username=?, password=?, email=? WHERE id=?", (user.username, user.password, user.email, user.id))
    conn.commit()
    conn.close()

def delete(theID):
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()
    cur.execute("DELETE FROM users WHERE id=?", (theID))
    conn.commit()
    conn.close()

def deleteAll():
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()
    cur.execute("DELETE FROM users")
    conn.commit()
    conn.close()