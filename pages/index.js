import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Layout from "../components/Layout/Layout";

export default function Component() {
  const { data: session } = useSession();
  console.log({ session });
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-gray-300 text-black gap-1 rounded-lg overflow-hidden">
          <Image src={session?.user?.image} alt="" className="w-6 h-6 " />
          <span className="px-2">{session?.user?.name}</span>
        </div>

        <button type="button" onClick={signOut}>
          Sign out
        </button>
      </div>
    </Layout>
  );
}
