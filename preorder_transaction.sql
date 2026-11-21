
DELIMITER //

DROP PROCEDURE IF EXISTS PlacePreorder //

CREATE PROCEDURE PlacePreorder(
    IN p_OrderNumber VARCHAR(20),
    IN p_CustomerID VARCHAR(20),
    IN p_VendorID VARCHAR(20),
    IN p_MarketID VARCHAR(20),
    IN p_ProductID VARCHAR(20)
)
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
    WHERE VendorID = p_VendorID
      AND ProductID = p_ProductID
      AND Quantity >= 1;

    SET inventory_updated = ROW_COUNT();

    IF inventory_updated = 1 THEN
        INSERT INTO Preorder
        (OrderNumber, CustomerID, VendorID, MarketID, ProductID)
        VALUES
        (p_OrderNumber, p_CustomerID, p_VendorID, p_MarketID, p_ProductID);

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

DELIMITER ;
