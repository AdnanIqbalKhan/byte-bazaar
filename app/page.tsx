import { ProductCard } from "@/components/product-card";
import { getFeaturedProducts } from "@/lib/db";
import Image from "next/image";

export default async function Home() {
  const products = await getFeaturedProducts();

  return (
    <div className="container px-4 py-8 mx-auto">
      <section className="mb-12">
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Hero"
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
            <div className="max-w-3xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Discover Your Style
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Shop the latest trends in fashion with our curated collection
              </p>
              <a
                href="/products"
                className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative h-[300px] rounded-lg overflow-hidden group">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
          <Image
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
            alt="Women's Collection"
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Women&apos;s Collection
              </h3>
              <a
                href="/category/women"
                className="inline-block bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-white/90 transition"
              >
                Shop Women
              </a>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden group">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
          <Image
            src="https://images.unsplash.com/photo-1488161628813-04466f872be2"
            alt="Men's Collection"
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Men&apos;s Collection
              </h3>
              <a
                href="/category/men"
                className="inline-block bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-white/90 transition"
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
