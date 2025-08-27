"use server";
import mongodbConnect, { collectionNames } from "@/lib/mongodb";

export async function addProduct(payload) {
  const { name, description, price, image, email } = payload;

  if (!name || !description || !price || !image) {
    return { error: "Missing required fields" };
  }

  try {
    const db = await mongodbConnect(collectionNames.productsCollection);

    await db.insertOne({
      name,
      description,
      price: parseFloat(price),
      image,
      email,
      createdAt: new Date(),
    });

    return { message: "Product added successfully" };
  } catch (error) {
    return { error: error.message };
  }
}