import { BackgroundBeams } from "@/components/background-beams";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col items-start justify-center  bg-secondary-blue p-2">
      <BackgroundBeams />
      <div className="relative w-full flex items-center justify-center">
        <Image
          className="z-0 opacity-85 object-contain"
          src="/logo.svg"
          alt="illustration"
          width={500}
          height={500}
        />
        <div
          className=" absolute h-24 w-full border-y 
         bg-black z-10 opacity-80
        border-cyan-900 text-white lg:text-6xl font-bold text-center flex  justify-center items-center"
        >
          We Are Web Enthusiasts` Club NITK
        </div>

        {/* <div className="bg-transparent  w-screen h-screen absolute z-auto grid grid-cols-4 grid-rows-4 gap-2">
        <div className="bg-transparent p-4 text-white  col-span-2  row-span-1 row-start-2 border border-cyan-900">
          slflsdkjf
        </div> */}

        {/* </div> */}
      </div>
    </main>
  );
}
