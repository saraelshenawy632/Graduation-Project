const products = [
  {
    id: 1,
    name: "MacBook Pro M2",
    description: "13-inch, M2 chip, 8GB RAM, 256GB SSD",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3",
    category: "Electronics",
    stock: 10,
    featured: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 2,
    name: "iPhone 14 Pro",
    description: "256GB, Dynamic Island, Pro Camera System",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3",
    category: "Electronics",
    stock: 15,
    featured: true,
    rating: 4.9,
    reviews: 234
  },
  {
    id: 3,
    name: "Sony WH-1000XM4",
    description: "Wireless Premium Noise Canceling Headphones",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3",
    category: "Electronics",
    stock: 20,
    featured: true,
    rating: 4.7,
    reviews: 189
  },
  {
    id: 4,
    name: "Apple Watch Series 8",
    description: "GPS, Always-On Retina display, Health features",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3",
    category: "Electronics",
    stock: 12,
    featured: true,
    rating: 4.6,
    reviews: 145
  },
  {
    id: 5,
    name: "iPad Air",
    description: "10.9-inch, M1 chip, 64GB, Wi-Fi",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3",
    category: "Electronics",
    stock: 8,
    featured: false,
    rating: 4.5,
    reviews: 98
  },
  {
    id: 6,
    name: "Nike Air Max",
    description: "Lightweight running shoes with cushioning",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3",
    category: "Fashion",
    stock: 25,
    featured: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: 7,
    name: "Dyson Air Purifier",
    description: "HEPA air purifier for large rooms",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-4.0.3",
    category: "Home",
    stock: 15,
    featured: true,
    rating: 4.7,
    reviews: 112
  },
  {
    id: 8,
    name: "Ray-Ban Aviator",
    description: "Classic aviator sunglasses with UV protection",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3",
    category: "Fashion",
    stock: 30,
    featured: false,
    rating: 4.5,
    reviews: 76
  },
  {
    id: 9,
    name: "DJI Mavic Air 2",
    description: "4K camera drone with GPS",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3",
    category: "Electronics",
    stock: 5,
    featured: true,
    rating: 4.8,
    reviews: 67
  },
  {
    id: 10,
    name: "Lululemon Yoga Mat",
    description: "Non-slip yoga mat with carrying strap",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-4.0.3",
    category: "Sports",
    stock: 40,
    featured: false,
    rating: 4.4,
    reviews: 45
  },
  {
    id: 11,
    name: "Air Purifier",
    description: "HEPA air purifier for large rooms",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-4.0.3",
    category: "Home",
    stock: 12
  },
  {
    id: 12,
    name: "Leather Wallet",
    description: "Genuine leather wallet with multiple card slots",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3",
    category: "Fashion",
    stock: 35
  },
  {
    id: 13,
    name: "Smart Speaker",
    description: "Voice-controlled smart speaker with premium sound",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3",
    category: "Electronics",
    stock: 18
  },
  {
    id: 14,
    name: "Backpack",
    description: "Water-resistant laptop backpack with USB charging port",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3",
    category: "Fashion",
    stock: 22
  },
  {
    id: 15,
    name: "Blender",
    description: "High-speed blender for smoothies and food prep",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3",
    category: "Home",
    stock: 15
  },
  {
    id: 16,
    name: "Dumbbell Set",
    description: "Adjustable weight dumbbell set for home workouts",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cbacec6b1b5?ixlib=rb-4.0.3",
    category: "Sports",
    stock: 10
  },
  {
    id: 17,
    name: "Wireless Earbuds",
    description: "True wireless earbuds with charging case",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?ixlib=rb-4.0.3",
    category: "Electronics",
    stock: 25
  },
  {
    id: 18,
    name: "Desk Lamp",
    description: "LED desk lamp with wireless charging",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?ixlib=rb-4.0.3",
    category: "Home",
    stock: 20
  },
  {
    id: 19,
    name: "Smart Scale",
    description: "Digital smart scale with body composition analysis",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3",
    category: "Electronics",
    stock: 15
  },
  {
    id: 20,
    name: "Travel Bag",
    description: "Durable weekend travel bag with multiple compartments",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3",
    category: "Fashion",
    stock: 12
  }
];

export default products;

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'Electronics', name: 'Electronics' },
  { id: 'Fashion', name: 'Fashion' },
  { id: 'Home', name: 'Home' },
  { id: 'Sports', name: 'Sports' }
];

export const priceRanges = [
  { id: 'all', name: 'All Prices' },
  { id: 'under100', name: 'Under $100', min: 0, max: 99.99 },
  { id: '100to300', name: '$100 - $300', min: 100, max: 300 },
  { id: '300to600', name: '$300 - $600', min: 300, max: 600 },
  { id: 'over600', name: 'Over $600', min: 600, max: Infinity }
];