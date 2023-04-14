import { SignIn } from '@clerk/nextjs/app-beta';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="homePageText">
        This is the page regarding the project technicalities
      </h1>
      <h2 className="secondaryHomePageText animate-bounce">
        (Work In Progress)
      </h2>
    </main>
  );
}
