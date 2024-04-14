"use client";
import { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { makeAdmin } from "@/store/adminSlice";
import { useDispatch } from "react-redux";

const AuthWrapper = ({ children, isAdmin = false }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  if (isAdmin) {
    dispatch(makeAdmin(isAdmin));
  }
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return children;
};

export default AuthWrapper;
