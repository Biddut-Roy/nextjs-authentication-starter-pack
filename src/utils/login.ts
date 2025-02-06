"use server";

import { FormValues } from "@/app/login/page";

export const LoginUser = async (data: FormValues) => {
  const response = await fetch(`${process.env.SERVER_LINK}/login`, {
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

  throw new Error("Failed to login user");
};
