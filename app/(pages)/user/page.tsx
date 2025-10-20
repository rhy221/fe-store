"use client";
import { useGetMeQuery } from "@/app/queries/useAuth";
import React from "react";

export default function UserPage() {
  const { data: userData } = useGetMeQuery();
  const user = userData;
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
