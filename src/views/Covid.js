import useFetch from "../customize/Fetch";
import moment from "moment";

const Covid = () => {
  const today = new Date(new Date().setHours(0, 0, 0, 0));
  const priorDate = moment().subtract(30, "days");

  const { data, InLoading } = useFetch(
    "https://api.covid19api.com/country/vietnam?from=" +
      priorDate.toISOString() +
      "&to=" +
      today.toISOString() +
      ""
  );

  return (
    <table id="customers">
      <thead>
        <tr>
          <th>Date</th>
          <th>Active</th>
          <th>Confirmed</th>
          <th>Deaths</th>
          <th>Recovered</th>
        </tr>
      </thead>
      <tbody>
        {InLoading === false &&
          data &&
          data.length > 0 &&
          data.map((val, index) => {
            return (
              <tr key={val.ID}>
                <td>{val.Date}</td>
                <td>{val.Active}</td>
                <td>{val.Confirmed}</td>
                <td>{val.Deaths}</td>
                <td>{val.Recovered}</td>
              </tr>
            );
          })}
        {InLoading === true && (
          <tr>
            <td colSpan={5} style={{ textAlign: "center" }}>
              Loading...
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Covid;
