import React, { useEffect, useState } from "react";
import GradientWrapper from "../../GradientWrapper";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Project1() {
  const stocks = [
    { stockName: "AAPL", label: "Apple (AAPL)" },
    { stockName: "MSFT", label: "Microsoft (MSFT)" },
    { stockName: "SNAP", label: "Snapchat (SNAP)" },
    { stockName: "TSLA", label: "Tesla (TSLA)" },
    { stockName: "GME", label: "GameStop (GME)" },
    { stockName: "YUM", label: "Pizza Hut (YUM)" },
    { stockName: "DPZ", label: "Dominos (DPZ)" },
    { stockName: "NFLX", label: "Netflix (NFLX)" },
  ];

  const intervals = [
    { label: "1m" },
    { label: "5m" },
    { label: "30m" },
    { label: "1h" },
    { label: "6h" },
    { label: "1d" },
  ];

  const [stockApiData, setStockApiData] = useState();
  const [filteredOptions, setFilteredOptions] = useState(stocks);
  const [inputValue, setInputValue] = useState("");

  const [startDateState, setStartDate] = useState("");
  const [endDateState, setEndDate] = useState("");
  const [intervalState, setInterval] = useState("");
  const [stockSymbol, setStockSymbol] = useState("");

  const [hasResults, setHasResults] = useState("");

  const url = `https://api.hadaly.ca/historic?symbol=${stockSymbol}&start_date=${startDateState}&end_date=${endDateState}&interval=${intervalState}`;

  async function fetchApiResult() {
    await fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
      headers: {
        "Content-type": "application/json",
      },
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setStockApiData(JSON.parse(data));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    if (stockApiData) {
      setHasResults(stockApiData.close.length);
    }
  }, [stockApiData]);

  useEffect(() => {
    const filtered = stocks.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [inputValue]);

  return (
    <GradientWrapper>
      <div className="relative max-w-xl mx-auto sm:text-center">
        <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">UI</h1>
        <div className="mt-2 max-w-xl">
          <p>Testing respresentation for UI/UX</p>
        </div>
      </div>
      <div className="grid place-items-center page-container mt-5">
        <div
          id="graph-ui-container"
          className="flex flex-initial"
          style={{ width: "65em" }}
        >
          <div
            className="border-2 border-dashed border-black"
            style={{ marginLeft: "10em", width: "80em", height: "30em" }}
          >
            {/* Insert Graph Here */}
            <h1>GRAPH</h1>
            <div>
              <p>Results: {hasResults}</p>
              {/* {hasResults > 0 ? ( */}
              {hasResults > 0 ? (
                <table>
                  <tr>
                    <th>Open</th>
                    <th>Close</th>
                    <th>Low</th>
                    <th>High</th>
                    <th>Volume</th>
                    <th>Close Time</th>
                  </tr>
                  {stockApiData.open.map((stock, index) => (
                    <tr>
                      <td>{stock}</td>
                      <td>{stockApiData.close[index]}</td>
                      <td>{stockApiData.low[index]}</td>
                      <td>{stockApiData.high[index]}</td>
                      <td>{stockApiData.volume[index]}</td>
                      <td>{stockApiData.close_time[index]}</td>
                      <td></td>
                    </tr>
                  ))}
                </table>
              ) : (
                <p>Nothing</p>
              )}
            </div>
          </div>
          <div id="user-inputs">
            <form style={{ marginLeft: "1em" }}>
              <div className="flex flex-initial">
                <div id="start" style={{ paddingLeft: "1em" }}>
                  <label htmlFor="start">Start</label>
                  <br />
                  <input
                    type="date"
                    onChange={(e) => setStartDate(e.target.value.toString())}
                  />
                </div>
                <div style={{ paddingLeft: "1em" }}>
                  <label htmlFor="end">End </label>
                  <br />
                  <input
                    type="date"
                    onChange={(e) => setEndDate(e.target.value.toString())}
                  />
                </div>
              </div>
              <div id="interval" style={{ marginTop: "1em" }}>
                <Autocomplete
                  disablePortal
                  options={intervals}
                  isOptionEqualToValue={(option, value) =>
                    option.label === value.label
                  }
                  onInputChange={(event, interval) => setInterval(interval)}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Interval" />
                  )}
                />
              </div>
              <div id="stockchoice" style={{ marginTop: "1em" }}>
                <Autocomplete
                  options={stocks}
                  getOptionLabel={(option) => option.label}
                  isOptionEqualToValue={(option, value) =>
                    option.stockName === value.stockName
                  }
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  onChange={(event, value) =>
                    setStockSymbol(value?.stockName || "")
                  }
                  value={stocks.find(
                    (stock) => stock.stockName === stockSymbol
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select a stock"
                      variant="outlined"
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          console.log(filteredOptions[0]);
                          if (filteredOptions.length === 1) {
                            setStockSymbol(filteredOptions[0].stockName);
                            setInputValue(filteredOptions[0].label);
                          }
                        }
                      }}
                    />
                  )}
                />
              </div>
              <input
                type="button"
                onClick={() => fetchApiResult()}
                value="Submit"
              />
            </form>
          </div>{" "}
          {/* End user inputs */}
        </div>{" "}
        {/* End container */}
      </div>
    </GradientWrapper>
  ); // End Return
} //End Project1

export default Project1;
