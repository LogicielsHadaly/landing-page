import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CreateGraph from "./createGraph";
import style from "./style/style.module.css";
import { indicatorsList } from "./indicatorsList";
import { stocksList } from "./stocksList";

function Graph() {
    // Hard Coded example stock names
    const stockNames = stocksList;

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
    const [historicApiData, setStockApiData] = useState(null);

    //For pressing enter
    const [filteredOptions, setFilteredOptions] = useState(stockNames);
    const [inputValue, setInputValue] = useState("");

    //User Inputs
    const [endDateState, setEndDate] = useState(null);
    const [startDateState, setStartDate] = useState(null);
    const [intervalState, setIntervalState] = useState("");
    const [stockSymbolState, setStockSymbolState] = useState("");
    const [indicatorState, setIndicatorState] = useState([]);
    const [indicatorChoice, setIndicatorChoice] = useState("");

    const [indicatorListView, setIndicatorListView] = useState("");
    const lineColor = ["#2962FF", "#e942f5", "#42f595"];

    //Url's for API
    let historicUrl = "";
    const indicatorUrl =
        "https://hadalyapi-production.up.railway.app/indicators";
    // Historic API URL for reference
    // `https://hadalyapi-production.up.railway.app/historic?symbol=${stockSymbol}&start_date=${startDateState}&end_date=${endDateState}&interval=${intervalState}`

    // Makes sure there is something to show
    const [hasResults, setHasResults] = useState(false);

    let indicatorResultParsed = null;

    //Fetch interval wait time
    const waitTime = 500;

    //Data to create charts
    let historicDataInputs = [];
    let indicatorDataInputs = [];
    const [chartPlan, setChartPlan] = useState();

    /**** FUNCTIONS START ****/
    //Default Values to start app
    useEffect(() => {
        const defaultStock = "AAPL";
        const defaultInterval = "1d";
        setStockSymbolState(defaultStock);
        setIntervalState(defaultInterval);
        let today = new Date();
        let day = today.getUTCDate();
        let month = today.getUTCMonth() + 1;
        let year = today.getUTCFullYear();
        setEndDate(`${year}-${month}-${day}`);
        setStartDate(`${year - 1}-${month}-${day}`);
        setIndicatorState([indicatorsList[8]]);
    }, []);

    //Returns historic
    let runningStock;
    function fetchHistoricResult() {
        runningStock = setInterval(() => {
            fetch(historicUrl, {
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
            clearInterval(runningStock);
        }, waitTime);
    }
    //Calls fetchHistoricResult and fetchIndicatorResult
    useEffect(() => {
        if (
            startDateState &&
            endDateState &&
            intervalState &&
            stockSymbolState
        ) {
            historicUrl = `https://hadalyapi-production.up.railway.app/historic?symbol=${stockSymbolState}&start_date=${startDateState}&end_date=${endDateState}&interval=${intervalState}`;
            fetchHistoricResult();
        }
    }, [
        startDateState,
        endDateState,
        intervalState,
        stockSymbolState,
        historicUrl,
    ]);

    //Returns indicator
    async function fetchIndicatorData() {
        //if (indicatorState.length < 1) return;
        const sendReqBody = {
            indicators: indicatorState,
            symbol: stockSymbolState,
            start_date: startDateState,
            end_date: endDateState,
            interval: intervalState,
        };

        await fetch(indicatorUrl, {
            headers: {
                "Content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(sendReqBody),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                cleanIndicatorApiParsedResult(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        fetchIndicatorData();
    }, [indicatorChoice, historicApiData]);

    //Parse the JSON result and handles NaN data
    async function cleanIndicatorApiParsedResult(data) {
        if (data === null) return;
        if (data.length > 0) {
            const cleanResponse = data.replace(/NaN/g, 0);
            indicatorResultParsed = JSON.parse(cleanResponse, (key, value) => {
                if (typeof value === "number" && Number.isNaN(value)) {
                    return 0;
                }
                return value;
            });
        }
        infoToChart();
    }

    //IndicatorState List handler
    useEffect(() => {
        if (!indicatorChoice) return;
        let copy = indicatorState;
        if (copy.indexOf(indicatorChoice) !== -1) return;
        if (copy.length >= 3) {
            copy = copy.slice(1);
        }
        copy.push(indicatorChoice);
        setIndicatorState(copy);
    }, [indicatorChoice]);

    //Info to send to create charts
    async function infoToChart() {
        if (!historicApiData) return;
        for (let i = 0; i < historicApiData.close.length; i++) {
            let theDate = new Date(historicApiData.close_time[i]);
            let historicToPush = {
                time: {
                    year: theDate.getUTCFullYear(),
                    month: theDate.getUTCMonth() + 1,
                    day: theDate.getUTCDate(),
                },
                open: parseFloat(historicApiData.open[i]),
                high: parseFloat(historicApiData.high[i]),
                low: parseFloat(historicApiData.low[i]),
                close: parseFloat(historicApiData.close[i]),
            };
            historicDataInputs.push(historicToPush);
        }

        if (indicatorResultParsed !== null) {
            if (
                Object.keys(indicatorResultParsed.indicators).length !==
                indicatorState.length
            )
                setIndicatorChoice(indicatorChoice);
            for (
                let i = 0;
                i < Object.keys(indicatorResultParsed.indicators).length;
                i++
            ) {
                let indicatorToPush = [];
                if (indicatorResultParsed.length < 1) continue;
                // console.log(i);
                console.log(indicatorState[i]);
                console.log(indicatorState);
                console.log(indicatorResultParsed.indicators);
                if (!(indicatorState[i] in indicatorResultParsed.indicators)) {
                    console.log("doesnt have");
                    return;
                }

                indicatorResultParsed.indicators[indicatorState[i]].map(
                    (ind, index) => {
                        let date = new Date(historicApiData.close_time[index]);
                        const t = {
                            time: `${date.getUTCFullYear()}-${
                                date.getUTCMonth() + 1 < 10
                                    ? "0" + (date.getUTCMonth() + 1)
                                    : date.getUTCMonth() + 1
                            }-${
                                date.getUTCDate() < 10
                                    ? "0" + date.getUTCDate()
                                    : date.getUTCDate()
                            }`,
                            value: ind,
                        };

                        indicatorToPush.push(t);
                    }
                );
                indicatorDataInputs.push(indicatorToPush);
            }

            // console.log(indicatorDataInputs);
        }
        setChartPlan(() => {
            return (
                <CreateGraph
                    historicData={historicDataInputs}
                    indicatorData={indicatorDataInputs}
                    size={{
                        width: 900,
                        height: 500,
                    }}
                />
            );
        });
    }

    useEffect(() => {
        if (indicatorState === null) return;
        setIndicatorListView(() => {
            indicatorState.map((e, i) => {
                return (
                    <span
                        class="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                        style={{
                            color: lineColor[i],
                        }}
                    >
                        {e}
                    </span>
                );
            });
        });
    }, [indicatorState]);

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
                    {/* GRAPH || GRAPH */}
                    <div className="bg-tranpsarent" style={{ width: "60em" }}>
                        <div
                            style={{ width: "36em", borderRadius: "5px" }}
                            className="border-2 border-slate-500 rounded-m ml-7"
                        >
                            <h1 className="text-xl ml-8 pr-7">
                                <b>{stockSymbolState}</b>: Start:{" "}
                                {startDateState} | End: {endDateState} |
                                Interval: {intervalState}
                            </h1>
                        </div>
                        <section
                            className="custom-screen text-gray-600 bg-transparent"
                            style={{ width: "34em" }}
                        >
                            <div className="justify-center gap-6">
                                {chartPlan !== null ? (
                                    <div className="bg-transparent relative flex-1 flex items-stretch flex-col">
                                        <div className=" space-y-4 border-b">
                                            <div>{chartPlan}</div>
                                            <div class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                <span
                                                    aria-current="true"
                                                    class="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg dark:bg-gray-800 dark:border-gray-600"
                                                >
                                                    Indicator List
                                                </span>
                                                {indicatorListView}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div>Loading Chart...</div>
                                )}
                            </div>
                        </section>
                    </div>
                    {/* END OF GRAPH || END OF GRAP */}

                    {/* USER INPUTS || USER INPUTS */}
                    <div id="user-inputs" className="mt-10">
                        <form id="dates" className="ml-4">
                            <div className="flex flex-initial">
                                <div id="startDate">
                                    <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                    >
                                        <MobileDatePicker
                                            label="Start Date"
                                            inputFormat="YYYY-MM-DD"
                                            format="YYYY-MM-DD"
                                            onChange={(startDate) => {
                                                let startDateFormatted =
                                                    startDate
                                                        .format("YYYY-MM-DD")
                                                        .toString();
                                                setStartDate(
                                                    startDateFormatted
                                                );
                                            }}
                                        />
                                    </LocalizationProvider>
                                </div>
                                <div id="end" className="pl-4">
                                    <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                    >
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
                                        <TextField
                                            {...params}
                                            label="Interval"
                                        />
                                    )}
                                />
                            </div>
                            <div
                                id="stockchoice"
                                className="mt-5"
                                style={{ width: "19em" }}
                            >
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
                                        setStockSymbolState(value.stockName);
                                    }}
                                    value={stockNames.find(
                                        (stock) =>
                                            stock.stockName === stockSymbolState
                                    )}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Stocks"
                                            variant="outlined"
                                            // Pressing enter
                                            onKeyDown={(event) => {
                                                if (event.key === "Enter") {
                                                    if (
                                                        filteredOptions.length ===
                                                        1
                                                    ) {
                                                        setStockSymbolState(
                                                            filteredOptions[0]
                                                                .stockName
                                                        );
                                                        setInputValue(
                                                            filteredOptions[0]
                                                                .label
                                                        );
                                                    }
                                                }
                                            }}
                                        />
                                    )}
                                />
                            </div>
                            <div
                                id="indicatorChoice"
                                className="mt-5"
                                style={{ width: "19em" }}
                            >
                                <Autocomplete
                                    disablePortal
                                    options={indicatorsList}
                                    isOptionEqualToValue={(option, value) =>
                                        option.label === value.label
                                    }
                                    onInputChange={(event, indicator) => {
                                        setIndicatorChoice(indicator);
                                    }}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Indicators"
                                        />
                                    )}
                                />
                            </div>
                        </form>
                    </div>
                    {/* END USER INPUTS || END USER INPUTS */}
                </div>
                <div>
                    Start Date: {startDateState}
                    <br />
                    End Date: {endDateState}
                    <br />
                    Symbol: {stockSymbolState}
                    <br />
                    Interval: {intervalState}
                    <br />
                    Indicator:{" "}
                    {indicatorState ? (
                        () => {
                            indicatorState.map((e, i) => {
                                return <span>{e} </span>;
                            });
                        }
                    ) : (
                        <></>
                    )}
                    <br />
                </div>

                {/* End container */}
            </div>
            {/* <div>Pink: {indicatorApiData.indicators[indicatorState[0]]}</div> */}
        </div>
    ); // End Return
} //End Graph

export default Graph;
