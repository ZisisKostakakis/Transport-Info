type Flights = {
  flights_number: string;
  from_Country: string;
  to_Country: string;
  from_city: string;
  to_city: string;
  from_date: string;
  to_date: string;
  departure: string;
  arrival: string;
  economy: string;
  eusiness: string;
  first_class: string;
};
interface Flights_API {
  GET_FLIGHTS: string;
}
interface DATA_API_KEY_TYPE {
  DATA_API_KEY: string;
}
declare global {
  namespace NodeJS {
    interface ProcessEnv extends DATA_API_KEY_TYPE {}
    interface ProcessEnv extends Flights_API {}
  }
}

export default async function Home() {
  const res = await fetch(process.env.GET_FLIGHTS, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.DATA_API_KEY,
    },
  });
  const data: Flights = await res.json();
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="homePageText">Flights</div>
      <div className="flex flex-col justify-between">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Flight Number
                </th>
                <th scope="col" className="px-6 py-3">
                  From Country
                </th>
                <th scope="col" className="px-6 py-3">
                  To Country
                </th>
                <th scope="col" className="px-6 py-3">
                  From City
                </th>
                <th scope="col" className="px-6 py-3">
                  To City
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
                <th scope="col" className="px-6 py-3">
                  Economy
                </th>
                <th scope="col" className="px-6 py-3">
                  Business
                </th>
                <th scope="col" className="px-6 py-3">
                  First Class
                </th>
                <th scope="col" className="relative px-6 py-3">
                  Find More
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-900">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="">{data.flights_number[1]}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="">{data.from_Country[1]}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="">{data.to_Country[1]}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="">{data.from_city[1]}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="">{data.to_city[1]}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="">{data.from_date[1]}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="">{data.to_date[1]}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="">{data.departure[1]}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="">{data.arrival[1]}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="">{data.economy[1]}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="">{data.eusiness[1]}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="">{data.first_class[1]}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <a
                      href="#"
                      className="focus:shadow-outline-blue flex items-center justify-between rounded border border-transparent bg-blue-600 px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-blue-700 focus:outline-none active:bg-blue-600"
                    >
                      <span>Find More</span>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
