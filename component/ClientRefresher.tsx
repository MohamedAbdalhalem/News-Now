"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ClientRefresher() {
  const router = useRouter();
  useEffect(() => {
    const id = setInterval(() => router.refresh(), 20000);
    return () => clearInterval(id);
  }, [router]);
  return null;
}