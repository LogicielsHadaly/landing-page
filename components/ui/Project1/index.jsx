import React, { useEffect, useState } from "react";
import GradientWrapper from "../../GradientWrapper";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function Project1() {
  // const stockNames = [
  //   { stockName: "AAPL", label: "Apple (AAPL)" },
  //   { stockName: "MSFT", label: "Microsoft (MSFT)" },
  //   { stockName: "SNAP", label: "Snapchat (SNAP)" },
  //   { stockName: "TSLA", label: "Tesla (TSLA)" },
  //   { stockName: "GME", label: "GameStop (GME)" },
  //   { stockName: "YUM", label: "Pizza Hut (YUM)" },
  //   { stockName: "DPZ", label: "Dominos (DPZ)" },
  //   { stockName: "NFLX", label: "Netflix (NFLX)" },
  // ];

  const stockNames = [
    { label: "AAPL", stockName: "Apple (AAPL)" },
    { label: "MSFT", stockName: "Microsoft (MSFT)" },
    { label: "SNAP", stockName: "Snapchat (SNAP)" },
    { label: "TSLA", stockName: "Tesla (TSLA)" },
    { label: "GME", stockName: "GameStop (GME)" },
    { label: "YUM", stockName: "Pizza Hut (YUM)" },
    { label: "DPZ", stockName: "Dominos (DPZ)" },
    { label: "NFLX", stockName: "Netflix (NFLX)" },
  ];

  const intervals = [
    { label: "1m" },
    { label: "5m" },
    { label: "30m" },
    { label: "1h" },
    { label: "6h" },
    { label: "1d" },
  ];

  const [stockApiData, setStockApiData] = useState(null);
  const [filteredOptions, setFilteredOptions] = useState(stockNames);
  const [inputValue, setInputValue] = useState("");

  const [startDateState, setStartDate] = useState("");
  const [endDateState, setEndDate] = useState("");
  const [intervalState, setIntervalState] = useState("");
  const [stockSymbol, setStockSymbol] = useState("");

  const [hasResults, setHasResults] = useState(false);
  const [url, setUrl] = useState("");

  const waitTime = 500;

  let running;

  function fetchApiResult() {
    running = setInterval(() => {
      console.log(url);
      fetch(url, {
        headers: {
          "Content-type": "application/json",
        },
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const parsedData = JSON.parse(data);
          setHasResults(true);
          setStockApiData(parsedData);
          console.log(
            `Start: ${startDateState} | End: ${endDateState} | Interval: ${intervalState} | Symbol: ${stockSymbol}`
          );
        })
        .catch((error) => {
          console.error(error);
        });
      clearInterval(running);
    }, waitTime);
  }

  useEffect(() => {
    if (startDateState && endDateState && intervalState && stockSymbol) {
      setUrl(
        `https://hadalyapi-production.up.railway.app/historic?symbol=${stockSymbol}&start_date=${startDateState}&end_date=${endDateState}&interval=${intervalState}`
      );
      fetchApiResult();
    }
  }, [startDateState, endDateState, intervalState, stockSymbol, url, running]);

  useEffect(() => {
    const filtered = stockNames.filter((option) =>
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
        <div id="graph-ui-container" className="flex flex-initial w-50">
          <div className="border-2 border-dashed border-black ml-40 w-50 h-35">
            {/* Insert Graph Here */}
            <h1>GRAPH</h1>
            <p>Start Date: {startDateState}</p>
            <p>End Date: {endDateState}</p>
            <p>Interval: {intervalState}</p>
            <p>Stock Symbol: {stockSymbol}</p>
            <div>
              <p>Results: {hasResults}</p>
              {/* {hasResults > 0 ? ( */}
              {hasResults ? (
                <table>
                  <tr>
                    <th>Open</th>
                    <th>Close</th>
                    <th>Low</th>
                    <th>High</th>
                    <th>Candle Color</th>
                  </tr>
                  {stockApiData.open.map((stock, i) => (
                    <tr>
                      {/* Canlesticks: Green = close price > open price, Red = open price > close price */}
                      <td>{stock}</td>
                      <td>{stockApiData.close[i]}</td>
                      <td>{stockApiData.low[i]}</td>
                      <td>{stockApiData.high[i]}</td>
                      <td>
                        {stockApiData.close[i] > stockApiData.open[i]
                          ? "Green"
                          : "Red"}
                      </td>
                    </tr>
                  ))}
                </table>
              ) : (
                <p>Nothing</p>
              )}
            </div>
          </div>
          <div id="user-inputs">
            <form id="dates" className="ml-4">
              <div className="flex flex-initial">
                <div id="startDate">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker
                      label="Start Date"
                      inputFormat="YYYY-MM-DD"
                      format="YYYY-MM-DD"
                      onChange={(startDate) => {
                        startDate = startDate.format("YYYY-MM-DD").toString();
                        setStartDate(startDate);
                      }}
                    />
                  </LocalizationProvider>
                </div>
                <div id="end" className="pl-4">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker
                      label="End Date"
                      inputFormat="YYYY-MM-DD"
                      format="YYYY-MM-DD"
                      onChange={(endDate) => {
                        endDate = endDate.format("YYYY-MM-DD").toString();
                        setEndDate(endDate);
                      }}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div id="interval" className="mt-4">
                <Autocomplete
                  disablePortal
                  options={intervals}
                  isOptionEqualToValue={(option, value) =>
                    option.label === value.label
                  }
                  onInputChange={(event, interval) => {
                    setIntervalState(interval);
                  }}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Interval" />
                  )}
                />
              </div>
              <div id="stockchoice" className="mt-5">
                <Autocomplete
                  disablePortal
                  options={stockNames}
                  isOptionEqualToValue={(option, value) =>
                    option.stockName === value.stockName
                  }
                  onInputChange={(event, stock) => {
                    setStockSymbol(stock);
                  }}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Select a stock" />
                  )}
                />
                {/* <Autocomplete
                  options={stockNames}
                  getOptionLabel={(option) => option.label}
                  isOptionEqualToValue={(option, value) =>
                    option.stockName === value.stockName
                  }
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  onChange={(event, value) => {
                    setStockSymbol(value?.stockName || "");
                    fetchApiResult();
                  }}
                  value={stockNames.find(
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
                /> */}
              </div>
              <input
                type="button"
                value="Submit"
                onClick={(e) => {
                  fetchApiResult();
                }}
              />
            </form>
          </div>
          {/* End user inputs */}
        </div>
        {/* End container */}
      </div>
    </GradientWrapper>
  ); // End Return
} //End Project1

export default Project1;
