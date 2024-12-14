import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TProduct } from "@/lib/db";
import Image from "next/image";
type ProductCardProps = {
  product: TProduct;
};

// Generate stars based on rating
const renderStars = (rate: number) => {
  return [...Array(5)].map((_, index) => (
    <Star
      key={"st" + index}
      size={16}
      className={`${
        index < Math.floor(rate)
          ? "fill-yellow-400 text-yellow-400"
          : "fill-gray-200 text-gray-200"
      }`}
    />
  ));
};
const ProductCard = ({ product }: ProductCardProps) => {
  const { title, price, description, category, image, rating } = product;

  // Format price to 2 decimal places
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return (
    <Card className="group max-w-sm overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            fill
            src={image}
            alt={title}
            className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      <CardContent className="p-4">
        {/* Category Badge */}
        <Badge variant="secondary" className="mb-2 capitalize">
          {category}
        </Badge>

        {/* Title */}
        <h3 className="mb-2 line-clamp-2 h-14 text-lg font-semibold">
          {title}
        </h3>

        {/* Description */}
        <p className="h-18 mb-4 line-clamp-3 text-sm text-muted-foreground">
          {description}
        </p>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-2">
          <div className="flex">{renderStars(rating.rate)}</div>
          <span className="text-sm text-muted-foreground">
            ({rating.count} reviews)
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between p-4 pt-0">
        {/* Price */}
        <div className="text-lg font-bold text-primary">{formattedPrice}</div>

        {/* Add to Cart Button */}
        <Button variant="default" size="sm" className="flex items-center gap-2">
          <ShoppingCart size={16} />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export { ProductCard };
