"use client";
import { signOut } from "next-auth/react";
function LogoutButton() {
  return (
    <button
      className="bg-[#7cb342] hover:bg-[#50742a] text-white font-bold py-2 px-4 rounded"
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
