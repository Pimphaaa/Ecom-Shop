"use client";

import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  products: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[current];
  const price = currentProduct.default_price as Stripe.Price;

  return (
    <Card className="relative overflow-hidden rounded-lg shadow-md border-gray-300">
      <CardContent className="flex flex-row items-center">
        {/* Product Image (Left Side) */}
        {currentProduct.images && currentProduct.images[0] && (
          <div className="relative w-1/2 h-80">
            <Image
              src={currentProduct.images[0]}
              alt={currentProduct.name}
              layout="fill"
              objectFit="contain"
              className="transition-opacity duration-500 ease-in-out"
            />
          </div>
        )}
        
        {/* Product Info (Right Side) */}
        <div className="w-1/2 flex flex-col justify-center p-6 bg-white">
          <CardTitle className="text-2xl font-bold text-gray-900">
            {currentProduct.name}
          </CardTitle>
          {price && price.unit_amount && (
            <p className="text-xl text-gray-700 font-medium">
              ${(price.unit_amount / 100).toFixed(2)}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
