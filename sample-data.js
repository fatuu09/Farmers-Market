// Sample information copied from the SQL files in this repository.
// These arrays do NOT connect to the database.

var markets = [
  {
    "id": "M001",
    "name": "Minneapolis Farmers Market",
    "location": "312 East Lyndale Ave N, Minneapolis, MN 55405"
  },
  {
    "id": "M002",
    "name": "Saint Paul Farmers Market",
    "location": "290 5th St E, St Paul, MN 55101"
  },
  {
    "id": "M003",
    "name": "Maplewood Farmers Market",
    "location": "1850 White Bear Ave, Maplewood, MN 55109"
  },
  {
    "id": "M004",
    "name": "Woodbury Farmers Market",
    "location": "3311 Commonwealth Ave, Woodbury, MN 55125"
  },
  {
    "id": "M005",
    "name": "Burnsville Farmers Market",
    "location": "3333 Cliff Rd E, Burnsville, MN 55337"
  },
  {
    "id": "M006",
    "name": "Richfield Farmers Market",
    "location": "6335 Portland Ave, Richfield, MN 55423"
  },
  {
    "id": "M007",
    "name": "Bloomington Farmers Market",
    "location": "1800 W Old Shakopee Rd, Bloomington, MN 55431"
  },
  {
    "id": "M008",
    "name": "Inver Grove Heights Farmers Market",
    "location": "8055 Barbara Ave E, Inver Grove Heights, MN 55077"
  },
  {
    "id": "M009",
    "name": "Roseville Farmers Market",
    "location": "2131 Fairview Ave N, Roseville, MN 55113"
  },
  {
    "id": "M010",
    "name": "Apple Valley Farmers Market",
    "location": "7100 147th St W, Apple Valley, MN 55124"
  }
];

var products = [
  {
    "name": "Apples",
    "vendor": "Fabulous Fresh Farm",
    "market": "M001",
    "price": 2.99,
    "stock": 100
  },
  {
    "name": "Bananas",
    "vendor": "Fabulous Fresh Farm",
    "market": "M001",
    "price": 3.5,
    "stock": 75
  },
  {
    "name": "Tomatoes",
    "vendor": "Green Oasis Produce",
    "market": "M001",
    "price": 4.0,
    "stock": 50
  },
  {
    "name": "Onions",
    "vendor": "Green Oasis Produce",
    "market": "M001",
    "price": 1.99,
    "stock": 120
  },
  {
    "name": "Celery",
    "vendor": "Fatuma's Garden",
    "market": "M002",
    "price": 5.25,
    "stock": 60
  },
  {
    "name": "Garlic",
    "vendor": "Fatuma's Garden",
    "market": "M002",
    "price": 3.0,
    "stock": 90
  },
  {
    "name": "Corn",
    "vendor": "North Star Harvest",
    "market": "M002",
    "price": 2.5,
    "stock": 110
  },
  {
    "name": "Potatoes",
    "vendor": "North Star Harvest",
    "market": "M002",
    "price": 1.75,
    "stock": 200
  },
  {
    "name": "Carrots",
    "vendor": "Sweet Savannah Produce",
    "market": "M003",
    "price": 3.25,
    "stock": 80
  },
  {
    "name": "Strawberry",
    "vendor": "Sweet Savannah Produce",
    "market": "M003",
    "price": 4.5,
    "stock": 40
  },
  {
    "name": "Blueberries",
    "vendor": "Emerald Roots Organics",
    "market": "M003",
    "price": 3.99,
    "stock": 65
  },
  {
    "name": "Raspberries",
    "vendor": "Emerald Roots Organics",
    "market": "M003",
    "price": 4.25,
    "stock": 55
  },
  {
    "name": "Blackberries",
    "vendor": "Jubba Produce",
    "market": "M004",
    "price": 5.0,
    "stock": 45
  },
  {
    "name": "Grapes",
    "vendor": "Jubba Produce",
    "market": "M004",
    "price": 2.25,
    "stock": 130
  },
  {
    "name": "Watermelon",
    "vendor": "Sunny Side Farm",
    "market": "M004",
    "price": 6.5,
    "stock": 30
  },
  {
    "name": "Cantaloupe",
    "vendor": "Sunny Side Farm",
    "market": "M004",
    "price": 3.75,
    "stock": 70
  },
  {
    "name": "Peaches",
    "vendor": "Family Farm",
    "market": "M005",
    "price": 2.8,
    "stock": 95
  },
  {
    "name": "Pears",
    "vendor": "Family Farm",
    "market": "M005",
    "price": 3.1,
    "stock": 85
  },
  {
    "name": "Plums",
    "vendor": "Green Acres Produce",
    "market": "M005",
    "price": 4.1,
    "stock": 60
  },
  {
    "name": "Cherries",
    "vendor": "Green Acres Produce",
    "market": "M005",
    "price": 5.5,
    "stock": 50
  },
  {
    "name": "Lettuce",
    "vendor": "Barwaaqo Fresh Farm",
    "market": "M006",
    "price": 1.5,
    "stock": 150
  },
  {
    "name": "Limes",
    "vendor": "Barwaaqo Fresh Farm",
    "market": "M006",
    "price": 0.75,
    "stock": 250
  },
  {
    "name": "Pineapple",
    "vendor": "Cedar Organics",
    "market": "M006",
    "price": 3.99,
    "stock": 40
  },
  {
    "name": "Lemons",
    "vendor": "Cedar Organics",
    "market": "M006",
    "price": 0.99,
    "stock": 180
  },
  {
    "name": "Butter",
    "vendor": "Happy Harvest Farm",
    "market": "M007",
    "price": 4.5,
    "stock": 35
  },
  {
    "name": "Oranges",
    "vendor": "Happy Harvest Farm",
    "market": "M007",
    "price": 1.25,
    "stock": 160
  },
  {
    "name": "Eggs",
    "vendor": "River Side Farm",
    "market": "M007",
    "price": 3.25,
    "stock": 90
  },
  {
    "name": "Bell Peppers",
    "vendor": "River Side Farm",
    "market": "M007",
    "price": 2.1,
    "stock": 110
  },
  {
    "name": "Spinach",
    "vendor": "Fresh Pick Farm",
    "market": "M008",
    "price": 2.4,
    "stock": 100
  },
  {
    "name": "Pumpkins",
    "vendor": "Fresh Pick Farm",
    "market": "M008",
    "price": 7.0,
    "stock": 25
  },
  {
    "name": "Jalapenos",
    "vendor": "Apple Tree Farm",
    "market": "M008",
    "price": 1.8,
    "stock": 140
  },
  {
    "name": "Cabbage",
    "vendor": "Apple Tree Farm",
    "market": "M008",
    "price": 2.0,
    "stock": 120
  },
  {
    "name": "Black Beans",
    "vendor": "Sweet Berry Farm",
    "market": "M009",
    "price": 1.9,
    "stock": 130
  },
  {
    "name": "Brown Beans",
    "vendor": "Sweet Berry Farm",
    "market": "M009",
    "price": 1.95,
    "stock": 125
  },
  {
    "name": "Cheese",
    "vendor": "Spring  Valley Farm",
    "market": "M009",
    "price": 5.75,
    "stock": 45
  },
  {
    "name": "Radishes",
    "vendor": "Spring  Valley Farm",
    "market": "M009",
    "price": 1.6,
    "stock": 150
  },
  {
    "name": "Cucumbers",
    "vendor": "Sunset Farm",
    "market": "M010",
    "price": 1.4,
    "stock": 170
  },
  {
    "name": "Sweet Potatoes",
    "vendor": "Sunset Farm",
    "market": "M010",
    "price": 3.5,
    "stock": 70
  },
  {
    "name": "Honeydew Melon",
    "vendor": "Habibo Harvest Farm",
    "market": "M010",
    "price": 4.75,
    "stock": 50
  },
  {
    "name": "Oats",
    "vendor": "Habibo Harvest Farm",
    "market": "M010",
    "price": 2.2,
    "stock": 110
  },
  {
    "name": "Peas",
    "vendor": "Fabulous Fresh Farm",
    "market": "M001",
    "price": 2.1,
    "stock": 115
  },
  {
    "name": "Honey",
    "vendor": "Green Oasis Produce",
    "market": "M001",
    "price": 8.5,
    "stock": 30
  },
  {
    "name": "Maple Syrup",
    "vendor": "Fatuma's Garden",
    "market": "M002",
    "price": 9.0,
    "stock": 25
  },
  {
    "name": "Milk",
    "vendor": "North Star Harvest",
    "market": "M002",
    "price": 3.25,
    "stock": 85
  },
  {
    "name": "Rice",
    "vendor": "Sweet Savannah Produce",
    "market": "M003",
    "price": 2.5,
    "stock": 100
  },
  {
    "name": "Cashews",
    "vendor": "Emerald Roots Organics",
    "market": "M003",
    "price": 6.0,
    "stock": 40
  },
  {
    "name": "Peanuts",
    "vendor": "Jubba Produce",
    "market": "M004",
    "price": 5.5,
    "stock": 45
  },
  {
    "name": "Granola",
    "vendor": "Sunny Side Farm",
    "market": "M004",
    "price": 4.25,
    "stock": 60
  },
  {
    "name": "Cranberries",
    "vendor": "Family Farm",
    "market": "M005",
    "price": 3.8,
    "stock": 75
  },
  {
    "name": "Broccoli",
    "vendor": "Green Acres Produce",
    "market": "M005",
    "price": 2.75,
    "stock": 95
  }
];

var customers = [
  {
    "id": "C001",
    "name": "Zahara Sah"
  },
  {
    "id": "C002",
    "name": "Stephanie Y"
  },
  {
    "id": "C003",
    "name": "Emily W"
  },
  {
    "id": "C004",
    "name": "John K"
  },
  {
    "id": "C005",
    "name": "David L"
  }
];

var existingOrders = [
  {
    "customer": "Zahara Sah",
    "product": "Apples",
    "market": "Minneapolis Farmers Market",
    "vendor": "Fabulous Fresh Farm"
  },
  {
    "customer": "Stephanie Y",
    "product": "Celery",
    "market": "Saint Paul Farmers Market",
    "vendor": "Fatuma's Garden"
  },
  {
    "customer": "Emily W",
    "product": "Carrots",
    "market": "Maplewood Farmers Market",
    "vendor": "Sweet Savannah Produce"
  },
  {
    "customer": "John K",
    "product": "Blackberries",
    "market": "Woodbury Farmers Market",
    "vendor": "Jubba Produce"
  },
  {
    "customer": "David L",
    "product": "Peaches",
    "market": "Burnsville Farmers Market",
    "vendor": "Family Farm"
  }
];

