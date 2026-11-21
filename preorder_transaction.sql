START TRANSACTION;

UPDATE Vendor_Products
SET Quantity = Quantity - 1
WHERE VendorID = 'V001'
 AND ProductID = 'P001'
 AND Quantity >= 1;

SET @inventory_updated = ROW_COUNT();

INSERT INTO Preorder
(OrderNumber, CustomerID, VendorID, MarketID, ProductID)

SELECT '0007', 'C001', 'V001', 'M001', 'P001'
WHERE @inventory_updated = 1;

SET @order_inserted = ROW_COUNT();

SELECT @inventory_updated AS InventoryUpdated, @order_inserted AS OrderInserted;
