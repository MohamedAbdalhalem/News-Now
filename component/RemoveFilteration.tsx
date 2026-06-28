"use client";
import { useEffect } from "react";
import Cookies from "js-cookie";
export default function RemoveFilteration() {
  useEffect(() => {
    return () => {
      Cookies.remove("timezone");
    };
  }, []);
  return <></>;
}
