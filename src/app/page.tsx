import Navbar from '@/components/navbar';
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta';
import Link from 'next/link';

export default function Home() {
  // const user = useUser();
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="homePageText">Welcome to Transport-Info</h1>
        <SignedIn>
          <div>
            <a
              href="/transportInfo"
              className="flex flex-auto justify-center rounded-lg bg-blue-700 py-2.5 text-2xl font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Dashboard
            </a>
            <p className="secondaryHomePageText">You are signed in!</p>
          </div>
        </SignedIn>
        <SignedOut>
          <p className="secondaryHomePageText">You are signed out!</p>
          <Link href="/sign-in">Sign In</Link>
        </SignedOut>
      </main>
    </>
  );
}
