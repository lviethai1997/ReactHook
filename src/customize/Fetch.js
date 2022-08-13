import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [InLoading, setInLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      let dataApi = await axios.get(url);
      var data = dataApi && dataApi.data ? dataApi.data : [];

      if (data && data.length > 0) {
        data.map((val) => {
          val.Date = moment(val.Date).format("YYYY-MM-DD");
          return val;
        });
      }

      setData(data);
      setInLoading(false);
    }

    fetchData();
  }, []);

  return {
    data,
    InLoading,
  };
};

export default useFetch;
