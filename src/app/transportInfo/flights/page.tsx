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
interface DATA_API_KEY_TYPE {
  DATA_API_KEY: string;
}
declare global {
  namespace NodeJS {
    interface ProcessEnv extends DATA_API_KEY_TYPE {}
  }
}

export default async function Home() {
  // const res = await fetch(process.env.GET_FLIGHTS, {
  const res = await fetch('https://api.publicapis.org/entries', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  });
  // const data: Flights[] = await res.json();
  const data = await res.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="homePageText">Flights</div>
      <table className="table-auto border-collapse border border-gray-600">
        <thead>
          <tr>
            <th className="border border-gray-600">Flight Number</th>
            <th className="border border-gray-600">From Country</th>
            <th className="border border-gray-600">To Country</th>
            <th className="border border-gray-600">From City</th>
            <th className="border border-gray-600">To City</th>
            <th className="border border-gray-600">From Date</th>
            <th className="border border-gray-600">To Date</th>
            <th className="border border-gray-600">Departure</th>
            <th className="border border-gray-600">Arrival</th>
            <th className="border border-gray-600">Economy</th>
            <th className="border border-gray-600">EBusiness</th>
            <th className="border border-gray-600">First Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-600 px-4 py-2">
              {data.entries[0].API}
            </td>
            <td className="border border-gray-600 px-4 py-2">
              {data.entries[0].API}
            </td>
            <td className="border border-gray-600 px-4 py-2">
              {data.entries[0].Auth}
            </td>
            <td className="border border-gray-600 px-4 py-2">
              {data.entries[0].HTTPS}
            </td>
            <td className="border border-gray-600 px-4 py-2">
              {data.entries[0].Cors}
            </td>
            <td className="border border-gray-600 px-4 py-2">
              {data.entries[0].Link}
            </td>
            <td className="border border-gray-600 px-4 py-2">
              {data.entries[0].Category}
            </td>
            <td className="border border-gray-600 px-4 py-2">Testing</td>
            <td className="border border-gray-600 px-4 py-2">Testing</td>
            <td className="border border-gray-600 px-4 py-2">Testing</td>
            <td className="border border-gray-600 px-4 py-2">Testing</td>
            <td className="border border-gray-600 px-4 py-2">Testing</td>
          </tr>
        </tbody>
        {/* <tbody>
          {data.map((flight, index) => (
            <tr key={index}>
              <td className="border border-gray-600 px-4 py-2">
                {flight.flights_number}
              </td>
              <td className="border border-gray-600 px-4 py-2">
                {flight.from_Country}
              </td>
              <td className="border border-gray-600 px-4 py-2">
                {flight.to_Country}
              </td>
              <td className="border border-gray-600 px-4 py-2">
                {flight.from_city}
              </td>
              <td className="border border-gray-600 px-4 py-2">
                {flight.to_city}
              </td>
              <td className="border border-gray-600 px-4 py-2">
                {flight.from_date}
              </td>
              <td className="border border-gray-600 px-4 py-2">
                {flight.to_date}
              </td>
              <td className="border border-gray-600 px-4 py-2">
                {flight.departure}
              </td>
              <td className="border border-gray-600 px-4 py-2">
                {flight.arrival}
              </td>
              <td className="border border-gray-600 px-4 py-2">
                {flight.economy}
              </td>
              <td className="border border-gray-600 px-4 py-2">
                {flight.eusiness}
              </td>
              <td className="border border-gray-600 px-4 py-2">
                {flight.first_class}
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </main>
  );
}
