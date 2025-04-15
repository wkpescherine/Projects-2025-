import sqlite3, random, datetime
from models import User


def getNewId():
    return random.getrandbits(28)

def connect():
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()
    cur.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT, timestamp TEXT)")
    conn.commit()
    conn.close()
    for i in users:
        us = User(getNewId(), i['username'], i['password'], i['timestamp'])
        insert(us)

def insert(user):
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()
    cur.execute("INSERT INTO users VALUES (?,?,?,?)", (
        user.id,
        user.username,
        user.password,
        user.timestamp
    ))
    conn.commit()
    conn.close()

def view():
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()
    cur.execute("SELECT * FROM books")
    rows = cur.fetchall()
    users = []
    for i in rows:
        user = User(i[0], True if i[1] == 1 else False, i[2], i[3])
        users.append(user)
    conn.close()
    return users

def update(user):
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()
    cur.execute("UPDATE users SET username=?, password=? WHERE id=?", (user.username, user.password, user.id))
    conn.commit()
    conn.close()

def delete(theId):
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()
    cur.execute("DELETE FROM users WHERE id=?", (theId,))
    conn.commit()
    conn.close()

def deleteAll():
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()
    cur.execute("DELETE FROM users")
    conn.commit()
    conn.close()