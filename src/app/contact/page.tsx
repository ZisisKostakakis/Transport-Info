import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div>
        <h1 className="mb-4 text-center text-6xl font-semibold">Contact Me</h1>
        <div className="flex flex-col justify-between space-y-4 py-4">
          <Link
            className=""
            href="https://www.linkedin.com/in/zisis-kostakakis-5b85961b7/"
          >
            <h1 className="transform text-center text-4xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110  hover:text-blue-500">
              LinkedIn
            </h1>
          </Link>
          <Link className="" href="https://github.com/ZisisKostakakis">
            <h1 className="transform text-center text-4xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110  hover:text-blue-500">
              Github
            </h1>
          </Link>
          <a href="mailto: kostakakiszisis@gmail.com">
            <h1 className="transform text-center text-4xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110  hover:text-blue-500">
              Email
            </h1>
          </a>
        </div>
      </div>
    </main>
  );
}
