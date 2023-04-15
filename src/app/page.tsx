import Navbar from '@/components/navbar';
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="homePageText">Welcome to Transport-Info</h1>
        <SignedIn>
          <div>
            <a
              href="/transportInfo"
              className="focus:ring-6 flex flex-auto justify-center rounded-lg bg-gray-900 py-2.5 text-2xl font-medium text-white hover:bg-slate-500 focus:outline-none focus:ring-slate-200"
            >
              Dashboard
            </a>
            <p className="secondaryHomePageText">You are signed in!</p>
          </div>
        </SignedIn>
        <SignedOut>
          <p className="secondaryHomePageText">You are signed out!</p>
          <Link
            className="secondaryHomePageText animate-bounce"
            href="/sign-in"
          >
            Sign In
          </Link>
        </SignedOut>
      </main>
    </>
  );
}
