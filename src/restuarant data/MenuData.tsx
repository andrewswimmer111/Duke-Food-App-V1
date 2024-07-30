type MenuItem = {
  item: string;
  price: number;
};

type Category = {
  [subcategory: string]: MenuItem[];
};

type MenuData = {
  [category: string]: Category;
};

const MenuData: MenuData = {
  "Il Forno": {
    "Pizza": [
      { item: "Vegan", price: 9.99 },
      { item: "Margherita", price: 9.99 },
      { item: "Four Cheese", price: 11.49 },
      { item: "Southwest Chicken", price: 11.49 },
      { item: "Buffalo Chicken", price: 11.49 },
      { item: "Harvest", price: 11.49 },
      { item: "Kyle's BBQ", price: 11.49 },
      { item: "Pjs New Yorker", price: 11.49 },
      { item: "Rustic", price: 11.49 },
    ],
    "Pasta": [
      { item: "Pasta + Sauce only", price: 6.99 },
      { item: "Veggie", price: 9.89 },
      { item: "Custom", price: 11.89 },
      { item: "Chicken Alfredo", price: 11.89 },
      { item: "Garden Pesto", price: 11.89 },
      { item: "Pasta Romano", price: 11.89 },
      { item: "Meatballs & Spaghetti", price: 11.89 },
      { item: "Chicken Basil Pesto", price: 11.89 },
      { item: "Parma Rosa", price: 11.89 },
      { item: "Spicy Il Forno", price: 11.89 }
    ],
    "Wings": [
      { item: "4 Boneless", price: 6.25 },
      { item: "5 Bone In", price: 6.25 },
      { item: "8 Boneless", price: 11.99 },
      { item: "10 Bone In", price: 11.99 },
    ],
    "Dessert": [
      { item: "Brownie", price: 2.89 },
      { item: "Cookie", price: 2.89 },
      { item: "Beignet Bites", price: 3.75 }
    ],
    "Drinks": [
      { item: "Topo Chico", price: 1.39 },
      { item: "AHA", price: 1.39 },
      { item: "Smart Water", price: 1.89 },
      { item: "San Pelligrino Sparkling Water", price: 1.99 },
      { item: "Other Pelligrino", price: 2.39 }
    ]
  },

  "GSoy": {
    "Plates": [
      { item: "California (Tofu)", price: 10.89 },
      { item: "Shanghai (Ginger Chicken)", price: 11.29 },
      { item: "Tokyo (Teryaki Chicken)", price: 11.39 },
      { item: "Hong Kong (Pork)", price: 11.39 },
      { item: "Thai Curry", price: 11.89 },
      { item: "Pad Thai", price: 11.89 },
      { item: "Seoul (Beef)", price: 11.99 },
      { item: "Build Your Own Bowl", price: 11.99 },
    ],
    "Poke": [
      { item: "Spicy Tuna", price: 13.59 },
      { item: "Salmon", price: 13.59 },
      { item: "Tuna", price: 13.59 }
    ],
    "Ramen": [
      { item: "Spicy Miso", price: 11.99 },
      { item: "Tonkotsu", price: 11.99 }
    ],
    "Small Dishes": [
      { item: "Spring Rolls", price: 2.49 },
      { item: "Veg Dumplings", price: 5.79 },
      { item: "Chicken Dumplings", price: 5.79 },
      { item: "Beef Dumplings", price: 5.79 }
    ],
    "Drinks": [
      { item: "San Pelligrino Sparkling Water", price: 2.19 },
      { item: "Izze", price: 2.19 },
      { item: "Aqua Panna Water", price: 2.59 },
      { item: "Ito En Tea", price: 3.49 }
    ]
  },

  "JB's": {
    "Food": [
      { item: "Menu unavailable", price: 1.00 }
    ]
  },

  "Farmstead & Sprout": {
    "Farmstead Sandwiches": [
      { item: "Chicken shawarma", price: 9.99 },
      { item: "Salmon burger", price: 9.99 },
      { item: "Lamb gyro", price: 9.99 },
      { item: "Turkey Swiss avocado", price: 9.99 },
      { item: "Chicken Caesar wrap", price: 9.99 },
      { item: "Two sliders", price: 11.49 }
    ],    
    "Farmstead Entrees": [
      { item: "Spanakopita", price: 11.89 },
      { item: "Honey garlic chicken", price: 11.89 },
      { item: "Bourbon garlic chicken", price: 11.89 },
      { item: "Turkey leg", price: 13.89 },
      { item: "Salmon", price: 15.99 }
    ],    
    "Farmstead Meat": [
      { item: "Gyro", price: 11.89 },
      { item: "Ham", price: 11.89 },
      { item: "Roasted turkey", price: 11.89 },
      { item: "Beef brisket", price: 13.89 }
    ],    
    "Sprout Items": [
      { item: "Yogurt Bar", price: 6.29 },
      { item: "Soy nugget", price: 6.99 },
      { item: "Salad bar", price: 8.89 },
      { item: "Acai smoothie Bowl", price: 9.75 },
      { item: "Spicy cauliflower wrap", price: 9.99 },
      { item: "Falafel wrap", price: 9.99 },
      { item: "Black bean burger", price: 9.99 },
      { item: "Falafel Bowl", price: 9.99 },
      { item: "Avocado toast", price: 7.99 },
      { item: "Three composed salad", price: 10.99 },
      { item: "Black pepper tofu", price: 11.89 },
      { item: "Three bean chili", price: 11.89 },
      { item: "Chickpea stew", price: 11.89 }
    ],    
    "Sides": [
      { item: "Banana", price: 0.99 },
      { item: "Orange", price: 1.29 },
      { item: "Apple", price: 1.49 },
      { item: "Single slider", price: 3.49 },
      { item: "Other side", price: 3.49 }
    ],
    "Drinks": [
      { item: "Bottled water", price: 1.39 },
      { item: "Gold Peak sweet tea", price: 1.89 },
      { item: "Pellegrino flavored", price: 2.49 },
      { item: "Sparkling Pellegrino", price: 2.79 },
      { item: "Vitamin Water", price: 2.99 }
    ]    
  },

  "Cafe": {
    "Food": [
      { item: "Menu unavailable", price: 1.00 }
    ]
  },

  "Sazon": {
    "Food Items": [
      { item: "Arepa Bowl", price: 11.89 },
      { item: "Quesadilla", price: 11.89 },
      { item: "2 Tacos", price: 11.89 },
    ],
    "Dessert": [
      { item: "Cookie", price: 2.89 },
      { item: "Brownie", price: 2.89 }
    ],
    "Drinks": [
      { item: "AHA", price: 1.39 },
      { item: "Topo Chico", price: 1.39 },
      { item: "Bottled water", price: 1.89 },
      { item: "Jarritos", price: 1.89 },
      { item: "San Pelligrino Sparkling Water", price: 1.99 },
      { item: "Other San Pelligrino", price: 2.39 },
    ]
  },

  "Skillet": {
    "Lunch": [
      { item: "Three sides platter", price: 8.99 },
      { item: "Pulled pork sandwich", price: 10.29 },
      { item: "Fried egg BLT", price: 10.49 },
      { item: "Shrimp po' Boy", price: 11.79 },
      { item: "Big country fried chicken sandwich", price: 11.99 },
      { item: "NC pork", price: 11.29 },
      { item: "Fried chicken tenders", price: 11.99 },
      { item: "Meatloaf", price: 11.99 },
      { item: "Two-piece fried chicken", price: 11.99 },
      { item: "Pulled pork and tenders", price: 12.79 },
      { item: "Shrimp and grits", price: 12.99 },
      { item: "Three piece fried chicken", price: 14.39 },
      { item: "Catfish", price: 14.99 },
      { item: "Smoked beef brisket", price: 16.09 }
    ],
    "Lunch Sides": [
      { item: "Toast", price: 1.19 },
      { item: "Brioche roll", price: 1.59 },
      { item: "Biscuit", price: 1.99 },
      { item: "Two eggs", price: 1.99 },
      { item: "Collard greens", price: 3.19 },
      { item: "Green beans", price: 3.19 },
      { item: "Squash and onions", price: 3.19 },
      { item: "Coleslaw", price: 3.19 },
      { item: "Mixed fruit", price: 3.19 },
      { item: "Rice", price: 3.19 },
      { item: "Mashed potatoes", price: 3.19 },
      { item: "Potato wedges", price: 3.19 },
      { item: "Mac and cheese", price: 3.19 }
    ],
    "Breakfast": [
      { item: "Biscuit egg and cheese", price: 3.99 },
      { item: "Biscuit with protein", price: 5.49 },
      { item: "Biscuit egg cheese with protein", price: 6.49 },
      { item: "Biscuits and gravy", price: 6.69 },
      { item: "Belgian waffle", price: 6.99 },
      { item: "Two pancakes", price: 7.99 },
      { item: "Blue Plate", price: 9.49 },
      { item: "Four pancakes", price: 9.99 },
      { item: "Chicken and waffles", price: 10.49 },
      { item: "Omelette", price: 10.59 }
    ],    
    "Breakfast Sides": [
      { item: "Banana", price: 0.99 },
      { item: "Orange", price: 1.29 },
      { item: "Apple", price: 1.49 },
      { item: "Two eggs", price: 1.99 },
      { item: "Three eggs", price: 2.99 },
      { item: "Bacon", price: 3.19 },
      { item: "Grits", price: 3.19 },
      { item: "Ham", price: 3.19 },
      { item: "Fruit", price: 3.19 },
      { item: "Oatmeal", price: 3.19 },
      { item: "Sausage", price: 3.19 },
      { item: "Tater tots", price: 3.19 },
      { item: "Yogurt", price: 3.19 }
    ],
    "Drinks": [
      { item: "Bottled water", price: 1.59 },
      { item: "Smartwater", price: 1.89 },
      { item: "Juice", price: 2.79 },
      { item: "Vitamin Water", price: 2.99 },
      { item: "Milkies", price: 3.29 },
      { item: "Body Armour", price: 4.19 }
    ],
    "Desserts": [
      { item: "Apple cobbler", price: 4.99 },
      { item: "Banana pudding", price: 4.99 },
      { item: "Chocolate pie", price: 4.99 }
    ]    
  },

  "Tandoor": {
    "Bread": [
      { item: "Naan", price: 2.49 },
      { item: "Garlic naan", price: 3.79 }
    ],
    "Appetizers": [
      { item: "Vegetables samosa", price: 4.99 },
      { item: "Sada dosai", price: 8.59 },
      { item: "Masala dosa", price: 10.29 },
      { item: "Vegetable dosai", price: 10.29 },
      { item: "Chicken dosai", price: 11.49 }
    ],
    "Combos": [
      { item: "Vegetable", price: 10.89 },
      { item: "Non-vegetable", price: 11.89 }
    ],
    "Desserts": [
      { item: "Mango lassi", price: 3.99 },
      { item: "Gulab jamun", price: 4.25 },
      { item: "Kheer", price: 4.25 }
    ]
  },

  "Kraft": {
    "Appetizers": [
      { item: "Pickle chips", price: 6.49 },
      { item: "Onion rings", price: 6.99 },
      { item: "Cheese curds", price: 7.99 },
      { item: "Wings", price: 7.99 },
      { item: "Nachos", price: 7.99 },
      { item: "Loaded chips", price: 8.99 },
      { item: "Chicken tenders", price: 9.99 },
      { item: "Vegan tenders", price: 11.99 }
    ],
    "Salads": [
      { item: "Mixed arugula", price: 7.99 },
      { item: "Buffalo bacon ranch", price: 11.99 },
      { item: "Fried chicken", price: 12.49 },
      { item: "Ginger grilled salmon", price: 12.49 },
      { item: "Southwest chicken cob", price: 12.99 },
      { item: "Caribbean fish", price: 14.99 }
    ],
    "Handhelds": [
      { item: "Grilled cheese", price: 5.00 },
      { item: "Quesadilla", price: 9.99 },
      { item: "Barbecue chicken sandwich", price: 9.99 },
      { item: "Turkey and havarti", price: 10.99 },
      { item: "Buffalo chicken tender sandwich", price: 10.99 },
      { item: "Flame grilled chicken sandwich", price: 10.99 },
      { item: "Grilled mahi mahi fish wrap", price: 14.49 },
      { item: "Flank steak French dip", price: 14.99 }
    ],
    "Burgers": [
      { item: "Devil's Krafthouse", price: 11.99 },
      { item: "Queso", price: 11.99 },
      { item: "Brecky", price: 11.99 },
      { item: "Impossible", price: 13.99 },
      { item: "Brie and bacon jam", price: 13.99 },
      { item: "Barbecue bacon", price: 14.99 },
      { item: "Mushroom and Swiss", price: 14.99 }
    ],
    "Others": [
      { item: "Cookie", price: 2.59 },
      { item: "Brownie", price: 3.50 },
      { item: "Fruit", price: 3.99 },
      { item: "Fries", price: 3.99 },
      { item: "Side salad", price: 3.99 },
      { item: "Chips", price: 5.99 },
      { item: "Milkshake", price: 5.99 },
      { item: "Ice cream sandwich", price: 6.99 },
      { item: "Sweet potato tots", price: 6.99 }
    ],
    "Drinks": [
      { item: "Natalie's juices", price: 1.89 },
      { item: "San Pellegrino sparkling water", price: 1.99 },
      { item: "Mexican Coke", price: 2.39 },
      { item: "Liquid Death", price: 2.39 },
      { item: "Boylan's soda", price: 2.39 },
      { item: "Jarritos", price: 2.89 },
      { item: "Mexican Sprite", price: 2.99 },
      { item: "Liquid Death", price: 2.99 }
    ]        
  },

  "Gyotaku": {
    Food: [
      { item: "Menu unavailable", price: 1.00 }
    ]
  },

  "McDonalds": {
    "Entrees": [
      { item: "Hamburger", price: 1.99 },
      { item: "Cheeseburger", price: 2.29 },
      { item: "McChicken", price: 2.79 },
      { item: "Double Cheeseburger", price: 3.49 },
      { item: "Bacon Cajun Ranch McCrispy", price: 5.29 },
      { item: "Filet-O-Fish", price: 4.99 },
      { item: "Triple Cheeseburger", price: 4.79 },
      { item: "6 Piece McNuggets", price: 4.29 },
      { item: "Big Mac", price: 5.99 },
      { item: "Double Filet-O-Fish", price: 5.99 },
      { item: "McRib", price: 6.19 },
      { item: "10 Piece McNuggets", price: 6.19 },
      { item: "Quarter Pounder with Cheese", price: 6.29 },
      { item: "Bacon Cajun Ranch Deluxe McCrispy", price: 6.69 },
      { item: "Cheesy Jalapeno Bacon PPC", price: 7.19 },
      { item: "Double Quarter Pounder with Cheese", price: 7.19 },
      { item: "Double Cheesy Jalapeno Bacon PPC", price: 7.79 }
    ],
    "Lunch Side": [
      { item: "Medium Fry", price: 3.49 },
      { item: "Large Fry", price: 3.99 }
    ],
    "Coffee": [
      { item: "Espresso", price: 1.79 },
      { item: "Small Coffee", price: 1.99 },
      { item: "Medium Coffee", price: 2.39 },
      { item: "Large Coffee", price: 2.69 },
      { item: "Small Hot Chocolate", price: 3.39 },
      { item: "Iced Coffee", price: 3.29 },
      { item: "Americano", price: 3.49 },
      { item: "Cappuccino", price: 3.49 },
      { item: "Caramel Mocha", price: 3.49 },
      { item: "Iced Caramel Mocha", price: 3.49 },
      { item: "Iced Latte", price: 3.49 },
      { item: "Iced Mocha", price: 3.49 },
      { item: "Latte", price: 3.49 },
      { item: "Mocha", price: 3.49 },
      { item: "Caramel Frappe", price: 3.49 },
      { item: "Mocha Frappe", price: 3.49 },
      { item: "Medium Hot Chocolate", price: 3.69 },
      { item: "Large Hot Chocolate", price: 4.39 }
    ],
    "Other Drinks": [
      { item: "Apple Juice", price: 1.59 },
      { item: "Small Lemonade", price: 1.89 },
      { item: "Blue Raspberry Frozen", price: 1.99 },
      { item: "Coca-Cola Frozen", price: 1.99 },
      { item: "Wild Cherry Frozen", price: 1.99 },
      { item: "Medium Lemonade", price: 2.19 },
      { item: "Small Fountain Drink", price: 1.69 },
      { item: "Medium Fountain Drink", price: 1.99 },
      { item: "Dasani", price: 1.99 },
      { item: "Large Fountain Drink", price: 2.49 },
      { item: "Large Lemonade", price: 2.59 },
      { item: "Small OJ", price: 2.89 },
      { item: "Medium OJ", price: 2.89 },
      { item: "Large OJ", price: 3.49 },
      { item: "Mango Pineapple Smoothie", price: 4.69 },
      { item: "Strawberry Banana Smoothie", price: 4.69 }
    ],
    "Desserts": [
      { item: "One Cookie", price: 0.89 },
      { item: "Two Cookies", price: 1.39 },
      { item: "Apple Pie", price: 1.99 },
      { item: "Plain Sundae", price: 1.99 },
      { item: "Strawberry & Creme Pie", price: 1.99 },
      { item: "One Holiday Creme Pie", price: 1.99 },
      { item: "Cookies and Cream Pie", price: 1.99 },
      { item: "Two Strawberry & Creme Pies", price: 2.99 },
      { item: "Two Apple Pies", price: 2.99 },
      { item: "Caramel Sundae", price: 2.99 },
      { item: "Hot Fudge Sundae", price: 2.99 },
      { item: "Two Cookies and Cream Pies", price: 2.99 },
      { item: "Grandma McFlurry", price: 3.79 },
      { item: "Kit Kat Banana Split McFlurry", price: 3.79 },
      { item: "Oreo McFlurry", price: 3.79 },
      { item: "M&M McFlurry", price: 3.79 },
      { item: "Chocolate Shake", price: 3.99 },
      { item: "Strawberry Shake", price: 3.99 },
      { item: "Vanilla Shake", price: 3.99 }
    ]
  },  

  "Beyu Blue": {
    Food: [
      { item: "Menu unavailable", price: 1.00 }
    ]
  },

  "Gothic Grill": {
    "Appetizers and Small Plates": [
      { item: "Tortilla Chips with Guacamole", price: 3.99 },
      { item: "Mozzarella Sticks", price: 5.99 },
      { item: "Sweet Potato Waffle Fries", price: 5.99 },
      { item: "Crispy Cauliflower", price: 5.99 },
      { item: "Zucchini Fries", price: 6.49 },
      { item: "Wings (6)", price: 7.99 },
      { item: "Buffalo Chicken Mac and Cheese", price: 8.99 },
      { item: "Chili Cheese Nachos", price: 9.99 },
      { item: "Fried Calamari", price: 9.99 },
      { item: "Chicken Tenders", price: 9.99 },
      { item: "Fried Shrimp Basket", price: 12.99 },
      { item: "Soup Cup or Bowl", price: 6.00 },
      { item: "Caesar Salad", price: 9.99 },
      { item: "Chopped Salad", price: 9.99 },
      { item: "Greek Salad", price: 10.99 },
      { item: "Caprese Grilled Chicken Salad", price: 11.99 },
      { item: "Crispy Buffalo Chicken Salad", price: 12.99 },
      { item: "Grilled Mahi Mahi Salad", price: 14.99 }
    ],
    "Tacos and Sandwiches": [
      { item: "Taco Tuesday Special", price: 2.50 },
      { item: "Pulled Chicken Tacos", price: 6.99 },
      { item: "Vegged Taco", price: 6.99 },
      { item: "Blackened Mahi Tacos", price: 7.99 },
      { item: "Calamari Tacos", price: 7.99 },
      { item: "Crispy Flounder Tacos", price: 7.99 },
      { item: "Crispy Shrimp Tacos", price: 7.99 },
      { item: "Steak Tacos", price: 7.99 },
      { item: "BLTA", price: 9.99 },
      { item: "Buffalo Chicken Wrap", price: 9.99 },
      { item: "Chicken Caesar Wrap", price: 9.99 },
      { item: "Chicken Philly", price: 10.99 },
      { item: "Chicken Ciabatta", price: 10.99 },
      { item: "Famous Thrive Chicken Sandwich", price: 11.99 },
      { item: "Buffalo Shrimp Wrap", price: 11.99 },
      { item: "Calabash Style Fried Fish Sandwich", price: 12.99 }
    ],
    "Burgers and Hot Dogs": [
      { item: "Gothic Smash Burger", price: 9.99 },
      { item: "Build Your Own Burger", price: 9.99 },
      { item: "Double Patty Melt Burger", price: 14.99 },
      { item: "Duke Blue Cheese Burger", price: 14.99 },
      { item: "The NC Burger", price: 14.99 },
      { item: "Gothic $5 Meal", price: 5.00 },
      { item: "Pauly Dogs", price: 8.99 },
      { item: "Tex Mexi Dog", price: 8.99 },
      { item: "Chippy Dog", price: 9.99 },
      { item: "Daddy Mac", price: 10.99 }
    ],
    "Pizzas": [
      { item: "Cheese Pizza", price: 9.49 },
      { item: "Blanco Pizza", price: 11.49 },
      { item: "Build Your Own Pizza", price: 11.49 },
      { item: "Cali Chicken Pizza", price: 11.49 },
      { item: "Island Pizza", price: 11.49 },
      { item: "Meateater Pizza", price: 11.49 },
      { item: "Veg G Pizza", price: 11.49 },
      { item: "BBQ Chicken Pizza", price: 11.49 }
    ],
    "Sides": [
      { item: "Fries", price: 3.99 },
      { item: "Mac and Cheese Cup", price: 3.99 },
      { item: "Chips", price: 3.99 },
      { item: "Fresh Fruit", price: 3.99 },
      { item: "Side Salad", price: 3.99 }
    ],
    "Beverages": [
      { item: "Fountain Beverage", price: 1.99 },
      { item: "Gold Peak", price: 1.89 },
      { item: "Minute Maid", price: 2.79 },
      { item: "Peace Tea", price: 1.89 },
      { item: "San Pellegrino", price: 1.99 },
      { item: "Smart Water 1 Liter", price: 3.29 },
      { item: "Smart Water 20 oz", price: 1.89 },
      { item: "Beverage Special", price: 6.00 },
      { item: "Bottled Soda 20 oz", price: 2.25 },
      { item: "Calypso", price: 3.09 },
      { item: "Core Power", price: 5.99 },
      { item: "Fairlife Milk", price: 3.29 },
      { item: "Liquid Death", price: 2.99 },
      { item: "Powerade", price: 2.09 },
      { item: "Prime", price: 2.99 },
      { item: "Vitamin Water", price: 2.99 },
      { item: "Yerba Mate", price: 4.39 }
    ]
  },
  
  
  "It's Thyme": {
    Food: [
      { item: "Menu unavailable", price: 1.00 }
    ]
  },

  "Red Mango": {
    Smoothies: [
      { item: "Berry Banana", price: 6.99 },
      { item: "Pina Colada", price: 6.99 },
      { item: "Strawberry Banana", price: 6.99 },
      { item: "Tropical Mango", price: 6.99 },
      { item: "Banana PB Protein", price: 7.99 },
      { item: "Berry Banana Lg", price: 7.99 },
      { item: "Berry Power Protein", price: 7.99 },
      { item: "Citrus Mango Greens", price: 7.99 },
      { item: "Mango Metabolizer", price: 7.99 },
      { item: "MYO Smoothie", price: 7.99 },
      { item: "Pina Colada Lg", price: 7.99 },
      { item: "Skinny Strawberry", price: 7.99 },
      { item: "Super PB Cup", price: 7.99 },
      { item: "SPK", price: 7.99 },
      { item: "Velvet Green", price: 7.99 },
      { item: "Banana PB Protein Lg", price: 8.99 },
      { item: "Berry Power Protein Lg", price: 8.99 },
      { item: "Citrus Mango Greens Lg", price: 8.99 },
      { item: "Honey Badger Lg", price: 8.99 },
      { item: "Mango Metabolizer Lg", price: 8.99 },
      { item: "PBJ", price: 8.99 },
      { item: "Pina Colada Lg", price: 8.99 },
      { item: "Skinny Strawberry Lg", price: 8.99 },
      { item: "Super PB Cup Lg", price: 8.99 },
      { item: "SPK Lg", price: 8.99 },
      { item: "Velvet Green Lg", price: 8.99 }
    ],    
    Bowls: [
      { item: "Berry and Acai", price: 10.69 },
      { item: "Choco-Nut Dream", price: 10.69 },
      { item: "Honey Apple Bowl", price: 10.69 },
      { item: "PB Power Acai Bowl", price: 10.69 },
      { item: "Pink Bowl", price: 10.69 },
      { item: "Totally Tropical Acai Bowl", price: 10.69 },
      { item: "Black Bean Bowl", price: 11.19 },
      { item: "Chia Seed Pudding Bowl", price: 11.19 },
      { item: "Quinoa and Black Bean Bowl", price: 11.19 }
    ],
    Sandwiches: [
      { item: "Turkey & Cheese", price: 7.40 },
      { item: "Chicken Caesar", price: 8.39 },
      { item: "Chicken Salad", price: 8.39 },
      { item: "Mediterranean Pesto", price: 8.39 },
      { item: "Gyro", price: 8.39 },
      { item: "Veggie", price: 8.39 },
      { item: "BLT", price: 8.39 },
      { item: "Spicy Chicken", price: 8.39 },
      { item: "Hawaiian Teriyaki Chicken", price: 8.39 },
      { item: "Chicken Apple Pesto", price: 8.39 },
      { item: "Buffalo Chicken", price: 8.39 },
      { item: "Falafel", price: 8.39 },
      { item: "Italian", price: 8.39 },
      { item: "Ham & Cheese", price: 8.69 },
      { item: "Club", price: 9.29 },
      { item: "Philly Steak", price: 10.19 }
    ], 
    PBJ: [
      { item: "Fresh Berry Grilled PB&J", price: 7.19 },
      { item: "Grilled Banana Delight", price: 7.19 },
      { item: "Grilled Banana PB&J", price: 7.19 }
    ],
    Breakfast: [
      { item: "Avocado Toast", price: 6.19 },
      { item: "Avocado Egg & Cheese", price: 6.19 },
      { item: "Bacon Egg & Cheese", price: 6.19 },
      { item: "Turkey Sausage Egg & Cheese", price: 6.19 }
    ],
  },

  "Pitchfork's": {
    Food: [
      { item: "Menu unavailable", price: 1.00 }
    ]
  },
};


export default MenuData;
