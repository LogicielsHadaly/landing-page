import React, { useEffect, useState } from "react";
import GradientWrapper from "../../GradientWrapper";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Project1() {
  const stocks = [
    { stockName: "APPL", label: "Apple (APPL)" },
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

  const [stockApiData, setStockApiData] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState(stocks);
  const [inputValue, setInputValue] = useState("");

  const [startDateState, setStartDate] = useState("");
  const [endDateState, setEndDate] = useState("");
  const [intervalState, setInterval] = useState("");
  const [stockSymbol, setStockSymbol] = useState("");

  // function fetchApiResult() {
  //   fetch(
  //     `https://api.hadaly.ca/historic?symbol=${stockSymbol}&start_date=${startDateState}&end_date=${endDateState}&interval=${intervalState}`,
  //     {
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       method: "GET",
  //     }
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setStockApiData(data);
  //     });
  //   console.log(stockApiData);
  // }

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
            style={{ marginLeft: "10em", width: "30em", height: "30em" }}
          >
            {/* Insert Graph Here */}
            <h1>GRAPH</h1>
            <p>Stock: {stockSymbol} </p>
            <p>{filteredOptions.length} items shown</p>
            <div>
              Start Date: {startDateState}
              <br />
              End Date: {endDateState}
              <br />
              Stock: {stockSymbol}
              <br />
              Interval: {intervalState}
              <br />
              {/* {stockApiData.length > 0 && (
                <ul>
                  {stockApiData.map((stock) => (
                    <li key={stock.id}>{stock.id}</li>
                  ))}
                </ul>
              )} */}
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
              <div date-rangepicker class="flex items-center"></div>
              <div id="interval" style={{ marginTop: "1em" }}>
                <Autocomplete
                  disablePortal
                  options={intervals}
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
                  getOptionSelected={(option, value) =>
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
              <input type="button" onClick={fetchApiResult} value="Submit" />
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
