import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Aside } from "@/components/Aside";




export default function Home() {
  return (
    <main>
      <div className="px-4 max-w-screen-2xl m-auto ">
        <Navbar />
        <div className="bg-gray-100 h-full">
          <Aside />
        </div>

      </div>

    </main>
  );
}
