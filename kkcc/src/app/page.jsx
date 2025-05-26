import Image from "next/image";
import Link from "next/link";
import HomeHeroText from "./homeHeroText";
import hero from "@/app/assets/hero-image.png";
import { MenuIcon } from "lucide-react";
import classroomLogo from "@/app/assets/logo.svg";

export default function Home() {
  return (
    <div className="h-svh flex flex-col font-sans bg-[#F1EFE7] text-black">
      {/* Header */}
      <header className="px-6 py-6 max-w-[100rem] w-full mx-auto flex flex-row justify-between items-center">
        <div className="w-32 h-10">
          <Image src={classroomLogo} alt={"Logo"} />
        </div>
        <MenuIcon className="md:hidden" />
        <nav className="gap-4 hidden md:flex [&>*]:w-42">
          <Link href={"/login"}>
            <button className="text-black font-semibold px-4 py-2 rounded-xl h-12 border-2 hover:bg-black hover:text-white w-full flex items-center justify-center">
              Login
            </button>
          </Link>
          <Link href={"/signup1"}>
            <button className="bg-[#FF637A] text-white px-4 py-2 rounded-xl h-12 font-semibold hover:bg-pink-500 w-full flex items-center justify-center">
              Sign up
            </button>
          </Link>
        </nav>
      </header>

      <main className="grow flex flex-col lg:flex-row-reverse sm:max-w-[40rem] sm:mx-auto lg:max-w-[100rem] lg:w-full lg:px-8">
        <div className="grow lg:grow shrink basis-0 relative lg:max-w-[50%]">
          <Image
            src={hero}
            alt="Hero image"
            fill
            className={"object-contain lg:p-8 "}
          />
        </div>
        <div className="lg:grow shrink basis-0 p-6 lg:max-w-[50%] lg:h-min lg:my-auto">
          <HomeHeroText />
          <p className="mt-6 lg:mt-12 text-black/60 sm:text-center lg:text-xl lg:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
            saepe animi. At totam saepe unde consectetur molestiae enim maxime
            laboriosam!
          </p>
          <ul className="list-disc px-8 mt-4 text-black/60 w-fit sm:mx-auto lg:text-xl lg:mx-0">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
          <div className="flex items-center justify-center [&>*]:grow [&>*]:shrink [&>*]:basis-0 [&>*]:max-w-42 mt-6 lg:mt-10 lg:justify-start xl:mt-18 gap-4">
            <Link href={"/login"}>
              <button className="text-black font-semibold px-4 py-2 rounded-xl h-12 border-2 hover:bg-black hover:text-white w-full flex items-center justify-center">
                Login
              </button>
            </Link>
            <Link href={"/signup1"}>
              <button className="bg-[#FF637A] text-white px-4 py-2 rounded-xl h-12 font-semibold hover:bg-pink-500 w-full flex items-center justify-center">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-black text-white p-6 text-center text-sm">
        <p className="lg:w-fit">
          © {new Date().getFullYear()} KKC Classroom. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
