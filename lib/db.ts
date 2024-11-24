import { sql } from "@vercel/postgres";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category_id: string;
  inventory: number;
  created_at: Date;
  updated_at: Date;
};

export type Category = {
  id: string;
  name: string;
  description: string | null;
  created_at: Date;
  updated_at: Date;
};

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const { rows } = await sql<Product>`
      SELECT * FROM products 
      ORDER BY created_at DESC 
      LIMIT 8
    `;
    return rows;
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }
}

export async function getProduct(id: string): Promise<Product | null> {
  try {
    const { rows } = await sql<Product>`
      SELECT * FROM products 
      WHERE id = ${id}
    `;
    return rows[0] || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export async function getProductsByCategory(
  categoryId: string
): Promise<Product[]> {
  try {
    const { rows } = await sql<Product>`
      SELECT * FROM products 
      WHERE category_id = ${categoryId}
    `;
    return rows;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
}
