"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Emily Johnson",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      date: "2023-05-15",
      title: "Absolutely love my new smartwatch!",
      content:
        "I've been using the Premium Smartwatch for a month now, and I'm thoroughly impressed. The battery life is exceptional, and the fitness tracking features are spot-on. It's become an essential part of my daily routine.",
      product: "Premium Smartwatch",
      verified: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4,
      date: "2023-06-02",
      title: "Great sound quality, minor connectivity issues",
      content:
        "The Wireless Earbuds deliver impressive audio quality, especially for the price point. The noise cancellation works well in most environments. I did experience occasional Bluetooth dropouts, but it's not a deal-breaker. Overall, I'm satisfied with my purchase.",
      product: "Wireless Earbuds",
      verified: true,
    },
    {
      id: 3,
      name: "Sarah Thompson",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      date: "2023-06-20",
      title: "Perfect for my fitness journey",
      content:
        "This Fitness Tracker has been a game-changer for my workout routine. It's comfortable to wear, easy to use, and provides accurate data. The sleep tracking feature has been particularly helpful in improving my overall health habits.",
      product: "Fitness Tracker",
      verified: true,
    },
    {
      id: 4,
      name: "David Rodriguez",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4,
      date: "2023-07-05",
      title: "Reliable power on the go",
      content:
        "I bought the Portable Charger for a camping trip, and it didn't disappoint. It charged my phone multiple times and still had juice left. The only reason I'm not giving it 5 stars is that it's a bit bulkier than I expected. But in terms of performance, it's excellent.",
      product: "Portable Charger",
      verified: true,
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          What Our Customers Say
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Don't just take our word for it. Here's what our satisfied customers
          have to say about their experiences with our products.
        </p>

        <div className="relative">
          <Card className="bg-white shadow-xl rounded-lg overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex flex-col items-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage
                      src={reviews[currentReview].avatar}
                      alt={reviews[currentReview].name}
                    />
                    <AvatarFallback>
                      {reviews[currentReview].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {reviews[currentReview].name}
                  </h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < reviews[currentReview].rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                   "89.89.89"
                  </p>
                  <Badge variant="secondary" className="mb-4">
                    {reviews[currentReview].product}
                  </Badge>
                  {reviews[currentReview].verified && (
                    <Badge
                      variant="outline"
                      className="text-green-600 border-green-600"
                    >
                      Verified Purchase
                    </Badge>
                  )}
                </div>
                <div className="md:w-2/3">
                  <Quote className="h-12 w-12 text-gray-200 mb-4" />
                  <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                    {reviews[currentReview].title}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    {reviews[currentReview].content}
                  </p>
                  <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm" onClick={prevReview}>
                      <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                    </Button>
                    <div className="text-sm text-gray-500">
                      {currentReview + 1} of {reviews.length}
                    </div>
                    <Button variant="outline" size="sm" onClick={nextReview}>
                      Next <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className={`bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ${
                index === currentReview ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-10 h-10 mr-3">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h5 className="font-semibold text-gray-800">
                      {review.name}
                    </h5>
                    <p className="text-sm text-gray-500">
                      {new Date(review.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <h6 className="font-semibold text-gray-800 mb-2">
                  {review.title}
                </h6>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {review.content}
                </p>
                <Badge variant="secondary" className="text-xs">
                  {review.product}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105"
          >
            Read All Reviews
          </Button>
        </div>
      </div>
    </section>
  );
}
