import mysql.connector

def get_connection():
    return mysql.connector.connect(
        host="localhost",
        user= "root",
        password="Your_MySQL_Password",
        database = "new_schema"
    )