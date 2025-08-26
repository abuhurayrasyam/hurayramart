"use server";

import mongodbConnect, { collectionNames } from "@/lib/mongodb";

export async function getProducts() {
  try {
    const db = await mongodbConnect(collectionNames.productsCollection);
    const products = await db.find({}).toArray();

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}