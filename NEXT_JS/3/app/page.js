import React, { Children } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container bg-pink-300 relative">
        <Image classNam="mx-auto object-cover" width={1000} height={1000} className="" src="zenitsu-agatsuma-5120x2880-20236.jpg" alt="picture of Zenitsu" />
      </div>
    </>
  );
}
