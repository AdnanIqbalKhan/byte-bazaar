export type TRating = {
  rate: number;
  count: number;
};

export type TProduct = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  rating: TRating;

  category: string;
};

export type TCategory = {
  id: 1;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

export async function getFeaturedProducts(): Promise<TProduct[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=4").then(
      (res) => res.json(),
    );
    return res;
  } catch (error) {
    console.error("Error fetching featured products:", error);
  }
  return [];
}

export async function getProduct(id: string): Promise<TProduct | null> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`).then(
      (res) => res.json(),
    );
    return res;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export async function getProductsByCategory(
  categoryId: string,
): Promise<TProduct[]> {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${categoryId}`,
    ).then((res) => res.json());
    return res;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
}
export async function getAllCategories(): Promise<string[]> {
  try {
    const res = (
      await fetch("https://fakestoreapi.com/products/categories").then((res) =>
        res.json(),
      )
    ).map((category: string) => encodeURIComponent(category));
    return res;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
