"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function page() {
  const searchParam = useSearchParams();

  const idProduct = searchParam.get("id");
  const nameProduct = searchParam.get("name");
  console.log("11111111", idProduct);
  console.log("222222222", nameProduct);

  return <div>Trang danh sách sản phẩm</div>;
}
