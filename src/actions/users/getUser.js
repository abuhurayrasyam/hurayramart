"use server";
import mongodbConnect, { collectionNames } from "@/lib/mongodb";

export async function getUserByEmail(email) {
  try {
    const db = await mongodbConnect(collectionNames.usersCollection);
    const user = await db.findOne({ email });

    if (!user) return null;

    return {
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt ? new Date(user.createdAt).toLocaleString() : "",
      lastLoginAt: user.lastLoginAt ? new Date(user.lastLoginAt).toLocaleString() : "",
    };
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}