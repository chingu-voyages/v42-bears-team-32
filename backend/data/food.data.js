import mongoose from "mongoose"
export default [
    {
      name: "Pizza Margherita",
      imageUrl: "https://picsum.photos/500/300?random=1",
      ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Basil"],
      price: mongoose.Types.Decimal128.fromString("15.99"),
      calorie: 10,

      carbs: 30,
      fat: 10,
      protein: 10,
      restaurantName: "Pizza Palace",
      rating: 4.5,
      deliveryTime: 45,
      category: ["Italian", "Pizza"],
      tags: ["Popular"],
      countInStock: 100
    },
    {
      name: "Spicy Chicken Wings",
      imageUrl: "https://picsum.photos/500/300?random=2",
      ingredients: ["Chicken Wings", "Hot Sauce", "Garlic"],
      calorie: 10,
      price: mongoose.Types.Decimal128.fromString("9.99"),
      carbs: 15,
      fat: 25,
      protein: 20,
      restaurantName: "Wings N' Things",
      rating: 4.0,
      deliveryTime: 30,
      category: ["American", "Appetizers"],
      tags: ["Spicy"],
      countInStock: 150
    },
    {
      name: "Sushi Platter",
      imageUrl: "https://picsum.photos/500/300?random=3",
      ingredients: ["Rice", "Seaweed", "Raw Fish"],
      calorie: 10,
      price: mongoose.Types.Decimal128.fromString("25.99"),
      carbs: 25,
      fat: 5,
      protein: 20,
      restaurantName: "Sushi Express",
      rating: 4.7,
      deliveryTime: 60,
      category: ["Japanese", "Seafood"],
      tags: ["Popular"],
      countInStock: 80
    },
    {
      name: "Veggie Burger",
      imageUrl: "https://picsum.photos/500/300?random=3",
      ingredients: ["Bun", "Vegetables", "Cheese"],
      calorie: 10,
      price: mongoose.Types.Decimal128.fromString("12.99"),
      carbs: 30,
      fat: 15,
      protein: 15,
      restaurantName: "Burger Joint",
      rating: 4.0,
      deliveryTime: 45,
      category: ["American", "Burgers"],
      tags: ["Vegetarian"],
      countInStock: 200
    },
    {
      name: "Tandoori Chicken",
      imageUrl: "https://picsum.photos/500/300?random=4",
      ingredients: ["Chicken", "Spices", "Yogurt"],
      calorie: 10,
      price: mongoose.Types.Decimal128.fromString("14.99"),
      carbs: 10,
      fat: 20,
      protein: 25,
      restaurantName: "Tandoori Kitchen",
      rating: 4.2,
      deliveryTime: 60,
      category: ["Indian", "Chicken"],
      tags: ["Spicy"],
      countInStock: 120
    },
    {
        name: "Spaghetti Carbonara",
        imageUrl: "https://picsum.photos/500/300?random=5",
        ingredients: ["Spaghetti", "Bacon", "Eggs", "Parmesan Cheese"],
        calorie: 10,
        price: mongoose.Types.Decimal128.fromString("14.99"),
        carbs: 30,
        fat: 30,
        protein: 20,
        restaurantName: "Trattoria",
        deliveryTime: 35,
        category: ["Italian", "Pasta"],
        tags: ["Creamy", "Bacon"],
        countInStock: 50
      },
      {
        name: "Pho",
        imageUrl: "https://picsum.photos/500/300?random=6",
        ingredients: ["Rice Noodles", "Beef", "Herbs", "Broth"],
        calorie: 10,
        price: mongoose.Types.Decimal128.fromString("8.99"),
        carbs: 40,
        fat: 10,
        protein: 20,
        restaurantName: "Vietnamese Kitchen",
        deliveryTime: 40,
        category: ["Vietnamese"],
        tags: ["Soup", "Noodles"],
        countInStock: 50
      },
      {
        name: "Bibimbap",
        imageUrl: "https://picsum.photos/500/300?random=7",
        ingredients: ["Rice", "Vegetables", "Beef", "Egg"],
        calorie: 10,
        price: mongoose.Types.Decimal128.fromString("11.99"),
        carbs: 30,
        fat: 20,
        protein: 20,
        restaurantName: "Korean BBQ",
        deliveryTime: 45,
        category: ["Korean"],
        tags: ["Healthy", "Vegetarian"],
        countInStock: 50
      }
]
  

  
  
  
