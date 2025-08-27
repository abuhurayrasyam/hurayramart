import Link from "next/link";
import { getProducts } from "@/actions/products/getProducts";

export default async function ProductHighlights() {
  const products = await getProducts();

  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute -top-32 -left-32 w-[30rem] h-[30rem] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"
        style={{ backgroundColor: "var(--color-primary)" }}
      />
      <div
        className="absolute bottom-0 -right-32 w-[30rem] h-[30rem] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"
        style={{ backgroundColor: "var(--color-accent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
          style={{ color: "var(--color-secondary)" }}
        >
          Featured Products
        </h2>
        <p
          className="text-lg mb-16 max-w-2xl mx-auto"
          style={{ color: "var(--color-neutral)" }}
        >
          Hand-picked items our customers can’t stop talking about 💎
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-300 group"
              >

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 opacity-0 group-hover:opacity-100 blur-2xl transition"></div>

                <div className="relative h-44 flex items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 mb-6 overflow-hidden">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover rounded-xl group-hover:scale-110 transition"
                    />
                  ) : (
                    <span className="text-6xl">📦</span>
                  )}
                </div>

                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-sm mb-4 line-clamp-3"
                  style={{ color: "var(--color-neutral)" }}
                >
                  {product.description}
                </p>
                <p
                  className="text-xl font-extrabold mb-6"
                  style={{ color: "var(--color-primary)" }}
                >
                  ${product.price}
                </p>

                <Link
                  href={`/products/${product._id}`}
                  className="w-full px-5 py-3 rounded-xl font-semibold shadow-md transition text-white bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] hover:opacity-90"
                >
                  View Details →
                </Link>
              </div>
            ))
          ) : (
            <p style={{ color: "var(--color-neutral)" }}>
              No products available.
            </p>
          )}
        </div>

        <div className="mt-20">
          <Link
            href="/products"
            className="px-10 py-4 rounded-2xl font-bold shadow-xl transition text-white hover:scale-110 inline-block bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)]"
          >
            See All Products
          </Link>
        </div>
      </div>
    </section>
  );
}