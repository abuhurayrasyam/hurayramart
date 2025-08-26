"use client";
import React, { useState } from "react";
import { addProduct } from "@/actions/products/addProduct";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const { data: session } = useSession();
  const [form, setForm] = useState({ name: "", description: "", price: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session?.user?.email) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "⚠️ Please login to add products",
        confirmButtonColor: "var(--color-primary)",
      });
      return;
    }

    setLoading(true);
    const res = await addProduct({
      ...form,
      email: session.user.email,
    });
    setLoading(false);

    if (res.error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: res.error,
        confirmButtonColor: "var(--color-secondary)",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Product Added Successfully",
        text: res.message,
        confirmButtonColor: "var(--color-primary)",
      });
      setForm({ name: "", description: "", price: "" });
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12 bg-white rounded-2xl shadow-xl p-8 border">
      <h2 className="text-3xl font-bold text-center mb-8 text-accent">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Product Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter product name"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter description"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Price</label>
          <input
            type="number"
            step="0.01"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] transition duration-300"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;