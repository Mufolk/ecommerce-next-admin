import React from "react";
import { useSession, signIn } from "next-auth/react";
import Nav from "../Nav/Nav";

export default function Layout({ children }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="bg-blue-900 min-h-screen flex">
        <Nav />
        <div
          className="bg-white text-black 
                        flex-grow 
                        mt-2 mr-2 mb-2 p-4 
                        rounded-lg"
        >
          {children}
        </div>
      </div>
    );
  }
  return (
    <>
      Not signed in <br />
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            type="button"
            className="bg-white p-2 rounded-lg text-black"
            onClick={() => signIn("google")}
          >
            Login with Google
          </button>
        </div>
      </div>
    </>
  );
}
