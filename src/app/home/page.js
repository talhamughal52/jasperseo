import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <span>Home page</span>
      <br />
      <span>You are Login</span>
      <br />
      <Link href="/profile">Go to Profile</Link>
      <br />
      <Link href="/api/auth/logout">Logout</Link>
    </div>
  );
}
