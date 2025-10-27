"use client";
import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <main className="pt-16 sm:pt-20 md:pt-24">
        <Homepage />
      </main>
    </div>
  );
}
