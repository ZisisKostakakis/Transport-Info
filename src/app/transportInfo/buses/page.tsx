import Link from 'next/link';

type Buses = {
  [key: string]: {
    from_Country: string;
    to_Country: string;
    from_city: string;
    to_city: string;
    from_date: string;
    to_date: string;
    departure: string;
    arrival: string;
    economy: number;
    eusiness: number;
    first_class: number;
  };
};

interface Buses_API {
  GET_BUSES: string;
}
interface DATA_API_KEY_TYPE {
  DATA_API_KEY: string;
}
declare global {
  namespace NodeJS {
    interface ProcessEnv extends DATA_API_KEY_TYPE {}
    interface ProcessEnv extends Buses_API {}
  }
}

export default async function Home() {
  const res = await fetch(process.env.GET_BUSES, {
    //  if I want to revalidate the data every 10 seconds
    // next: { revalidate: 10 },
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.DATA_API_KEY,
    },
  });
  const data: Buses = await res.json();
  const { body }: any = data;
  const buses = JSON.parse(body);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-between ">
        <Link
          className="transform whitespace-nowrap  border-b-4 border-blue-600 px-6 py-8
        text-center text-2xl font-medium shadow-lg transition duration-500 ease-in-out hover:-translate-y-1 hover:text-blue-600
      "
          href="/transportInfo/flights"
        >
          Flights
        </Link>
        <Link
          className="transform whitespace-nowrap border-b-4 border-blue-600 px-6 py-8
        text-center text-2xl font-medium shadow-lg transition duration-500 ease-in-out hover:-translate-y-1 hover:text-blue-600
      "
          href="/transportInfo"
        >
          Main menu
        </Link>
        <Link
          className="transform whitespace-nowrap border-b-4 border-blue-600 px-6 py-8
        text-center text-2xl font-medium shadow-lg transition duration-500 ease-in-out hover:-translate-y-1 hover:text-blue-600
      "
          href="/transportInfo/trains"
        >
          Trains
        </Link>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className=" space-y-6">
          <div className="homePageText">Buses</div>
          <div className="flex flex-col justify-between">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full table-auto text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Bus Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      From Country
                    </th>
                    <th scope="col" className="px-6 py-3">
                      To Country
                    </th>
                    <th scope="col" className="px-6 py-3">
                      From Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      To Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Departure
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Arrival
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      Find More
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {Object.keys(buses).map((key) => (
                    <tr key={key}>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900 dark:text-gray-100">
                          {key}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900 dark:text-gray-100">
                          {buses[key].from_Country}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900 dark:text-gray-100">
                          {buses[key].to_Country}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900 dark:text-gray-100">
                          {buses[key].from_date}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900 dark:text-gray-100">
                          {buses[key].to_date}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900 dark:text-gray-100">
                          {buses[key].departure}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900 dark:text-gray-100">
                          {buses[key].arrival}
                        </div>
                      </td>
                      <td className="hover:scale-10 text-md transform whitespace-nowrap px-6 py-4 text-right font-medium transition duration-500 ease-in-out hover:-translate-y-1 hover:text-blue-500 ">
                        <a href="#">Find More</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
