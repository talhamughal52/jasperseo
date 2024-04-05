import Link from "next/link";
import React from "react";
import { currentUser } from "@clerk/nextjs";

export default async function page() {
  const user = await currentUser();
  const email = user.emailAddresses[0].emailAddress;
  return (
    <div>
      <span>Home page</span>
      <br />
      <span>You are Login as {email}</span>
      <br />
    </div>
  );
}
