CREATE TABLE Product (
  ProductID VARCHAR(20) PRIMARY KEY,
  Name VARCHAR(100) NOT NULL
);

CREATE TABLE Customer (
  CustomerID VARCHAR(20) PRIMARY KEY,
  Name VARCHAR(100) NOT NULL,
  Email VARCHAR(100)
);

CREATE TABLE Vendor (
  VendorID VARCHAR(20) PRIMARY KEY,
  Name VARCHAR(100) NOT NULL
);

CREATE TABLE Market (
  MarketID VARCHAR(20) PRIMARY KEY,
  Name VARCHAR(100) NOT NULL,
  Location VARCHAR(150)
);

CREATE TABLE Vendor_Products (
    VendorID VARCHAR(20), 
    ProductID VARCHAR(20),
    Price DECIMAL(10, 2) NOT NULL,
    Quantity INT NOT NULL,
    PRIMARY KEY (VendorID, ProductID),
    FOREIGN KEY (VendorID) REFERENCES Vendor(VendorID),
    FOREIGN KEY (ProductID) REFERENCES Product(ProductID)
);

CREATE TABLE Market_Vendor (
    MarketID VARCHAR(20),
    VendorID VARCHAR(20),
    PRIMARY KEY (MarketID, VendorID),
    FOREIGN KEY (MarketID) REFERENCES Market(MarketID),
    FOREIGN KEY (VendorID) REFERENCES Vendor(VendorID)
);

CREATE TABLE Preorder (
    OrderNumber VARCHAR(20) PRIMARY KEY,
    CustomerID VARCHAR(20) NOT NULL,
    VendorID VARCHAR(20) NOT NULL,
    MarketID VARCHAR(20) NOT NULL,
    ProductID VARCHAR(20) NOT NULL,
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
    FOREIGN KEY (VendorID, ProductID)
        REFERENCES Vendor_Products(VendorID, ProductID),
    FOREIGN KEY (MarketID, VendorID)
        REFERENCES Market_Vendor(MarketID, VendorID)
);

