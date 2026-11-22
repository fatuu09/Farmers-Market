import os
import mysql.connector

def get_connection():
    return mysql.connector.connect(
        host="localhost",
        user= "root",
        password=os.environ["DB_PASSWORD"],
        database = "new_schema"
    )

