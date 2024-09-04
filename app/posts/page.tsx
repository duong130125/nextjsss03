"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const [inputValue, setInputValue] = useState("");
  const route = useRouter();
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleClick = () => {
    console.log("5555555", inputValue);
    route.push(`/posts?search=${encodeURIComponent(inputValue)}`);
  };
  return (
    <div>
      <input type="text" onChange={handleChangeInput} />
      <button onClick={handleClick}>Tìm kiếm</button>
    </div>
  );
}
