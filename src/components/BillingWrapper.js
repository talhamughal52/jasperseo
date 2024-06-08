"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";

const BillingWrapper = ({ children }) => {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      toast.success("Subscription Activated Successfully");
    } else if (query.get("canceled")) {
      toast.error("Subscription Canceled Successfully");
    } else if (query.get("nobalance")) {
      toast.error(
        "You have no any available Content Editor ! Please Subscribe first"
      );
    }
  }, []);
  return children;
};

export default BillingWrapper;
