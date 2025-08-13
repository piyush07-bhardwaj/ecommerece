# Let me create comprehensive sample data for the e-commerce application with 70+ products across multiple categories
import json
import random

# Define categories as requested
categories = [
    {"id": "kitchen", "name": "Kitchen", "description": "Kitchen essentials and appliances"},
    {"id": "electronics", "name": "Electronics", "description": "TVs, laptops, headphones and gadgets"},
    {"id": "clothes", "name": "Clothes", "description": "Men's, Women's and Kids' fashion"},
    {"id": "mobiles", "name": "Mobiles", "description": "Smartphones and accessories"},
    {"id": "books", "name": "Books", "description": "Fiction, educational and reference books"},
    {"id": "furniture", "name": "Furniture", "description": "Chairs, tables, beds and home furniture"},
    {"id": "sports", "name": "Sports", "description": "Gym equipment and outdoor games"},
    {"id": "beauty", "name": "Beauty", "description": "Skincare, makeup and cosmetics"},
    {"id": "toys", "name": "Toys", "description": "Toys for all age groups"},
    {"id": "automotive", "name": "Automotive", "description": "Car accessories and tools"}
]

# Sample products for each category
sample_products = {
    "kitchen": [
        {"name": "Non-Stick Frying Pan", "description": "Premium non-stick coating for healthy cooking", "price": 2499, "brand": "Prestige"},
        {"name": "Electric Rice Cooker", "description": "Automatic rice cooker with keep warm function", "price": 3999, "brand": "Bajaj"},
        {"name": "Stainless Steel Pressure Cooker", "description": "5L capacity pressure cooker for fast cooking", "price": 1899, "brand": "Hawkins"},
        {"name": "Microwave Oven", "description": "20L convection microwave with grill function", "price": 8999, "brand": "LG"},
        {"name": "Electric Kettle", "description": "1.7L electric kettle with auto shut-off", "price": 1299, "brand": "Philips"},
        {"name": "Food Processor", "description": "Multi-function food processor with 7 attachments", "price": 4999, "brand": "Morphy Richards"},
        {"name": "Dinner Set", "description": "24-piece melamine dinner set for 6 people", "price": 2999, "brand": "Borosil"},
        {"name": "Kitchen Knife Set", "description": "5-piece stainless steel knife set with holder", "price": 1999, "brand": "Pigeon"}
    ],
    "electronics": [
        {"name": "Smart LED TV 55\"", "description": "4K Ultra HD Smart LED TV with Android", "price": 45999, "brand": "Samsung"},
        {"name": "Bluetooth Headphones", "description": "Wireless noise-cancelling headphones", "price": 2999, "brand": "Sony"},
        {"name": "Gaming Laptop", "description": "15.6\" gaming laptop with GTX graphics", "price": 65999, "brand": "ASUS"},
        {"name": "Wireless Speaker", "description": "Portable Bluetooth speaker with bass boost", "price": 1999, "brand": "JBL"},
        {"name": "Digital Camera", "description": "24MP DSLR camera with 18-55mm lens", "price": 35999, "brand": "Canon"},
        {"name": "Smartwatch", "description": "Fitness tracker with heart rate monitor", "price": 8999, "brand": "Apple"},
        {"name": "Tablet 10.1\"", "description": "Android tablet with 64GB storage", "price": 12999, "brand": "Lenovo"},
        {"name": "Power Bank", "description": "20000mAh fast charging power bank", "price": 1499, "brand": "Mi"}
    ],
    "clothes": [
        {"name": "Cotton T-Shirt", "description": "100% cotton round neck t-shirt", "price": 599, "brand": "Allen Solly"},
        {"name": "Denim Jeans", "description": "Slim fit blue denim jeans", "price": 1999, "brand": "Levi's"},
        {"name": "Formal Shirt", "description": "Cotton formal shirt for office wear", "price": 1299, "brand": "Van Heusen"},
        {"name": "Kurti", "description": "Designer cotton kurti with prints", "price": 899, "brand": "W"},
        {"name": "Ethnic Dress", "description": "Traditional Indian dress with embroidery", "price": 2499, "brand": "Biba"},
        {"name": "Sports Shoes", "description": "Running shoes with cushioned sole", "price": 2999, "brand": "Nike"},
        {"name": "Winter Jacket", "description": "Warm winter jacket with hood", "price": 3999, "brand": "Puma"},
        {"name": "Kids Frock", "description": "Cotton frock for girls aged 2-8 years", "price": 799, "brand": "First Cry"}
    ],
    "mobiles": [
        {"name": "iPhone 15", "description": "128GB storage with A17 chip", "price": 79999, "brand": "Apple"},
        {"name": "Samsung Galaxy S24", "description": "256GB storage with triple camera", "price": 69999, "brand": "Samsung"},
        {"name": "OnePlus 12", "description": "128GB storage with fast charging", "price": 54999, "brand": "OnePlus"},
        {"name": "Xiaomi Redmi Note 13", "description": "128GB storage with 50MP camera", "price": 18999, "brand": "Xiaomi"},
        {"name": "Phone Case", "description": "Transparent silicon phone case", "price": 299, "brand": "Generic"},
        {"name": "Screen Protector", "description": "Tempered glass screen protector", "price": 199, "brand": "Generic"},
        {"name": "Wireless Charger", "description": "15W fast wireless charging pad", "price": 1299, "brand": "Samsung"},
        {"name": "Car Mount", "description": "Magnetic car phone holder", "price": 599, "brand": "Generic"}
    ],
    "books": [
        {"name": "The Alchemist", "description": "International bestseller by Paulo Coelho", "price": 299, "brand": "HarperCollins"},
        {"name": "Python Programming", "description": "Complete guide to Python programming", "price": 599, "brand": "O'Reilly"},
        {"name": "Rich Dad Poor Dad", "description": "Personal finance book by Robert Kiyosaki", "price": 399, "brand": "Plata"},
        {"name": "Atomic Habits", "description": "Guide to building good habits", "price": 449, "brand": "Random House"},
        {"name": "History of India", "description": "Comprehensive Indian history textbook", "price": 799, "brand": "NCERT"},
        {"name": "Cookbook", "description": "500 Indian recipes cookbook", "price": 599, "brand": "Penguin"},
        {"name": "Science Fiction Novel", "description": "Space adventure science fiction", "price": 399, "brand": "Orbit"},
        {"name": "Children's Story Book", "description": "Illustrated stories for kids", "price": 199, "brand": "Scholastic"}
    ],
    "furniture": [
        {"name": "Office Chair", "description": "Ergonomic office chair with lumbar support", "price": 7999, "brand": "Featherlite"},
        {"name": "Study Table", "description": "Wooden study table with drawers", "price": 5999, "brand": "Godrej"},
        {"name": "Queen Size Bed", "description": "Solid wood queen size bed frame", "price": 18999, "brand": "Urban Ladder"},
        {"name": "Sofa Set", "description": "3+2 seater fabric sofa set", "price": 35999, "brand": "Pepperfry"},
        {"name": "Dining Table", "description": "6-seater wooden dining table", "price": 25999, "brand": "FabIndia"},
        {"name": "Wardrobe", "description": "3-door wardrobe with mirror", "price": 22999, "brand": "IKEA"},
        {"name": "Bookshelf", "description": "5-tier wooden bookshelf", "price": 4999, "brand": "Wakefit"},
        {"name": "Coffee Table", "description": "Glass top coffee table", "price": 6999, "brand": "HomeCenter"}
    ],
    "sports": [
        {"name": "Yoga Mat", "description": "Anti-slip yoga mat 6mm thick", "price": 899, "brand": "Reebok"},
        {"name": "Dumbbells Set", "description": "Adjustable dumbbells 2kg-20kg", "price": 4999, "brand": "Strauss"},
        {"name": "Cricket Bat", "description": "English willow cricket bat", "price": 2999, "brand": "MRF"},
        {"name": "Football", "description": "FIFA approved football size 5", "price": 799, "brand": "Nivia"},
        {"name": "Badminton Racket", "description": "Carbon fiber badminton racket", "price": 1999, "brand": "Yonex"},
        {"name": "Tennis Ball", "description": "Pack of 6 tennis balls", "price": 599, "brand": "Wilson"},
        {"name": "Gym Bag", "description": "Water resistant gym duffle bag", "price": 1299, "brand": "Adidas"},
        {"name": "Swimming Goggles", "description": "Anti-fog swimming goggles", "price": 499, "brand": "Speedo"}
    ],
    "beauty": [
        {"name": "Face Cream", "description": "Anti-aging face cream with SPF", "price": 899, "brand": "Olay"},
        {"name": "Lipstick", "description": "Matte finish lipstick long lasting", "price": 599, "brand": "Lakme"},
        {"name": "Shampoo", "description": "Anti-dandruff shampoo 400ml", "price": 299, "brand": "Head & Shoulders"},
        {"name": "Perfume", "description": "Long lasting eau de parfum 100ml", "price": 1999, "brand": "Fogg"},
        {"name": "Foundation", "description": "Full coverage liquid foundation", "price": 1299, "brand": "Maybelline"},
        {"name": "Sunscreen", "description": "SPF 50 sunscreen lotion", "price": 499, "brand": "Neutrogena"},
        {"name": "Hair Oil", "description": "Coconut hair oil for nourishment", "price": 199, "brand": "Parachute"},
        {"name": "Face Mask", "description": "Charcoal face mask for deep cleansing", "price": 399, "brand": "The Body Shop"}
    ],
    "toys": [
        {"name": "Remote Control Car", "description": "1:16 scale RC car with rechargeable battery", "price": 1999, "brand": "Maisto"},
        {"name": "Building Blocks", "description": "500 pieces building blocks set", "price": 899, "brand": "Lego"},
        {"name": "Teddy Bear", "description": "Soft plush teddy bear 12 inches", "price": 599, "brand": "Archies"},
        {"name": "Board Game", "description": "Family board game for 2-6 players", "price": 799, "brand": "Hasbro"},
        {"name": "Puzzle", "description": "1000 pieces jigsaw puzzle", "price": 499, "brand": "Ravensburger"},
        {"name": "Art Set", "description": "Complete art set with colors and brushes", "price": 699, "brand": "Camlin"},
        {"name": "Action Figure", "description": "Superhero action figure with accessories", "price": 999, "brand": "Marvel"},
        {"name": "Musical Toy", "description": "Electronic piano for kids", "price": 1499, "brand": "Fisher Price"}
    ],
    "automotive": [
        {"name": "Car Phone Holder", "description": "Dashboard phone mount for cars", "price": 399, "brand": "Generic"},
        {"name": "Car Charger", "description": "Dual USB car charger 3.1A", "price": 299, "brand": "Belkin"},
        {"name": "Seat Covers", "description": "Premium leather seat covers set", "price": 2999, "brand": "AutoSun"},
        {"name": "Car Air Freshener", "description": "Long lasting gel air freshener", "price": 199, "brand": "Ambi Pur"},
        {"name": "Floor Mats", "description": "Rubber floor mats set of 5", "price": 899, "brand": "3M"},
        {"name": "Car Polish", "description": "Car wax polish for shine", "price": 399, "brand": "Meguiar's"},
        {"name": "Jumper Cables", "description": "Heavy duty jumper cables 3 meter", "price": 799, "brand": "Bosch"},
        {"name": "Tire Pressure Gauge", "description": "Digital tire pressure gauge", "price": 599, "brand": "Michelin"}
    ]
}

# Generate comprehensive product data
products = []
product_id = 1

for category in categories:
    category_products = sample_products.get(category["id"], [])
    
    for product_data in category_products:
        # Generate product variants and details
        product = {
            "id": product_id,
            "name": product_data["name"],
            "description": product_data["description"],
            "category": category["id"],
            "categoryName": category["name"],
            "price": product_data["price"],
            "originalPrice": int(product_data["price"] * random.uniform(1.1, 1.5)),
            "discount": random.randint(10, 40),
            "brand": product_data["brand"],
            "rating": round(random.uniform(3.5, 5.0), 1),
            "reviewCount": random.randint(50, 500),
            "stock": random.randint(5, 100),
            "sku": f"SKU{product_id:06d}",
            "weight": round(random.uniform(0.1, 5.0), 2),
            "dimensions": {
                "length": round(random.uniform(10, 50), 1),
                "width": round(random.uniform(10, 50), 1),
                "height": round(random.uniform(5, 30), 1)
            },
            "features": [
                "High Quality",
                "Durable",
                "Value for Money",
                "Fast Delivery"
            ],
            "tags": [category["id"], product_data["brand"].lower()],
            "isAvailable": True,
            "isFeatured": random.choice([True, False]),
            "isNew": random.choice([True, False]),
            "images": [
                f"https://images.unsplash.com/photo-{1500000000 + product_id}?w=400&h=400&fit=crop",
                f"https://images.unsplash.com/photo-{1500000000 + product_id + 1}?w=400&h=400&fit=crop",
                f"https://images.unsplash.com/photo-{1500000000 + product_id + 2}?w=400&h=400&fit=crop"
            ],
            "thumbnail": f"https://images.unsplash.com/photo-{1500000000 + product_id}?w=300&h=300&fit=crop",
            "createdAt": "2024-01-01T00:00:00.000Z",
            "updatedAt": "2024-01-01T00:00:00.000Z"
        }
        
        products.append(product)
        product_id += 1

print(f"Generated {len(products)} products across {len(categories)} categories")
print(f"Categories: {[cat['name'] for cat in categories]}")

# Sample users data
users = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "password": "$2b$10$hashedpassword1",
        "role": "customer",
        "addresses": [
            {
                "id": 1,
                "name": "Home",
                "street": "123 Main St",
                "city": "Mumbai",
                "state": "Maharashtra",
                "zipCode": "400001",
                "country": "India",
                "phone": "+91 9876543210",
                "isDefault": True
            }
        ],
        "wishlist": [1, 5, 10],
        "createdAt": "2024-01-01T00:00:00.000Z"
    },
    {
        "id": 2,
        "name": "Admin User",
        "email": "admin@example.com",
        "password": "$2b$10$hashedpassword2",
        "role": "admin",
        "addresses": [],
        "wishlist": [],
        "createdAt": "2024-01-01T00:00:00.000Z"
    }
]

# Sample orders data
orders = [
    {
        "id": 1,
        "userId": 1,
        "items": [
            {"productId": 1, "quantity": 2, "price": 2499},
            {"productId": 3, "quantity": 1, "price": 1899}
        ],
        "totalAmount": 6897,
        "status": "delivered",
        "shippingAddress": {
            "name": "John Doe",
            "street": "123 Main St",
            "city": "Mumbai",
            "state": "Maharashtra",
            "zipCode": "400001",
            "country": "India",
            "phone": "+91 9876543210"
        },
        "paymentMethod": "card",
        "paymentStatus": "completed",
        "trackingNumber": "TRK123456789",
        "createdAt": "2024-01-15T10:30:00.000Z",
        "updatedAt": "2024-01-20T14:15:00.000Z"
    }
]

# Print summary
print(f"\nData Summary:")
print(f"- Products: {len(products)}")
print(f"- Categories: {len(categories)}")
print(f"- Users: {len(users)}")
print(f"- Orders: {len(orders)}")