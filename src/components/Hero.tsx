import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Package, Truck } from "lucide-react";

export default function Hero() {
  const products = [
    {
      name: "Premium Smartwatch",
      price: "$129.99",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Wireless Earbuds",
      price: "$79.99",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Fitness Tracker",
      price: "$49.99",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Portable Charger",
      price: "$39.99",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-purple-700 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Discover the Latest Tech Gadgets at Unbeatable Prices
            </h1>
            <p className="text-xl md:text-2xl">
              Elevate your lifestyle with our curated selection of premium
              products.
            </p>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
            >
              Shop Now
            </Button>
            <div className="flex space-x-4 pt-4">
              <Badge
                variant="secondary"
                className="flex items-center space-x-1"
              >
                <Star className="h-4 w-4" />
                <span>Top-rated</span>
              </Badge>
              <Badge
                variant="secondary"
                className="flex items-center space-x-1"
              >
                <TrendingUp className="h-4 w-4" />
                <span>Best sellers</span>
              </Badge>
              <Badge
                variant="secondary"
                className="flex items-center space-x-1"
              >
                <Package className="h-4 w-4" />
                <span>Quality assured</span>
              </Badge>
              <Badge
                variant="secondary"
                className="flex items-center space-x-1"
              >
                <Truck className="h-4 w-4" />
                <span>Fast shipping</span>
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-yellow-400 font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4">Get Exclusive Deals</h2>
          <form className="flex space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow"
            />
            <Button type="submit" className="bg-green-500 hover:bg-green-600">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
