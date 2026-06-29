"use client";
import { useEffect } from "react";
import Cookies from "js-cookie";

// define a client componet for remove any filterion params form the category if the component enert unmounting phase
export default function RemoveFilteration() {
  useEffect(() => {
    return () => {
      Cookies.remove("timezone");
    };
  }, []);
  return <></>;
}
