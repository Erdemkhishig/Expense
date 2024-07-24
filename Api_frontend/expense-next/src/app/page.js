import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Aside } from "@/components/Aside";
import { Mainheader } from "@/components/Mainheader";




export default function Home() {
  return (
    <main>
      <div className="px-4 max-w-screen-2xl m-auto ">
        <Navbar />
        <div className="bg-gray-100 h-full flex py-8 gap-4 px-24">
          <Aside />
          <div className="ml-8 w-full"><Mainheader /></div>
        </div>

      </div>

    </main>
  );
}
