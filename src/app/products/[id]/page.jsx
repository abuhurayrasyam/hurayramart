"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProductById } from "@/actions/products/getProductById";
import { ShoppingCart } from "lucide-react";
import Loading from "@/components/Loading";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProductById(id);
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  if (!product)
    return (
      <Loading></Loading>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-50 py-16 px-4">
      <div className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-secondary)] py-20 text-center text-white shadow-lg mb-16 animate-gradient-x">
        <h1 className="text-6xl font-extrabold drop-shadow-md tracking-tight">
          {product.name}
        </h1>
        <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto">
          Premium quality you deserve ✨
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="relative group">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={product.image || "https://via.placeholder.com/600x400"}
              alt={product.name}
              className="w-full h-[400px] object-cover transform group-hover:scale-110 transition duration-500"
            />
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-10 border space-y-6">

          <div className="inline-block bg-[var(--color-accent)] text-white px-6 py-2 rounded-full text-lg font-bold shadow-md">
            ${product.price}
          </div>

          <h2 className="text-4xl font-bold text-[var(--color-secondary)]">
            {product.name}
          </h2>
          <p className="text-[var(--color-neutral)] leading-relaxed text-lg">
            {product.description}
          </p>


          <button className="flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-xl shadow-lg hover:bg-[var(--color-secondary)] hover:shadow-[0_0_15px_var(--color-primary)] transition-all duration-300">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;