"use client";
import React from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

const Filters = () => {
  const router = useRouter();
  const query = useSearchParams();
  const pathname = usePathname();

  // Filter options
  const categories = [
    "all",
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelry",
  ];

  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
  ];

  const sortBy = (query.get("sortBy") as string) || "featured";

  const minPrice = query.get("minPrice")
    ? parseInt(query.get("minPrice") as string)
    : 0;
  const maxPrice = query.get("maxPrice")
    ? parseInt(query.get("maxPrice") as string)
    : 1000;
  const priceRange = [minPrice, maxPrice];
  const category = (query.get("category") as string) || "all";

  // Update the query params when the filter or sort changes
  const updateQueryParams = ({
    sortBy: _sortBy,
    minPrice: _minPrice,
    maxPrice: _maxPrice,
    category: _category,
  }: any) => {
    const sortByValue = _sortBy || sortBy;
    const minPriceValue = _minPrice || minPrice;
    const maxPriceValue = _maxPrice || maxPrice;
    const categoryValue = _category || category;
    const params = {
      category: categoryValue !== "all" ? categoryValue : undefined,
      sortBy: sortByValue !== "featured" ? sortBy : undefined,
      minPrice: minPriceValue !== 0 ? minPriceValue : undefined,
      maxPrice: maxPriceValue !== 1000 ? maxPriceValue : undefined,
    };

    // Remove undefined params from the query object
    const queryParams = Object.fromEntries(
      Object.entries(params).filter(([_, value]) => value !== undefined),
    );
    const updatedSearchParams = new URLSearchParams(queryParams.toString())
    // Update the query parameters in the URL without a page reload
    router.push(pathname + "?" + updatedSearchParams.toString())
  };

  // Initialize filter and sort values based on query parameters

  const setSortBy = (sortBy: string) => {
    updateQueryParams({ sortBy });
  };

  const setPriceRange = ([minPrice, maxPrice]: [number, number]) => {
    updateQueryParams({ minPrice, maxPrice });
  };
  const setCategory = (category: string) => {
    updateQueryParams({ category });
  };

  return (
    <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      {/* Mobile Filter Button */}
      <div className="block w-full sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>
                Narrow down your product search
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-6 py-4">
              {/* Mobile Category Filter */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Category
                </label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Mobile Price Range Filter */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <Slider
                  min={0}
                  max={1000}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mt-2"
                />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters */}
      <div className="hidden items-center gap-4 sm:flex">
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="w-[200px]">
          <label className="mb-2 block text-sm font-medium">
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </label>
          <Slider
            min={0}
            max={1000}
            step={10}
            value={priceRange}
            onValueChange={setPriceRange}
            className="mt-2"
          />
        </div>
      </div>

      {/* Sort Dropdown */}
      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export { Filters };
