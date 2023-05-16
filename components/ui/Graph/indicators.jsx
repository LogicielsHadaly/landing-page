import React, { Component } from "react";

function Indicators() {
  const [indicators, setIndicators] = useState([]);

  async function fetchIndicators() {
    const sendReqBody = {
      indicators: ["CDL3WHITESOLDIERS", "AVGPRICE", "BETA", "AROONOSC"],
      symbol: "AAPL",
      start_date: "2022-01-06",
      end_date: "2022-03-12",
      interval: "1d",
    };

    await fetch("https://hadalyapi-production.up.railway.app/indicators", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(sendReqBody),
    })
      .then((response) => response.json())
      .then((data) => {
        setIndicators(data);
        console.log(data);
      });
  }

  useEffect(() => {
    fetchIndicators();
  }, []);
}

export default Indicators;
