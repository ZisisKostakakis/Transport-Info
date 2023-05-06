import CardLink from '@/components/cardLink';

interface pageProps {}

const TransportInfo: React.FC<pageProps> = ({}) => {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
      <div className="homePageText text-center text-2xl">Transport Types</div>
      <div className="flex flex-col items-center gap-4 py-6 lg:flex lg:flex-row lg:justify-between lg:p-24">
        <CardLink
          href="/transportInfo/flights"
          title="Flights"
          description="Get information regarding Flights!"
        />
        <CardLink
          href="/transportInfo/buses"
          title="Buses"
          description="Get information regarding Buses!"
        />
        <CardLink
          href="/transportInfo/trains"
          title="Trains"
          description="Get information regarding Trains!"
        />
      </div>
    </main>
  );
};
export default TransportInfo;
