import { getProviders } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";

async function Signin() {
  const providers = await getProviders();
  return (
    <div className="grid justify-center h-full">
      <div>
        <Image
          className="rounded-full mx-2 object-cover my-5"
          width={300}
          height={300}
          src="https://avatars.dicebear.com/api/identicon/narutooo.svg"
          alt="profile picture"
        />
      </div>
      <SignInComponent providers={providers} />
    </div>
  );
}

export default Signin;
