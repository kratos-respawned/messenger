import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { unstable_getServerSession } from "next-auth/next";
async function Header() {
  const session = await unstable_getServerSession();
  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2 items-center">
          <Image
            className="rounded-full mx-2 object-contain"
            src={session.user?.image!}
            width={40}
            height={40}
            alt="user Image"
          />
          <div>
            <p className="text-[#7cb342] ">Logged in as : </p>
            <p className="font-bold text-lg text-black dark:text-white">
              {session.user?.name}
            </p>
          </div>
        </div>
        <LogoutButton />
      </header>
    );
  return (
    <header className="stick top-0 z-50 bg-white dark:bg-slate-900 flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image
            src="https://avatars.dicebear.com/api/identicon/narutooo.svg"
            height={10}
            width={50}
            alt="logo"
          />
          <p className="text-[#7cb342]">Welcome to Arcane Chatroom</p>
        </div>
        <Link
          href="/auth/signin"
          className="bg-[#7cb342] hover:bg-[#50742a] text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}

export default Header;
