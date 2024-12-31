"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="flex justify-center items-">
        <div>im a project</div>

      </div>
      <div className="flex justify-center">
        <button className="border-2 border-black rounded-lg" onClick={() => { setCount(count + 1) }}>click me {count}
        </button>
      </div>

    </>


  );
}
