"use server";

import { UserData } from "@/app/register/page";

export const registerUser = async (data: UserData) => {
  const response = await fetch(`${process.env.SERVER_LINK}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error("Failed to register user");
};
