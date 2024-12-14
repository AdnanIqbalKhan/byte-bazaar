import React from "react";
import { ProductCard } from "@/components/product-card";
import { getAllCategories, getProductsByCategory } from "@/lib/db";
import { Filters } from "@/components/filters";

export default async function CategoryPage({
  params,
}: Readonly<{
  params: { cid: string };
}>) {
  const { cid } = params;

  const products = await getProductsByCategory(cid);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Shop All Products</h1>
          <p className="mt-2 text-muted-foreground">
            Find the perfect item from our carefully curated collection
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Filters />
        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

// This function is required for static export to know the dynamic paths to pre-render
export async function generateStaticParams() {
  // In a real app, this could be fetched from a CMS, database, or external API
  const categories = await getAllCategories(); // Example categories
  return categories.map((cid) => ({
    cid, // This will create the path /category/electronics/page, /category/fashion/page, etc.
  }));
}
