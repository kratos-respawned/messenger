"use client";
import { SessionProvider } from "next-auth/react";

function Providers({ children, session }: any) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default Providers;
