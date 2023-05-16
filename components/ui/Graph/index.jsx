import React, { useEffect, useState } from "react";
import GradientWrapper from "../../GradientWrapper";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import INDICATORS from "./tradeView";
import style from "./style.module.css";

function Graph() {
  // Hard Coded example stock names
  const stockNames = [
    { stockName: "AAPL", label: "Apple (AAPL)" },
    { stockName: "MSFT", label: "Microsoft (MSFT)" },
    { stockName: "SNAP", label: "Snapchat (SNAP)" },
    { stockName: "TSLA", label: "Tesla (TSLA)" },
    { stockName: "GME", label: "GameStop (GME)" },
    { stockName: "YUM", label: "Pizza Hut (YUM)" },
    { stockName: "DPZ", label: "Dominos (DPZ)" },
    { stockName: "NFLX", label: "Netflix (NFLX)" },
  ];

  //Hard coded intervals
  const intervals = [
    { label: "1m" },
    { label: "5m" },
    { label: "30m" },
    { label: "1h" },
    { label: "6h" },
    { label: "1d" },
  ];

  // Api result is stored here
  const [stockApiData, setStockApiData] = useState(null);

  //For pressing enter
  const [filteredOptions, setFilteredOptions] = useState(stockNames);
  const [inputValue, setInputValue] = useState("");

  const [endDateState, setEndDate] = useState(null);
  const [startDateState, setStartDate] = useState(null);
  const [intervalState, setIntervalState] = useState("");
  const [stockSymbol, setStockSymbol] = useState("");

  // Check if it's ok to show results.
  // Url
  const [hasResults, setHasResults] = useState(false);
  const [url, setUrl] = useState("");

  // `https://hadalyapi-production.up.railway.app/historic?symbol=${stockSymbol}&start_date=${startDateState}&end_date=${endDateState}&interval=${intervalState}`

  //Fetch interval wait time
  const waitTime = 500;

  const dataInputs = [];
  const [chartPlan, setChartPlan] = useState(null);
  const size = {
    width: 900,
    height: 500,
  };

  //Get the info from the api with a {waitTime} interval to allow useStates
  //to save the info

  let running;
  function fetchApiResult() {
    running = setInterval(() => {
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
          return JSON.parse(data);
        })
        .then((parsedData) => {
          setStockApiData(parsedData);
          setHasResults(true);
        })
        .catch((error) => {
          console.error(error);
        });
      clearInterval(running);
    }, waitTime);
  }

  //Get a default value to start the application
  const defaultStock = "AAPL";
  const defaultInterval = "1d";
  //The time is set from todays date to 2 years prior
  useEffect(() => {
    setStockSymbol(defaultStock);
    setIntervalState(defaultInterval);
    let today = new Date();
    let day = today.getUTCDate();
    let month = today.getUTCMonth() + 1;
    let year = today.getUTCFullYear();
    setEndDate(`${year}-${month}-${day}`);
    setStartDate(`${year - 2}-${month}-${day}`);
  }, []);

  // Will update the url if there is a change of user inputs
  // but only if all inputs are checked
  useEffect(() => {
    if (startDateState && endDateState && intervalState && stockSymbol) {
      setUrl(
        `https://hadalyapi-production.up.railway.app/historic?symbol=${stockSymbol}&start_date=${startDateState}&end_date=${endDateState}&interval=${intervalState}`
      );
      fetchApiResult();
    }
  }, [startDateState, endDateState, intervalState, stockSymbol, url]);

  function createChart() {
    return {
      desc: (
        <a href={url} style={{ color: "blue" }}>
          Click here to Check API
        </a>
      ),
      isMostPop: false,
      graph: <INDICATORS dataInput={dataInputs} size={size} />,
    };
  }

  useEffect(() => {
    if (!stockApiData) return;

    for (let i = 0; i < stockApiData.close.length; i++) {
      let theDate = new Date(stockApiData.close_time[i]);
      let toPush = {
        time: {
          year: theDate.getUTCFullYear(),
          month: theDate.getUTCMonth() + 1,
          day: theDate.getUTCDate(),
        },
        open: parseFloat(stockApiData.open[i]),
        high: parseFloat(stockApiData.high[i]),
        low: parseFloat(stockApiData.low[i]),
        close: parseFloat(stockApiData.close[i]),
      };
      dataInputs.push(toPush);
    }
    setChartPlan(createChart());
  }, [stockApiData, hasResults]);

  //This is for the stock name to be able to show the right option
  //and the value is the symbol and not the name
  useEffect(() => {
    const filtered = stockNames.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [inputValue]);

  return (
    <div className={style.body}>
      <div className="relative max-w-xl mx-auto text-center">
        <h1
          className="text-gray-800 text-3xl font-semibold sm:text-4xl"
          style={{ width: "100%" }}
        >
          Graphs UI
        </h1>
        <div className="mt-2 max-w-xl">
          <p>Testing respresentation for UI/UX</p>
        </div>
      </div>
      <div className="grid place-items-center page-container mt-5">
        <div
          id="graph-ui-container"
          className="lg:flex flex-initial flex-none w-50"
        >
          <div className="bg-tranpsarent" style={{ width: "60em" }}>
            <div
              style={{ width: "36em", borderRadius: "5px" }}
              className="border-2 border-slate-500 rounded-m ml-7"
            >
              <h1 className="text-xl ml-8 pr-7">
                <b>{stockSymbol}</b>: Start: {startDateState} | End:{" "}
                {endDateState} | Interval: {intervalState}
              </h1>
            </div>

            {/* GRAPH GRAPH GRAPH GRAPH */}
            <section
              className="custom-screen text-gray-600 bg-transparent"
              style={{ width: "34em" }}
            >
              <div className="justify-center gap-6">
                {chartPlan !== null ? (
                  <div className="bg-transparent relative flex-1 flex items-stretch flex-col">
                    <div className=" space-y-4 border-b">
                      <div>{chartPlan.graph}</div>
                    </div>
                  </div>
                ) : (
                  <div>Loading Chart...</div>
                )}
              </div>
            </section>
            {/* END OF GRAPH || END OF GRAP */}

            {/* USER INPUTS || USER INPUTS */}
          </div>
          <div id="user-inputs" className="mt-10">
            <form id="dates" className="ml-4">
              <div className="flex flex-initial">
                <div id="startDate">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker
                      label="Start Date"
                      inputFormat="YYYY-MM-DD"
                      format="YYYY-MM-DD"
                      onChange={(startDate) => {
                        let startDateFormatted = startDate
                          .format("YYYY-MM-DD")
                          .toString();
                        setStartDate(startDateFormatted);
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
                        let endDateFormatted = endDate
                          .format("YYYY-MM-DD")
                          .toString();
                        setEndDate(endDateFormatted);
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
              <div id="stockchoice" className="mt-5" style={{ width: "19em" }}>
                <Autocomplete
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
                    setStockSymbol(value.stockName);
                  }}
                  value={stockNames.find(
                    (stock) => stock.stockName === stockSymbol
                  )}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select a stock"
                      variant="outlined"
                      // Pressing enter
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          //console.log(filteredOptions[0]);
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
            </form>
          </div>
          {/* End user inputs */}
        </div>
        {/* End container */}
      </div>
    </div>
  ); // End Return
} //End Graph

export default Graph;