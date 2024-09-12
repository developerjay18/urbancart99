"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";

export default function Products() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      name: "Premium Smartwatch",
      price: 129.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 256,
      description:
        "Stay connected and track your fitness with our top-of-the-line smartwatch.",
      features: [
        "Heart rate monitor",
        "GPS tracking",
        "Water-resistant",
        "7-day battery life",
      ],
    },
    {
      name: "Wireless Earbuds",
      price: 79.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 189,
      description:
        "Immerse yourself in crystal-clear audio with our comfortable wireless earbuds.",
      features: [
        "Active noise cancellation",
        "Bluetooth 5.0",
        "30-hour battery life",
        "Touch controls",
      ],
    },
    {
      name: "Fitness Tracker",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      reviews: 312,
      description:
        "Achieve your fitness goals with our sleek and feature-packed fitness tracker.",
      features: [
        "Step counter",
        "Sleep monitoring",
        "14+ exercise modes",
        "Smartphone notifications",
      ],
    },
    {
      name: "Portable Charger",
      price: 39.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 428,
      description:
        "Never run out of battery with our high-capacity, fast-charging portable charger.",
      features: [
        "20,000mAh capacity",
        "Fast charging",
        "Dual USB ports",
        "Compact design",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Our Featured Products
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Discover our carefully curated selection of top-quality tech gadgets
          designed to enhance your daily life.
        </p>
        <Tabs defaultValue="grid" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>
          <TabsContent value="grid" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden group"
                  onMouseEnter={() => setHoveredProduct(index)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                        <Heart className="h-5 w-5 text-red-500" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({product.reviews} reviews)
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-800">
                      ${product.price.toFixed(2)}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 bg-gray-50">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                    </Button>
                  </CardFooter>
                  {hoveredProduct === index && (
                    <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center p-4">
                        <h4 className="text-lg font-semibold mb-2">
                          {product.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                          {product.description}
                        </p>
                        <ul className="text-sm text-gray-700 mb-4">
                          {product.features.map((feature, i) => (
                            <li key={i} className="mb-1">
                              • {feature}
                            </li>
                          ))}
                        </ul>
                        <Button variant="outline" className="mr-2">
                          <Eye className="mr-2 h-4 w-4" /> Quick View
                        </Button>
                        <Button>
                          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                        </Button>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="list" className="mt-6">
            <div className="space-y-6">
              {products.map((product, index) => (
                <Card
                  key={index}
                  className="flex flex-col md:flex-row overflow-hidden"
                >
                  <div className="md:w-1/3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-semibold text-gray-800">
                          {product.name}
                        </h3>
                        <Badge variant="secondary" className="text-sm">
                          ${product.price.toFixed(2)}
                        </Badge>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="flex items-center mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          ({product.reviews} reviews)
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <ul className="text-sm text-gray-700 mb-4">
                        {product.features.map((feature, i) => (
                          <li key={i} className="mb-1">
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                      </Button>
                      <Button variant="outline">
                        <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
