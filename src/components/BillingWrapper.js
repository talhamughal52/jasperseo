"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";

const BillingWrapper = ({ children }) => {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      toast.success("Subscription Activated Successfully");
    } else if (query.get("canceled")) {
      toast.success("Subscription Canceled Successfully");
    }
  }, []);
  return children;
};

export default BillingWrapper;
