"use server";
import mongodbConnect, { collectionNames } from "@/lib/mongodb";

export async function addProduct(payload) {
  const { name, description, price, email } = payload;

  if (!name || !description || !price) {
    return { error: "Missing required fields" };
  }

  try {
    const db = await mongodbConnect(collectionNames.productsCollection);

    await db.insertOne({
      name,
      description,
      price: parseFloat(price),
      email,
      createdAt: new Date(),
    });

    return { message: "Product added successfully" };
  } catch (error) {
    return { error: error.message };
  }
}