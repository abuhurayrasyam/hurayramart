"use server";

import { ObjectId } from "mongodb";
import mongodbConnect, { collectionNames } from "@/lib/mongodb";

export async function getProductById(id) {
  try {
    const db = await mongodbConnect(collectionNames.productsCollection);
    const product = await db.findOne({ _id: new ObjectId(id) });

    return JSON.parse(JSON.stringify(product));
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}