import { useSession, signIn, signOut } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()
  console.log(session)
  if (session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut('github')}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('github')}>Sign in</button>
    </>
  )
}
