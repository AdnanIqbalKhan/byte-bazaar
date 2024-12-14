import { ProductCard } from "@/components/product-card";
import { getFeaturedProducts } from "@/lib/db";
import Image from "next/image";

export default async function Home() {
  const products = await getFeaturedProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="relative h-[500px] overflow-hidden rounded-lg">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 to-black/50" />
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Hero"
            fill
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
            <div className="max-w-3xl px-4">
              <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
                Discover Your Style
              </h1>
              <p className="mb-8 text-lg text-white/90 md:text-xl">
                Shop the latest trends in fashion with our curated collection
              </p>
              <a
                href="/products"
                className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:bg-white/90"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-8 text-3xl font-bold">Featured Products</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mb-12 grid gap-8 md:grid-cols-2">
        <div className="group relative h-[300px] overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/50" />
          <Image
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
            alt="Women's Collection"
            fill
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold text-white">
                Women&apos;s Collection
              </h3>
              <a
                href="/category/women's clothing"
                className="inline-block rounded-full bg-white px-6 py-2 font-semibold text-black transition hover:bg-white/90"
              >
                Shop Women
              </a>
            </div>
          </div>
        </div>
        <div className="group relative h-[300px] overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/50" />
          <Image
            src="https://images.unsplash.com/photo-1488161628813-04466f872be2"
            alt="Men's Collection"
            fill
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold text-white">
                Men&apos;s Collection
              </h3>
              <a
                href="/category/men's clothing"
                className="inline-block rounded-full bg-white px-6 py-2 font-semibold text-black transition hover:bg-white/90"
              >
                Shop Men
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
