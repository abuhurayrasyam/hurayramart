"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getUserByEmail } from "@/actions/users/getUser";

const MyProfile = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (session?.user?.email) {
      getUserByEmail(session.user.email).then((res) => setUser(res));
    }
  }, [session]);

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-600">
          Please login to view your profile.
        </p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-500">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex rounded-2xl items-center justify-center bg-gradient-to-br from-[var(--color-primary)] via-white to-[var(--color-accent)] px-4">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-gray-200">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white text-3xl font-bold shadow-lg mb-4">
            {user.name[0]}
          </div>
          <h2
            className="text-3xl font-extrabold mb-1"
            style={{ color: "var(--color-secondary)" }}
          >
            {user.name}
          </h2>
          <p className="text-gray-500">{user.email}</p>
          <span className="mt-2 px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
            {user.role.toUpperCase()}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">User ID:</span>
            <span className="text-gray-800">{user._id}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">Created At:</span>
            <span className="text-gray-800">{user.createdAt}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Last Login:</span>
            <span className="text-gray-800">{user.lastLoginAt}</span>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-5 py-2 rounded-xl bg-[var(--color-primary)] text-white font-semibold shadow hover:scale-105 transition">
            Edit Profile
          </button>
          <button className="px-5 py-2 rounded-xl bg-[var(--color-accent)] text-white font-semibold shadow hover:scale-105 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;