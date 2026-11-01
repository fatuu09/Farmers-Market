-- Lists markets
SELECT * FROM Market;

-- Lists vendor/farmers
SELECT * FROM Vendor; 

-- Finds product by name
-- I used Strawberry as an example
SELECT * FROM Product WHERE Name LIKE '%Strawberry%';

-- Will show product, price, and vendor/farmer
SELECT v.Name AS Farmer, p.Name AS Product, vp.Price, vp.Quantity
FROM Vendor_Products vp
JOIN Vendor v ON vp.VendorID = v.VendorID
JOIN Product p ON vp.ProductID = p.ProductID;

-- Will show vendor/farmer at each market
SELECT m.Name AS Market, v.Name AS Farmer
FROM Market_Vendor mv
JOIN Market m ON mv.MarketID = m.MarketID
JOIN Vendor v ON mv.VendorID = v.VendorID;

-- Will show customer preorders
SELECT c.Name AS Customer, p.Name AS Product, m.Name AS Market
FROM Preorder o
JOIN Customer c ON o.CustomerID = c.CustomerID
JOIN Product p ON o.ProductID = p.ProductID
JOIN Market m ON o.MarketID = m.MarketID;
