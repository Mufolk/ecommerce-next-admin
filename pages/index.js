import { useSession, signIn, signOut } from "next-auth/react";
// eslint-disable-next-line
import { Nav } from "@/components/Nav";

export default function Component() {
  const { data: session } = useSession();
  if (typeof session === "undefined") {
    return <div>Loading...</div>; // or any other appropriate loading state
  }
  if (session) {
    return (
      <div className="bg-blue-900 min-h-screen">
        <Nav />
        <div>Signed in as {session.user.email}</div>
        <button type="button" onClick={() => signOut()}>
          Sign out
        </button>
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
