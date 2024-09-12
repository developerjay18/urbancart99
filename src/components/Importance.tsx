import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Zap,
  Gift,
  RefreshCcw,
  Headphones,
  Truck,
} from "lucide-react";

export default function Importance() {
  const benefits = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
      title: "Quality Guaranteed",
      description: "All products are verified for quality and authenticity",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Fast Delivery",
      description: "Get your products quickly with our expedited shipping",
    },
    {
      icon: <Gift className="h-8 w-8 text-red-600" />,
      title: "Exclusive Deals",
      description:
        "Access to special offers and discounts for our loyal customers",
    },
    {
      icon: <RefreshCcw className="h-8 w-8 text-green-600" />,
      title: "Easy Returns",
      description: "Hassle-free 30-day return policy for your peace of mind",
    },
    {
      icon: <Headphones className="h-8 w-8 text-purple-600" />,
      title: "24/7 Support",
      description: "Our customer service team is always here to help you",
    },
    {
      icon: <Truck className="h-8 w-8 text-indigo-600" />,
      title: "Free Shipping",
      description: "Enjoy free shipping on orders over $50",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-100 to-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Why Choose Our Store?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference of shopping with us. We&apos;re committed to
            providing you with the best products, service, and overall
            experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-xl font-semibold ml-4 text-gray-800">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105"
          >
            Start Shopping Now
          </Button>
        </div>
        <div className="mt-16 bg-gray-50 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between shadow-md">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              Join Our Community
            </h3>
            <p className="text-gray-600">
              Get early access to new products, exclusive offers, and more!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Badge
              variant="secondary"
              className="text-sm py-2 px-4 bg-blue-100 text-blue-800"
            >
              10,000+ Happy Customers
            </Badge>
            <Badge
              variant="secondary"
              className="text-sm py-2 px-4 bg-green-100 text-green-800"
            >
              4.9/5 Average Rating
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
