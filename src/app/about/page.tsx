import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="homePageText">Project technicalities</h1>
      <h1 className="secondaryHomePageText">Architecture</h1>
      <div className="flex p-8">
        <Image
          src="/images/Transport-Info.png"
          width={800}
          height={500}
          alt=""
        />
      </div>
      <h1 className="secondaryHomePageText">Technologies</h1>
      <h1>
        <h2 className="secondaryHomePageText">Frontend</h2>
        <ul className="list-disc">
          <li>Cloud: Vercel</li>
          <li>Next JS 13</li>
          <li>Typescript</li>
        </ul>
        <h2 className="secondaryHomePageText">Backend</h2>
        <ul className="list-disc">
          <li>Cloud: AWS</li>
          <li>API Gateway</li>
          <li>Lambda</li>
          <li>DynamoDB</li>
          <li>S3</li>
        </ul>
      </h1>
    </main>
  );
}
