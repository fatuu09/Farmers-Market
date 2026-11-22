from flask import Flask, jsonify, send_from_directory, request
from database import get_connection
import uuid
import mysql.connector

app = Flask(__name__)

@app.route("/")
def home():
    return send_from_directory(".","index.html")

@app.route("/<path:filename>")
def serve_frontend(filename):
    return send_from_directory(".", filename)

@app.route("/markets")
def get_markets():
    connection = get_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM Market")
    markets = cursor.fetchall()
    cursor.close()
    connection.close()
    return jsonify(markets)
    
@app.route("/vendors")
def get_vendors():
    connection = get_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM Vendor")
    vendors = cursor.fetchall()
    cursor.close()
    connection.close()
    return jsonify(vendors)
    
@app.route("/products")
def get_products():
    connection = get_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM Product")
    products = cursor.fetchall()
    cursor.close()
    connection.close()
    return jsonify(products)
    
@app.route("/customers")
def get_customers():
    connection = get_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM Customer")
    customers = cursor.fetchall()
    cursor.close()
    connection.close()
    return jsonify(customers)
    
@app.route("/vendor-products")
def get_vendor_products():
    connection = get_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM Vendor_Products")
    records = cursor.fetchall()
    cursor.close()
    connection.close()
    return jsonify(records)
    
@app.route("/market-vendors")
def get_market_vendors():
    connection = get_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM Market_Vendor")
    records = cursor.fetchall()
    cursor.close()
    connection.close()
    return jsonify(records)
    
@app.route("/preorders")
def get_preorders():
    connection = get_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM Preorder")
    preorders = cursor.fetchall()
    cursor.close()
    connection.close()
    return jsonify(preorders)

@app.route("/preorders", methods=["POST"])
def add_preorder():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify({"error": "Invalid preorder data"}), 400

    customer_id = data.get("CustomerID")
    vendor_id = data.get("VendorID")
    market_id = data.get("MarketID")
    product_id = data.get("ProductID")

    if not all([customer_id, vendor_id, market_id, product_id]):
        return jsonify({"error": "Missing preorder information"}), 400

    order_number = uuid.uuid4().hex[:20]
    connection = None

    try:
        connection = get_connection()
        cursor = connection.cursor()

        try:
            cursor.callproc("PlacePreorder",(
            order_number,
            customer_id,
            vendor_id,
            market_id,
            product_id
            ))

            result_message = None

            for result in cursor.stored_results():
                rows = result.fetchall()
                if rows:
                    result_message = rows[0][0]

            if result_message == "Preorder Successful":
                return jsonify({"message": "Preorder Successful", "OrderNumber": order_number}), 201

            return jsonify({"error": "Preorder Unsuccessful"}), 400

        finally:
            cursor.close()
    except mysql.connector.Error:
        if connection:
            connection.rollback()

        app.logger.exception("Error placing preorder")

        return jsonify({"error": "Database error"}), 500

    finally:
        if connection:
            connection.close()

if __name__ == "__main__":
    app.run(debug=True)
