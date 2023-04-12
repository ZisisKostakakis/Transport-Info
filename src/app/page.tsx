import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="homePageText">Welcome to Transport-Info</h1>
      <Link className="button" href={'/transportInfo'}>
        Sign In
      </Link>
    </main>
  );
}
