//Returns indicatorApiData
useEffect(() => {
    //console.log("return indicatorApiData");
    const sendReqBody = {
        indicators: indicatorChosenList,
        symbol: stockSymbolState,
        start_date: startDateState,
        end_date: endDateState,
        interval: intervalState,
    };

    fetch(indicatorUrl, {
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
//////////////////////////////////////////////////////////////

useEffect(() => {
    if (indicatorChosenList.length < 1) {
        setIndicatorDataInputs([]);
    }
}, [indicatorChosenList]);
