"use client";
import { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";

const AuthWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return children;
};

export default AuthWrapper;
