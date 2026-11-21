DELIMITER //

CREATE PROCEDURE PlacePreorder()
BEGIN
 DECLARE inventory_updated INT DEFAULT 0;
 DECLARE order_inserted INT DEFAULT 0;

 DECLARE EXIT HANDLER FOR SQLEXCEPTION
 BEGIN
   ROLLBACK;
   RESIGNAL;
END;

START TRANSACTION;

UPDATE Vendor_Products
SET Quantity = Quantity - 1
WHERE VendorID = 'V001'
 AND ProductID = 'P001'
 AND Quantity >= 1;

SET inventory_updated = ROW_COUNT();

IF inventory_updated = 1 THEN
INSERT INTO Preorder
(OrderNumber, CustomerID, VendorID, MarketID, ProductID)

VALUES ('0007', 'C001', 'V001', 'M001', 'P001');
SET order_inserted = ROW_COUNT();
END IF;
 
IF inventory_updated = 1 AND order_inserted = 1 THEN
 COMMIT;

SELECT 'Preorder Successful' AS Result;
ELSE
 ROLLBACK;
 SELECT 'Preorder Unsuccessful' AS Result;
END IF;

END //
DELIMITER;
