"use client"

import { useGlobalContext } from "../context/GlobalContext";

export default function Home() {

  const { isAuthenticated } = useGlobalContext();
  // console.log("Home - isAuthenticated:", isAuthenticated);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      Hello
    </div>
  );
}
