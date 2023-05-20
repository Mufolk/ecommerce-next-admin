import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return <>
      Signed in as {session.user.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br />
    <div className='bg-blue-900 w-screen h-screen flex items-center'>
      <div className="text-center w-full">
        <button className="bg-white p-2 rounded-lg" onClick={() => signIn()}>
          Login with Google
        </button>
      </div>
    </div>
  </>
}
