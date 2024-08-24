import Image from "next/image";
import * as React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

function NavBar() {
  return (
    <div className="flex gap-5 justify-between items-center px-7 py-1 font-bold border-b border-solid dark:border-none border-zinc-100 leading-[154.5%] max-md:flex-wrap max-md:px-5">
      <div className="flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700">
        <Image
          src="/logo.png"
          alt="LOGO"
          sizes="50vw"
          style={{
            width: "30px",
            height: "30px",
          }}
          width={0}
          height={0}
        />
        <span>Capital Trades.</span>
      </div>
      <ul className="gap-5 dark:text-white justify-between self-stretch my-auto text-sm leading-5 text-neutral-700 max-md:flex-wrap max-md:max-w-full font-normal hidden md:flex">
        <li>
          <Link href="/">Home</Link>
        </li>
        {/* <li>
          <Link href="/site/pricing">Pricing</Link>
        </li> */}
        <li>
          <Link href="#about">About</Link>
        </li>
      
        <li>
          <Link href="#faq">Faq</Link>
        </li>
      </ul>

      <Link
        href="/dashboard"
        className="bg-orange hidden md:flex px-4 py-2 rounded-sm text-white"
      >
        Create Account
      </Link>

      <div className=" flex  md:hidden ">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent className="">
            <SheetHeader className="p-5">
              <Link href="/">Home</Link>

              
              <Link href="/auth/sign-up">Sign Up</Link>
              <Link href="/auth/sign-in">Sign In</Link>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default NavBar;
