
DELIMITER //

DROP PROCEDURE IF EXISTS PlacePreorder //

CREATE PROCEDURE PlacePreorder(
    IN p_OrderNumber VARCHAR(20),
    IN p_CustomerID VARCHAR(20),
    IN p_VendorID VARCHAR(20),
    IN p_MarketID VARCHAR(20),
    IN p_ProductID VARCHAR(20),
    IN p_Quantity INT
)
BEGIN
    DECLARE inventory_updated INT DEFAULT 0;


    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;
IF p_Quantity IS NULL OR p_Quantity < 1 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Invalid quantity';
END IF;

    START TRANSACTION;

    UPDATE Vendor_Products
    SET Quantity = Quantity - p_Quantity
    WHERE VendorID = p_VendorID
      AND ProductID = p_ProductID
      AND Quantity >= p_Quantity;

    SET inventory_updated = ROW_COUNT();

    IF inventory_updated = 1 THEN
        INSERT INTO Preorder
        (OrderNumber, CustomerID, VendorID, MarketID, ProductID, Quantity)
        VALUES
        (p_OrderNumber, p_CustomerID, p_VendorID, p_MarketID, p_ProductID, p_Quantity);

        COMMIT;
        SELECT 'Preorder Successful' AS Result;
    ELSE
        ROLLBACK;
        SELECT 'Preorder Unsuccessful' AS Result;
    END IF;

END //

DELIMITER ;
