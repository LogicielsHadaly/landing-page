/**
 * Author: Ariel Martin Cohe
 * Date: 9-05-2023
 * Description: Front-end of the graph app.
 *
 */

import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CreateGraph from "./createGraph";
import style from "./style/style.module.css";
import { stocksList } from "./stocksList";
import { IndicatorList } from "./indicators/indicatorList";
import { PatternList } from "./indicators/patternsExport";
import GridContainer from "./GridLayout/GridContainer";
import { Alert } from "@mui/material";

let count = 0;

function Graph() {
    //Hard coded intervals
    const intervals = [
        { label: "1 hour", value: "1h" },
        { label: "1 day", value: "1d" },
    ];

    //I don't understand why some need to be states and others not....
    //It works. don't touch
    //Lists
    const stockNames = stocksList;
    const [indicatorList, setIndicatorList] = useState(IndicatorList);
    const [patternList, setPatternList] = useState(PatternList);

    // Api results are stored here
    const [historicApiData, setStockApiData] = useState(null);
    const [indicatorApiData, setIndicatorApiData] = useState(null);
    const [patternApiData, setPatternApiData] = useState(null);

    //For pressing enter in stock
    const [filteredOptions, setFilteredOptions] = useState(stockNames);
    const [inputValue, setInputValue] = useState("");

    //User Inputs
    const [endDateState, setEndDate] = useState(null);
    const [startDateState, setStartDate] = useState(null);
    const [intervalState, setIntervalState] = useState("");
    const [stockSymbolState, setStockSymbolState] = useState("");
    const [indicatorState, setIndicatorState] = useState("");
    const [patternState, setPatternState] = useState("");

    //indicatorChosenList is the list of indicators to be sent as a request body
    //indicatorResultParsed is the cleaned up JSON.parse result of the response from the API
    const [indicatorChosenList, setIndicatorChosenList] = useState([]);
    const [indicatorResultParsed, setIndicatorResultParsed] = useState([]);

    const [patternChosenList, setPatternChosenList] = useState([]);
    const [patternResultParsed, setPatternResultParsed] = useState([]);

    //This is the list that shows up under the graph to show what indicator and pattern
    // are being shown and remove them as well.
    const [indicatorListView, setIndicatorListView] = useState("");
    const [patternListView, setPatternListView] = useState("");

    //LineColor list
    const lineColor = ["#2962FF", "#e942f5", "#42f595", "#FFFFFF", "#fffb00"];
    const markerColors = [
        ["#8cff5e", "#ffc15e"],
        ["#14faf6", "#ca03fc"],
        ["#f5f5f5", "#f70015"],
    ];

    //Url's for API
    let historicUrl = "";
    const indicatorUrl =
        "https://hadalyapi-production.up.railway.app/indicators";
    // Historic API URL for reference
    // `https://hadalyapi-production.up.railway.app/historic?symbol=${stockSymbol}&start_date=${startDateState}&end_date=${endDateState}&interval=${intervalState}`
    const [engineUrl, setEngineUrl] = useState(
        "https://hadalyapi-production.up.railway.app/engine"
    );
    //Fetch interval wait time
    const waitTime = 500;

    //Data to create charts
    const [historicDataInputs, setHistoricDataInputs] = useState([]);
    const [indicatorDataInputs, setIndicatorDataInputs] = useState([]);
    const [patternDataInputs, setPatternDataInputs] = useState([]);
    const [chartPlan, setChartPlan] = useState();

    const [dateError, setDateError] = useState(false);
    const [showDateError, setShowDateError] = useState(null);

    //////////////////////////////////////////////////////////////////
    /**** GET HISTORIC ****/
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
        //setIndicatorChosenList([indicatorList[0].indicator]);
        setPatternChosenList(["CDL3OUTSIDE", "CDLINVERTEDHAMMER"]);
    }, []);

    //Calls fetchHistoricResult
    useEffect(() => {
        if (
            startDateState &&
            endDateState &&
            intervalState &&
            stockSymbolState
        ) {
            historicUrl = `https://hadalyapi-production.up.railway.app/historic?symbol=${stockSymbolState}&start_date=${startDateState}&end_date=${endDateState}&interval=${intervalState}`;
            //console.log("changing historic");
            fetchHistoricResult();
        }
    }, [
        startDateState,
        endDateState,
        intervalState,
        stockSymbolState,
        historicUrl,
    ]);

    //Returns historic
    let runningStock;
    function fetchHistoricResult() {
        // console.log(historicUrl);
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
                })
                .catch((error) => {
                    console.error(error);
                });
            clearInterval(runningStock);
        }, waitTime);
    }

    /////////////////////////////////////////////////////////////////////
    /***** GET INDICATOR *****/
    useEffect(() => {
        if (!indicatorState) return;
        setIndicatorChosenList((prevState) => {
            let copy = [...prevState]; // Create a new array with the previous state

            if (copy.indexOf(indicatorState) !== -1) return copy;
            if (copy.length === 3) {
                copy = copy.slice(1);
            }
            copy.push(indicatorState);
            //console.log(copy);
            return copy; // Return the updated state
        });
    }, [indicatorState]);

    //Returns indicatorApiData
    useEffect(() => {
        if (indicatorChosenList.length < 1) return;
        //console.log("return indicatorApiData");
        const sendReqBody = {
            indicators: indicatorChosenList,
            symbol: stockSymbolState,
            start_date: startDateState,
            end_date: endDateState,
            interval: intervalState,
        };
        // console.log(sendReqBody);
        fetch(indicatorUrl, {
            headers: {
                "Content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(sendReqBody),
        })
            .then((response) => {
                //console.log(response);
                return response.json();
            })
            .then((data) => {
                setIndicatorApiData(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [indicatorChosenList, historicApiData]);

    //Clean up dataset to remove NaN and replace with 0
    useEffect(() => {
        //console.log("Setting indicatorResultParsed");
        if (indicatorApiData === null) return;
        if (indicatorApiData.length > 0) {
            //console.log("here");
            const cleanResponse = indicatorApiData.replace(/NaN/g, 0);
            setIndicatorResultParsed(
                JSON.parse(cleanResponse, (key, value) => {
                    if (typeof value === "number" && Number.isNaN(value)) {
                        return 0;
                    }
                    return value;
                })
            );
        }
    }, [indicatorApiData]);

    useEffect(() => {
        if (indicatorChosenList.length < 1) {
            setIndicatorDataInputs([]);
        }
    }, [indicatorChosenList]);

    // Add Indicator to list
    useEffect(() => {
        if (indicatorChosenList === null) return;
        setIndicatorListView(() => {
            return indicatorChosenList.map((e, i) => {
                return (
                    <span
                        key={i}
                        className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                        style={{
                            color: lineColor[i],
                        }}
                        onClick={() => removeIndicator(i)}
                    >
                        {e}
                    </span>
                );
            });
        });
    }, [indicatorChosenList]);

    // function that removes indicator from list
    const removeIndicator = (index) => {
        setIndicatorChosenList((prevState) => {
            const newState = [...prevState];
            newState.splice(index, 1);
            return newState;
        });
    };

    //////////////////////////////////////////////////////////////

    useEffect(() => {
        if (!patternState) return;
        setPatternChosenList((prevState) => {
            let copy = [...prevState]; // Create a new array with the previous state

            if (copy.indexOf(patternState) !== -1) return copy;
            if (copy.length === 3) {
                copy = copy.slice(1);
            }
            copy.push(patternState);
            //console.log(copy);
            return copy; // Return the updated state
        });
    }, [patternState]);

    //Returns patternApiData
    useEffect(() => {
        if (patternChosenList.length < 1) return;
        const sendReqBody = {
            indicators: patternChosenList,
            symbol: stockSymbolState,
            start_date: startDateState,
            end_date: endDateState,
            interval: intervalState,
        };
        //console.log(sendReqBody);
        fetch(indicatorUrl, {
            headers: {
                "Content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(sendReqBody),
        })
            .then((response) => {
                //console.log(response);
                return response.json();
            })
            .then((data) => {
                setPatternApiData(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [patternChosenList, historicApiData]);

    //Clean up dataset to remove NaN and replace with 0
    //Here we set Pattern Chosen List.
    useEffect(() => {
        //console.log(patternApiData);
        if (patternApiData === null) return;
        if (patternApiData.length > 0) {
            //console.log("here");
            const cleanResponse = patternApiData.replace(/NaN/g, 0);
            setPatternResultParsed(
                JSON.parse(cleanResponse, (key, value) => {
                    if (typeof value === "number" && Number.isNaN(value)) {
                        return 0;
                    }
                    return value;
                })
            );
        }
    }, [patternApiData]);

    useEffect(() => {
        if (patternChosenList.length < 1) {
            setPatternDataInputs([]);
        }
    }, [patternChosenList]);

    //Add pattern to list
    useEffect(() => {
        if (patternChosenList === null) return;
        setPatternListView(() => {
            return patternChosenList.map((e, i) => {
                return (
                    <span
                        key={i}
                        className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                        onClick={() => removePattern(i)}
                    >
                        {e}{" "}
                        <span className="circle-container">
                            <span
                                className="circle"
                                style={{ color: markerColors[i][0] }}
                            >
                                O
                            </span>{" "}
                            <span
                                className="circle"
                                style={{ color: markerColors[i][1] }}
                            >
                                O
                            </span>
                        </span>
                    </span>
                );
            });
        });
    }, [patternChosenList]);

    //Function that removes pattern from list
    const removePattern = (index) => {
        setPatternChosenList((prevState) => {
            const newState = [...prevState];
            newState.splice(index, 1);
            return newState;
        });
    };

    //////////////////////////////////////////////////////////////

    //Info to send to create charts
    //It looks very complicated  because it's long. I tried separating but
    // async stuff annoyed me so I kept as one
    useEffect(() => {
        // HISTORIC
        if (!historicApiData) return;

        let dataToHistoric = [];
        //console.log(historicApiData);
        for (let i = 0; i < historicApiData.close.length; i++) {
            let theDate = new Date(historicApiData.close_time[i]);
            let historicToPush =
                intervalState == "1d"
                    ? {
                          time: {
                              year: theDate.getUTCFullYear(),
                              month: theDate.getUTCMonth() + 1,
                              day: theDate.getUTCDate(),
                          },
                          open: parseFloat(historicApiData.open[i]),
                          high: parseFloat(historicApiData.high[i]),
                          low: parseFloat(historicApiData.low[i]),
                          close: parseFloat(historicApiData.close[i]),
                      }
                    : {
                          time: parseFloat(historicApiData.close_time[i]),
                          open: parseFloat(historicApiData.open[i]),
                          high: parseFloat(historicApiData.high[i]),
                          low: parseFloat(historicApiData.low[i]),
                          close: parseFloat(historicApiData.close[i]),
                      };
            dataToHistoric.push(historicToPush);
        }
        setHistoricDataInputs(dataToHistoric);
        ///////////////

        // INDICATORS
        let dataToIndicators = [];
        if (indicatorResultParsed.length !== 0) {
            if (indicatorResultParsed.dates.length > 0) {
                for (
                    let i = 0;
                    i < Object.keys(indicatorResultParsed.indicators).length;
                    i++
                ) {
                    let indicatorToPush = [];
                    //console.log(dataToHistoric);
                    if (indicatorResultParsed.length < 1) continue;
                    if (
                        !(
                            indicatorChosenList[i] in
                            indicatorResultParsed.indicators
                        )
                    )
                        return;

                    indicatorResultParsed.indicators[
                        indicatorChosenList[i]
                    ].map((ind, index) => {
                        // console.log(intervalState);
                        let date = new Date(historicApiData.close_time[index]);

                        let t =
                            intervalState == "1d"
                                ? {
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
                                  }
                                : {
                                      time: historicApiData.close_time[index],
                                      value: ind,
                                  };

                        if (t.time !== "NaN-NaN-NaN") indicatorToPush.push(t);
                    });
                    dataToIndicators.push(indicatorToPush);
                }
            }
        }
        setIndicatorDataInputs(dataToIndicators);

        //////////////////

        //MARKERS FOR CHART
        let dataToPatterns = [];
        //console.log("here");
        const unfilteredArray = Object.values(patternResultParsed.indicators);
        const withInfoUnfilteredArray = [];
        unfilteredArray.map((element, index) => {
            let subArrayToPush = [];
            element.map((e, i) => {
                let date = new Date(historicApiData.close_time[i]);
                let toPush = {
                    time: {
                        year: date.getUTCFullYear(),
                        month: date.getUTCMonth() + 1,
                        day: date.getUTCDate(),
                    },
                    value: e,
                    index: index,
                };
                subArrayToPush.push(toPush);
            });
            withInfoUnfilteredArray.push(subArrayToPush);
        });

        //console.log(withInfoUnfilteredArray);

        const flattenedArray = withInfoUnfilteredArray.flat();

        // Step 2: Filter out elements with a value of 0
        const filteredArray = flattenedArray.filter((item) => item.value !== 0);

        // Step 3: Sort the remaining elements by time
        dataToPatterns = filteredArray.sort((a, b) => {
            // Assuming the 'time' property is an object with 'year', 'month', and 'day' properties
            const timeA = new Date(a.time.year, a.time.month, a.time.day);
            const timeB = new Date(b.time.year, b.time.month, b.time.day);

            return timeA - timeB;
        });

        setPatternDataInputs(dataToPatterns);
    }, [indicatorResultParsed, historicApiData, patternResultParsed]);

    //This creates the graph by sending the appropriate values
    useEffect(() => {
        setChartPlan(() => {
            // console.log(historicDataInputs);
            return (
                <CreateGraph
                    historicData={historicDataInputs}
                    indicatorData={indicatorDataInputs}
                    markerData={patternDataInputs}
                    size={{
                        width: 900,
                        height: 500,
                    }}
                />
            );
        });
    }, [historicDataInputs, indicatorDataInputs, patternDataInputs]);

    //Creates a blank chart
    useEffect(() => {
        setChartPlan(() => {
            return (
                <CreateGraph
                    size={{
                        width: 900,
                        height: 500,
                    }}
                />
            );
        });
    }, []);

    useEffect(() => {
        if (!dateError) return;
        setShowDateError(
            <Alert severity="error">
                This is an error alert — check it out!
            </Alert>
        );
    }, [dateError]);

    /////////////////////////////////////////////////////////
    //This is for the autocomplete when you press enterS
    // !!!DO NOT TOUCH I HAVE NO IDEA HOW IT WORKS BUT IT DOES!!!
    useEffect(() => {
        const filtered = stockNames.filter((option) =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredOptions(filtered);
    }, [inputValue]);
    /////////////////////////////////////////////////////////

    return (
        <div className={style.body}>
            <div>{showDateError}</div>
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
                        {historicApiData ? (
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
                        ) : (
                            <></>
                        )}
                        <section
                            className="custom-screen text-gray-600 bg-transparent"
                            style={{ width: "34em" }}
                        >
                            <div className="justify-center gap-6">
                                {chartPlan !== null ? (
                                    <div className="bg-transparent relative flex-1 flex items-stretch flex-col">
                                        <div className=" space-y-4 border-b">
                                            {/* This is the chart!! */}
                                            <div>{chartPlan}</div>
                                            {/* ******************* */}
                                            <div className="flex">
                                                <div>
                                                    <div className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                        <span
                                                            aria-current="true"
                                                            className="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg dark:bg-gray-800 dark:border-gray-600"
                                                        >
                                                            Indicator List
                                                        </span>
                                                        {indicatorListView}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ml-4">
                                                        <span
                                                            aria-current="true"
                                                            className="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg dark:bg-gray-800 dark:border-gray-600"
                                                        >
                                                            Pattern List
                                                        </span>
                                                        {patternListView}
                                                    </div>
                                                </div>
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
                                    getOptionLabel={(option) => option.label} // Specify that the label should be displayed
                                    onInputChange={(event, interval) => {
                                        const selectedInterval = intervals.find(
                                            (option) =>
                                                option.label === interval
                                        );
                                        if (selectedInterval) {
                                            setIntervalState(
                                                selectedInterval.value
                                            );
                                        }
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
                                        if (value !== null)
                                            setStockSymbolState(
                                                value.stockName
                                            );
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
                                    options={indicatorList}
                                    isOptionEqualToValue={(option, value) =>
                                        option.label === value.label
                                    }
                                    onChange={(event, indicator) => {
                                        //Error handling when pressing 'x'
                                        if (indicator) {
                                            setIndicatorState(
                                                indicator.indicator
                                            );
                                        } else {
                                            setIndicatorState(null); // or set it to an appropriate default value
                                        }
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
                            <div
                                id="indicatorChoice"
                                className="mt-5"
                                style={{ width: "19em" }}
                            >
                                <Autocomplete
                                    disablePortal
                                    options={patternList}
                                    isOptionEqualToValue={(option, value) =>
                                        option.label === value.label
                                    }
                                    onChange={(event, pattern) => {
                                        //Error handling when pressing 'x'
                                        if (pattern) {
                                            setPatternState(pattern.indicator);
                                        } else {
                                            setPatternState(null);
                                        }
                                    }}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Patterns"
                                        />
                                    )}
                                />
                            </div>
                        </form>
                    </div>
                    {/* END USER INPUTS || END USER INPUTS */}
                </div>
                <div></div>
                <GridContainer
                    stock={stockSymbolState}
                    url={engineUrl}
                    start={startDateState}
                    end={endDateState}
                />
                {/* End container */}
            </div>
        </div>
    ); // End Return
} //End Graph

export default Graph;
