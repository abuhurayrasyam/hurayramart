"use client";
import React, { useEffect, useState } from "react";
import { getProducts } from "@/actions/products/getProducts";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import Loading from "@/components/Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-6">
      <h1 className="text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-transparent bg-clip-text drop-shadow-md">
        Our Products
      </h1>

      {loading ? (
        <Loading></Loading>
      ) : products.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center mt-20">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No Products"
            className="w-40 mb-6 opacity-80"
          />
          <p className="text-2xl font-semibold text-gray-600">
            No products found 🛒
          </p>
          <p className="text-gray-400 mt-2">
            Please check back later.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product._id}
              className="group relative bg-white/70 backdrop-blur-xl border rounded-2xl shadow-xl p-6 transition transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src={product.image || "https://via.placeholder.com/400x250"}
                  alt={product.name}
                  className="w-full h-52 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute top-4 right-4 bg-[var(--color-accent)] text-white font-bold px-4 py-1 rounded-full shadow-lg text-sm">
                ${product.price}
              </div>

              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 line-clamp-3 mb-6">
                {product.description}
              </p>

              <Link
                href={`/products/${product._id}`}
                className="flex items-center justify-center gap-2 w-full bg-[var(--color-primary)] text-white font-semibold py-3 rounded-xl shadow-md hover:bg-[var(--color-secondary)] hover:shadow-[0_0_15px_var(--color-primary)] transition-all duration-300"
              >
                <ShoppingBag className="w-5 h-5" />
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;