## Normalization (3NF)
Our database is organized into separate tables to reduce duplicate information and keep the data consistent.
We use primary keys, foreign keys, and composite primary keys to connect related tables.

## Product Table
The product table stores ProductID and Name.ProductID is the primary key that identifies each product. 
The product name depends on productID, so product information can be stored once instead of being repeated
for every vendor that sells it.

## Customer Table 
The customer table stores CustomerID, Name, and Email. CustomerID uniquely identifies each customer, and
the customer's name and email depend on that key. Keeping customer information in its own table prevents us
from having to repeat it for every preorder.

## Vendor Table 
The vendor table stores VendorID and Name. VendorID identifies each vendor, and the vendor's name
depends on that key.This makes vendor information easier to manage and update.

## Market Table
The market table stores  MarketID, Name, and Location. MarketID identifies each market, and the market's
name and location depend on that key. Storing these details in one table avoids repeating market
information in other tables.

## Vendor_Products Table
The vendor_Products table uses VendorID and ProductID together as a composite primary key.
Price and Quantity depend on the combination of these two key because each vendor can offer
a product at a different price and with a different inventory quantity.The foreign keys connect
each record to an existing vendor and product.

## Market_Vendor Table 
The market_Vendor table uses marketID and VendorID as a composite primary key.
This table connects vendors with the markets they operate in. The composite key prevents the same
vendor-market combination from being recorded more than once.

## Preorder Table 
The preorder table uses OrderNumber as its primary key. CustomerID, VendorID, and MarketID connect each preorder
 to the customer, vendor and market .The combination of VendorID and ProductID references Vendor_Products
 ensuring that the selected products Is offered by that vendor. The combination of MarketID and VendorID references
 Market_Vendor, ensuring that the vendor is associated with the selected market.
