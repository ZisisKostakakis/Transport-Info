import Link from 'next/link';

interface pageProps {}

const TransportInfo: React.FC<pageProps> = ({}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="homePageText">Transport Types</div>
      <div className="flex flex-row items-center justify-between p-24">
        <Link className="transportTypeLinks" href={'/transportInfo/flights'}>
          Flights
        </Link>
        <Link className="transportTypeLinks" href={'/transportInfo/buses'}>
          Buses
        </Link>
        <Link className="transportTypeLinks" href={'/transportInfo/trains'}>
          Trains
        </Link>
      </div>
    </main>
  );
};
export default TransportInfo;
