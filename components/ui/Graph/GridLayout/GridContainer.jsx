/**
 * Author: Ariel Cohen
 * Date: 29-05-2023
 * Description: Drag and drop element to send strategies created
 *              by the user
 */

import React, { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import indicatorList from "../indicators/indicators_params.json";

const ResponsiveGridLayout = WidthProvider(Responsive);

let keys = 0;

//I do not know why all the info gets sent to 'stock'
//as a dictionnary but I do not care now
const GridContainer = (stock, urlInfo, startInfo, endInfo) => {
    const url = stock.url;
    const start = stock.start;
    const end = stock.end;
    const [showErrorMessage, setShowErrorMessage] = useState("");
    const [goodToSaveStrategyBool, setGoodToSaveStrategyBool] = useState(false);

    const [modules, setModules] = useState([]);
    const [indicatorMenu, setIndicatorMenu] = useState(null);
    const [modifyErrorMessage, setModifyErrorMessage] = useState("");

    const [strategyName, setStrategyName] = useState("Strategy");

    const [maxCharacters, setMaxCharacters] = useState(15);
    const [maxCols, steMaxCols] = useState(7);
    const [maxRows, setMaxRows] = useState(2);

    const operators = [" + ", "-", "and", "or", "crossover"];
    const relational = ["<", ">", "="];
    const parenthesis = ["(", ")"];

    const [indicators, setIndicators] = useState([]);

    const paramsNeedingDropdown = [
        "source",
        "matype",
        "slowmatype",
        "signalmatype",
        "slowd_matype",
        "fastd_matype",
        "slowk_matype",
    ];

    const [gridAreaState, setSwitchGridState] = useState("ENTRY");
    const [layoutEntry, setLayoutEntry] = useState({
        lg: [],
        md: [],
        sm: [],
        xs: [],
        xxs: [],
    });
    const [layoutExit, setLayoutExit] = useState({
        lg: [],
        md: [],
        sm: [],
        xs: [],
        xxs: [],
    });

    const breakpoints = {
        lg: 1200,
        md: 996,
        sm: 768,
        xs: 480,
        xxs: 0,
    };

    const cols = {
        lg: maxCols,
        md: maxCols,
        sm: maxCols,
        xs: maxCols,
        xxs: maxCols,
    };

    const [itemsPositionEntry, setItemsPositionEntry] = useState([]);
    const [itemsPositionExit, setItemsPositionExit] = useState([]);

    const [selectedItem, setSelectedItem] = useState("Select...");
    const [number, setNumber] = useState();

    const [exposure, setExposure] = useState(1000);

    const [stopLoss, setStopLoss] = useState({ status: 1, value: "3" });
    const [takeProfit, setTakeProfit] = useState({ status: 1, value: "10" });
    const [trailingStop, setTrailingStop] = useState({ status: 1, value: "3" });
    const [security, setSecurity] = useState();

    const [deletePressed, setDeletePressed] = useState(null);
    const [modifyPressed, setModifyPressed] = useState(null);
    const [modifyNumberPressed, setModifyNumberPressed] = useState(null);
    const [modifyingNumber, setModifyingNumber] = useState();
    const [numberModifyArea, setNumberModifyArea] = useState(null);
    const [inModify, setInModify] = useState(-1);

    const [requestBody, setRequestBody] = useState(null);

    //Populates the indicator dropdown
    useEffect(() => {
        const toReturn = [];
        indicatorList.forEach((data) => {
            let toPush = {
                value: data.indicator_name,
                text: data.indicator_name_aff,
            };
            toReturn.push(toPush);
        });
        setIndicators(toReturn);
    }, []);

    const reverseListOrder = (list) => {
        let listToReturn = [];
        for (let i = list.length - 1; i >= 0; i--) {
            listToReturn.push(list[i]);
        }
        return listToReturn;
    };

    const createRequestBody = () => {
        const entries = layoutEntry.lg;
        // .reduce((acc, item) => {
        //     if (itemsPositionEntry.includes(item.i)) {
        //         acc.push(layoutEntry.lg.find((entry) => entry.i === item.i));
        //     }
        //     return acc;
        // }, []);

        const exits = layoutExit.lg;
        // .reduce((acc, item) => {
        //     if (itemsPositionExit.includes(item.i)) {
        //         acc.push(layoutExit.lg.find((exit) => exit.i === item.i));
        //     }
        //     return acc;
        // }, []);

        const exitLogic = [];
        const exitIndicator = [];
        exits.forEach((item) => {
            if (item.type === "indicator") {
                if (item.parameters !== undefined) {
                    const dictionary = item.parameters.reduce((acc, obj) => {
                        acc[obj.param] = obj.value;
                        return acc;
                    }, {});
                    const obj = { [item.i]: dictionary };
                    exitLogic.push(obj);
                    exitIndicator.push(obj);
                }
            }
            if (item.type === "operator") {
                const operator = " " + item.i + " ";
                exitLogic.push({ [operator]: {} });
            }
            if (item.type === "number") {
                const number = item.i;
                const numb = {
                    [number]: {
                        num: number.toString(),
                    },
                };
                exitLogic.push(numb);
            }
        });

        const entryLogic = [];
        const entryIndicator = [];
        entries.forEach((item) => {
            if (item.type === "indicator") {
                //console.log(item.parameters === undefined);
                if (item.parameters !== undefined) {
                    const dictionary = item.parameters.reduce((acc, obj) => {
                        acc[obj.param] = obj.value;
                        return acc;
                    }, {});
                    const obj = { [item.i]: dictionary };
                    entryLogic.push(obj);
                    entryIndicator.push(obj);
                }
            }
            if (item.type === "operator") {
                const operator = " " + item.i + " ";
                entryLogic.push({ [operator]: {} });
            }
            if (item.type === "number") {
                const number = item.i;
                const numb = {
                    [number]: {
                        num: number.toString(),
                    },
                };
                entryLogic.push(numb);
            }
        });

        const entryOrder = reverseListOrder(entryLogic);
        const exitOrder = reverseListOrder(exitLogic);
        const entryIndiOrder = reverseListOrder(entryIndicator);
        const exitIndiOrder = reverseListOrder(exitIndicator);

        const strategy = {
            EXIT: {
                LOGIC: exitOrder,
                EXPOSURE: exposure,
                INDICATORS: exitIndiOrder,
            },
            ENTRY: {
                LOGIC: entryOrder,
                EXPOSURE: exposure,
                INDICATORS: entryIndiOrder,
            },
            SECURITY: {
                stop_loss: stopLoss,
                take_profit: takeProfit,
                trailing_stop: trailingStop,
            },
        };

        //console.log(strategy);

        const reqBody = {
            strategy: JSON.stringify(strategy),
            stock: stock.stock,
            start_date: stock.start,
            end_date: stock.end,
        };
        //console.log(reqBody);
        setRequestBody(reqBody);
    };

    useEffect(() => {
        if (requestBody === null) return;
        fetch(stock.url, {
            headers: {
                "Content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(requestBody),
        })
            .then((response) => {
                if (response.status === 200) return response.json();
                else console.log("not good");
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [requestBody]);

    //Handle whenever dragging an item.
    //Updates the list based on the x position
    const handleGridItemDragStop = (layout, area) => {
        const rows = {};
        for (const item of layout) {
            const { y } = item;
            if (!rows[y]) {
                rows[y] = [];
            }
            rows[y].push(item);
        }

        // Step 2: Sort each row by 'x' coordinate
        for (const y in rows) {
            rows[y].sort((a, b) => a.x - b.x);
        }

        // Step 3: Flatten the sorted rows into a single list
        const sortedItems = Object.values(rows).reduce(
            (result, row) => [...result, ...row],
            []
        );

        let newLayout = [];
        if (area === "ENTRY") {
            for (let i = 0; i < sortedItems.length; i++) {
                for (let j = 0; j < layoutEntry.lg.length; j++) {
                    if (sortedItems[i].i === layoutEntry.lg[j].key) {
                        newLayout.push(layoutEntry.lg[j]);
                    }
                }
            }
            setItemsPositionEntry(newLayout);
        } else if (area === "EXIT") {
            for (let i = 0; i < sortedItems.length; i++) {
                for (let j = 0; j < layoutExit.lg.length; j++) {
                    if (sortedItems[i].i === layoutExit.lg[j].key) {
                        newLayout.push(layoutExit.lg[j]);
                    }
                }
            }
            setItemsPositionExit(newLayout);
        }
        //console.log(sortedItems);
    };

    //Show and hide Delete and Modify menu when hovering on item
    const handleGridItemHover = (area, index, isHovered) => {
        let updatedLayout;
        // console.log(area);
        if (area === "ENTRY") {
            updatedLayout = { ...layoutEntry };
            updatedLayout.lg[index].isHovered = isHovered;
            setLayoutEntry(updatedLayout);
        } else if (area === "EXIT") {
            updatedLayout = { ...layoutExit };
            updatedLayout.lg[index].isHovered = isHovered;
            setLayoutExit(updatedLayout);
        }
    };

    //Delete Item depending on the index
    const handleGridItemDelete = (area, index) => {
        setShowErrorMessage("");
        let updatedLayout;
        if (area === "ENTRY") {
            updatedLayout = { ...layoutEntry };
            updatedLayout.lg.splice(index, 1);
            setLayoutEntry(updatedLayout);
        } else if (area === "EXIT") {
            updatedLayout = { ...layoutExit };
            updatedLayout.lg.splice(index, 1);
            setLayoutExit(updatedLayout);
        }
        handleGridItemDragStop(updatedLayout.lg, area);
    };

    //This will check that the equation is in order
    //For example:
    // + < RSI > EMA AVG => Not good
    // RSI + AVG = EMA => Good
    const handleStrategyCorrectness = () => {
        const entryList = itemsPositionEntry;
        const exitList = itemsPositionExit;

        let errorMessageHandle = "";

        if (entryList.length < 2)
            errorMessageHandle = errorMessageHandle.concat(
                `The entry list does not have enough items. `
            );
        if (exitList.length < 2)
            errorMessageHandle = errorMessageHandle.concat(
                `The exit list does not have enough items. `
            );

        // console.log(entryList);
        // console.log(exitList);

        errorMessageHandle = errorMessageHandle.concat(
            handleCorrectStrategy(entryList, "entry")
        );
        errorMessageHandle = errorMessageHandle.concat(
            handleCorrectStrategy(exitList, "exit")
        );

        errorMessageHandle = errorMessageHandle.concat(
            handleParentheses(entryList, "entry")
        );
        errorMessageHandle = errorMessageHandle.concat(
            handleParentheses(exitList, "exit")
        );
        if (inModify < -1) {
            errorMessageHandle = errorMessageHandle.concat(
                handleStrategyName()
            );
        }

        setShowErrorMessage(errorMessageHandle);

        if (errorMessageHandle === "") {
            setGoodToSaveStrategyBool(true);
            createRequestBody();
        }
    };

    const handleCorrectStrategy = (itemList, area) => {
        //Makes sure there are more than 2 items on grid
        //If the first or second item is an operator, not good
        //console.log(itemList);
        if (operators.includes(itemList[0]))
            return ` There is an operator at the begining of ${area} grid. `;
        else if (operators.includes(itemList[itemList.length - 1]))
            return `There is an operator at the end ${area} grid. `;
        if (relational.includes(itemList[0]))
            return `There is a relational at the begining of ${area} grid. `;
        else if (relational.includes(itemList[itemList.length - 1]))
            return `There is a relational at the end of ${area} grid. `;
        //Iterate through the items

        let relationalCount = 0;

        console.log(area);
        console.log(itemList);

        for (let i = 1; i < itemList.length; i++) {
            if (relational.includes(itemList[i].i)) {
                relationalCount++;
            }
            //If the item is an operator...
            if (operators.includes(itemList[i])) {
                const previousItem = itemList[i - 1];
                if (operators.includes(previousItem))
                    //If it's followed by another operator, not good
                    return `There are operators following each other in the ${area} grid `;
            }
            //If the item is an indicator...
            else if (indicators.some((item) => item.value === itemList[i])) {
                const previousItem = itemList[i - 1];
                if (
                    indicators.some((item) => item.value === previousItem) //If the previous Item is also and indicator, not good
                )
                    return `There are indicators following each other in the ${area} grid. `;
            }
        }

        if (relationalCount === 0)
            return ` Missing a relational operator (<, >, =) in the ${area} grid. `;
        // If it passes all checks, it's good!
        return "";
    };

    //Parenthesis error handling
    const handleParentheses = (itemList, area) => {
        const stack = [];
        for (const item of itemList) {
            if (item === "(") {
                stack.push("(");
            } else if (item === ")") {
                if (stack.length === 0 || stack.pop() !== "(") {
                    return ` There are parentheses in the wrong order in the ${area} grid. `;
                }
            }
        }

        if (stack.length > 0) {
            return ` Missing right parentheses in the ${area} grid. `;
        } else {
            return "";
        }
    };

    //Makes sure two strategies don't have the same name.
    const handleStrategyName = () => {
        let toReturn = "";
        const checkModules = modules;
        if (checkModules.some((item) => item.name === strategyName)) {
            toReturn = toReturn.concat(
                "Cannot have two strategies with the same name. "
            );
        }
        return toReturn;
    };

    //Add item from dropdown to grid
    const handleItemAddToGrid = (event, area) => {
        setShowErrorMessage("");
        let updatedLayout;
        if (gridAreaState === "ENTRY") {
            updatedLayout = { ...layoutEntry };
        } else if (gridAreaState === "EXIT") {
            updatedLayout = { ...layoutExit };
        }
        //console.log(updatedLayout);
        //If it reached the max amount of items, the item will not be added

        //Creation of new item.
        const selectedItemValue = event.target.value;
        const selectedItemName = event.target[event.target.selectedIndex].text;
        const selectedItemType = event.target.name;
        let newItem = null;

        if (selectedItemType === "indicators") {
            newItem = createNewIndicator(
                selectedItemValue,
                selectedItemName,
                gridAreaState,
                getParamsFromJson(selectedItemValue)
            );
            showIndicatorModifyMenu(newItem);
        } else {
            newItem = createNewOperator(
                selectedItemValue,
                selectedItemName,
                gridAreaState
            );
        }
        if (updatedLayout.lg.length >= maxCols) {
            newItem.y += 1;
        }
        if (updatedLayout.lg.length === maxCols * 2) {
            setShowErrorMessage("Grid is full.");
            return;
        }
        //Add new item to grid
        updatedLayout.lg.push(newItem);
        if (gridAreaState === "ENTRY") setLayoutEntry(updatedLayout);
        else if (gridAreaState === "EXIT") setLayoutExit(updatedLayout);
        handleGridItemDragStop(updatedLayout.lg, gridAreaState);
    };

    //Text that defines the max and min of some parameters in indicators
    const constraintText = (conditionParam) => {
        const condition = conditionParam[0];
        const keys = Object.keys(condition);

        if (!("MAX" in condition)) return;

        let textToReturn = "";
        keys.forEach((key) => {
            if (key !== "DEFAULT") {
                textToReturn = textToReturn.concat(
                    key + ": " + condition[key] + " | "
                );
            }
        });
        return <span>{textToReturn}</span>;
    };

    // Div to modify the number
    const showNumberModifyMenu = (numberItem) => {
        //console.log(numberItem);
        if (numberItem.type === "number") {
            setIndicatorMenu(
                <div
                    style={{
                        minWidth: "300px",
                        zIndex: "100",
                        border: "1px solid",
                        background: "white",
                        position: "absolute",
                        top: "120%",
                        left: "50%",
                        transform: "translateX(-50%) translateY(-50%)",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <h5 style={{ margin: "0 0.9em" }}>
                            Number: {numberItem.name}
                        </h5>
                        <input
                            style={{ paddingTop: "2px" }}
                            type="button"
                            value="X"
                            onClick={closeModifySetting} //
                        />
                    </div>
                    <br />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyItems: "left",
                            alignItems: "center",
                            marginBottom: "2em",
                        }}
                    >
                        <form>
                            <label style={{ marginTop: "5px" }}>Number</label>
                            <br />
                            <input
                                type="text"
                                // style={{ marginBottom: "1em" }}
                                placeholder={numberItem.value}
                                // value={modifyingNumber}
                                onChange={(e) => {
                                    setModifyingNumber(e.target.value);
                                }}
                            />
                            <input
                                type="button"
                                value="Submit"
                                style={{ marginTop: "10px" }}
                                onClick={(e) => {
                                    // setDeletePressed(numberItem);
                                    // addNumberToGrid(numberItem.area);
                                    setModifyNumberPressed(numberItem);
                                }}
                            />
                        </form>
                    </div>
                </div>
            );
            return;
        }
    };

    //Modify number submit detection
    useEffect(() => {
        if (modifyNumberPressed === null) return;
        modifyNumber(modifyNumberPressed);
        setModifyNumberPressed(null);
        setIndicatorMenu(null);
    }, [modifyNumberPressed]);

    //Modify the number by deleting and making a new number item
    const modifyNumber = (itemToModify) => {
        let updatedLayout;

        if (itemToModify.area === "ENTRY") {
            updatedLayout = { ...layoutEntry };
        } else if (itemToModify.area === "EXIT") {
            updatedLayout = { ...layoutExit };
        }
        // console.log(updatedLayout.lg[0].i);
        // console.log(item.i);

        let index = -1;
        for (var i = 0; i < updatedLayout.lg.length; i++) {
            if (updatedLayout.lg[i]["name"] === itemToModify.name) {
                index = i;
            }
        }
        // console.log(index);
        handleGridItemDelete(itemToModify.area, index);
        setNumber(modifyingNumber);
        setNumberModifyArea(itemToModify.area);

        // console.log("Index of: " + index);
    };

    // Reset the number modify area once number is added
    useEffect(() => {
        if (numberModifyArea === null) return;
        addNumberToGrid(numberModifyArea);
        setNumberModifyArea(null);
    }, [numberModifyArea]);

    //Creates the modify menu for the items on the grid
    const showIndicatorModifyMenu = (indicatorItem) => {
        //console.log(indicatorItem);
        if (
            indicatorItem.parameters === undefined ||
            indicatorItem.parameters === null
        )
            return;
        const parameters = indicatorItem.parameters;
        //console.log(parameters);
        const indicator = indicatorList.find(
            (i) => i.indicator_name === indicatorItem.i.toString()
        );

        //Div to be rendered to show menu
        setIndicatorMenu(
            <div
                style={{
                    minWidth: "300px",
                    zIndex: "100",
                    border: "1px solid",
                    background: "white",
                    position: "absolute",
                    top: "120%",
                    left: "50%",
                    transform: "translateX(-50%) translateY(-50%)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <h5 style={{ margin: "0 0.9em" }}>
                        {indicator.indicator_name_aff}
                    </h5>
                    <input
                        type="button"
                        value="X"
                        onClick={closeModifySetting} //
                    />
                </div>
                <br />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyItems: "left",
                        alignItems: "center",
                        marginBottom: "2em",
                    }}
                >
                    <form>
                        {parameters.map((item, index) => (
                            <div key={index}>
                                <label
                                    htmlFor={item.param}
                                    style={{ marginTop: "5px" }}
                                >
                                    {item.param}
                                    <br />
                                    {constraintText(item.conditions)}
                                </label>
                                <br />

                                {paramsNeedingDropdown.indexOf(item.param) >=
                                0 ? (
                                    <select
                                        style={{ marginTop: "5px" }}
                                        id={item.param}
                                        onChange={(event) => {
                                            handleItemSelect(
                                                parameters,
                                                event.target.value
                                            );
                                        }}
                                    >
                                        {item.conditions[0].VALUES.map(
                                            (keys) => {
                                                let toAdd = [];
                                                if (item.param === "source") {
                                                    toAdd.push(keys);
                                                } else {
                                                    for (let k in keys) {
                                                        toAdd.push(k);
                                                    }
                                                }
                                                return toAdd.map((v, i) => (
                                                    <option key={i}>{v}</option>
                                                ));
                                            }
                                        )}
                                    </select>
                                ) : (
                                    <input
                                        id={item.param}
                                        type="text"
                                        // style={{ marginBottom: "1em" }}
                                        placeholder={item.value}
                                    />
                                )}
                            </div>
                        ))}
                        <input
                            type="button"
                            value="Submit"
                            style={{ marginTop: "10px" }}
                            onClick={() =>
                                handleParamInfoVerification(parameters)
                            }
                        />
                    </form>
                </div>
            </div>
        );
    };

    //Clears the grid... hence the name of the function
    const clearGrid = () => {
        setLayoutEntry({
            lg: [],
            md: [],
            sm: [],
            xs: [],
            xxs: [],
        });
        setLayoutExit({
            lg: [],
            md: [],
            sm: [],
            xs: [],
            xxs: [],
        });
        setShowErrorMessage("");
    };

    //This creates a new indicator item
    const createNewIndicator = (value, name, area, param) => {
        const newIndicator = {
            parameters: param,
            key: value + keys,
            name: name,
            type: "indicator",
            area: area,
            i: value,
            x: 0,
            y: 0,
            w: 1,
            h: 1,
        };
        keys++;
        return newIndicator;
    };

    //This creates a new operator item
    const createNewOperator = (value, name, area) => {
        const newOperator = {
            key: value + keys,
            name: name,
            type: "operator",
            area: area,
            i: value,
            x: 0,
            y: 0,
            w: 1,
            h: 1,
        };
        keys++;
        return newOperator;
    };

    //And this creates a new number item.
    const createNewNumber = (value, name, area) => {
        const newNumber = {
            key: value + keys,
            name: name,
            type: "number",
            area: area,
            i: value,
            x: 0,
            y: 0,
            w: 1,
            h: 1,
        };
        keys++;
        return newNumber;
    };

    const getParamsFromJson = (item) => {
        const indicator = indicatorList.find((i) => i.indicator_name === item);
        const parsedParameters = JSON.parse(indicator.indicator_default_para);
        if (parsedParameters === null) return;
        const parsedParametersKeys = Object.keys(parsedParameters);
        const parsedParametersValues = Object.values(parsedParameters);

        //creates a list of the parameters wth respecting attributes
        const parameters = [];
        for (let i = 0; i < parsedParametersKeys.length; i++) {
            parameters.push({
                param: parsedParametersKeys[i],
                conditions: parsedParametersValues[i],
                value: 0,
            });
        }
        return parameters;
    };

    const handleItemSelect = (parameters, itemParam) => {
        return parameters.find((element) => element.param === itemParam);
    };

    const closeModifySetting = () => {
        setIndicatorMenu(null);
        setModifyErrorMessage("");
    };

    const handleParamInfoVerification = (parameters) => {
        const decimalRegex = /^-?\d+(\.\d+)?$/;
        let passed = true;
        //console.log(parameters);
        parameters.forEach((item) => {
            if (!paramsNeedingDropdown.includes(item.param)) {
                if (!passed) return null;
                let value = document.getElementById(item.param).value;
                if (!decimalRegex.test(value)) {
                    setModifyErrorMessage(
                        "Make sure to only input decimal numbers where needed."
                    );
                    passed = false;
                }
            }
        });

        if (!passed) return;

        parameters.forEach((item) => {
            let value = document.getElementById(item.param).value;
            let check = handleConstraints(value, item.conditions[0]);
            if (!check) {
                setModifyErrorMessage(
                    "Verify the MAX and MIN of the values inputed."
                );
                passed = false;
            }
        });

        if (!passed) return;

        parameters.forEach((item) => {
            let value = document.getElementById(item.param).value;
            if (value <= 0) item.value = 0;
            item.value = value;
        });
        //console.log(parameters);
        closeModifySetting();
    };

    const handleConstraints = (value, constraints) => {
        if (value < constraints["MIN"] || value > constraints["MAX"])
            return false;
        else return true;
    };

    const addNumberToGrid = (area, value = number) => {
        //console.log(area);
        let newNumber = createNewNumber(value, value, area);
        // console.log(number);

        let updatedLayout;
        if (area === "ENTRY") {
            updatedLayout = { ...layoutEntry };
        } else if (area === "EXIT") {
            updatedLayout = { ...layoutExit };
        }

        //console.log(updatedLayout);
        updatedLayout.lg.push(newNumber);
        if (area === "ENTRY") setLayoutEntry(updatedLayout);
        else if (area === "EXIT") setLayoutExit(updatedLayout);
        handleGridItemDragStop(updatedLayout.lg, area);
        setNumber("");
    };

    const makeStrategy = (layout) => {
        return layout.map((item) => ({
            name: item.name,
            value: item.i,
            param: item.parameters,
            area: item.area,
            type: item.type,
        }));
    };

    //Module/Strategy creation
    useEffect(() => {
        //console.log(itemsPositionEntry);
        if (!goodToSaveStrategyBool) return;

        const modulesArray = modules;

        let entryText = "";
        itemsPositionEntry.forEach((item) => {
            entryText = entryText.concat(item.i + " ");
        });

        let exitText = "";
        itemsPositionExit.forEach((item) => {
            exitText = exitText.concat(item.i + " ");
        });

        //console.log(itemsPositionEntry);

        const newModule = {
            name: strategyName,
            value: {
                ENTRY: makeStrategy(itemsPositionEntry),
                EXIT: makeStrategy(itemsPositionExit),
            },
            text: (
                <span>
                    Entry: {entryText}
                    <br />
                    Exit: {exitText}
                </span>
            ),
        };

        if (inModify > -1) {
            modulesArray[inModify] = newModule;
            setInModify(-1);
        } else {
            modulesArray.push(newModule);
        }

        //console.log(modulesArray);

        setItemsPositionEntry([]);
        setItemsPositionExit([]);
        setModules(modulesArray);
        setGoodToSaveStrategyBool(false);
        clearGrid();
    }, [goodToSaveStrategyBool]);

    //Delete Strategy
    useEffect(() => {
        if (deletePressed === null) return;
        let index = deletePressed;
        const updatedModules = modules;
        updatedModules.splice(index, 1);
        setModules(updatedModules);
        setDeletePressed(null);
    }, [deletePressed]);

    //Modify button on a Strategy Module
    useEffect(() => {
        clearGrid();
        if (modifyPressed === null) return;
        // console.log(layoutEntry);
        // console.log(layoutExit);
        const index = modifyPressed;
        //console.log(modules);

        let values = modules[index].value;

        let updatedLayoutEntry = { ...layoutEntry };
        let updatedLayoutExit = { ...layoutExit };

        const entry = values.ENTRY;
        const exit = values.EXIT;

        //console.log(entry);

        for (let i = entry.length - 1; i >= 0; i--) {
            let data = entry[i];
            if (data.type === "number") {
                addNumberToGrid(data.area, data.name);
                //console.log(data);
            } else if (data.type === "indicator") {
                updatedLayoutEntry.lg.push(
                    createNewIndicator(
                        data.value,
                        data.name,
                        data.area,
                        data.param
                    )
                );
            } else {
                updatedLayoutEntry.lg.push(
                    createNewOperator(data.value, data.name, data.area)
                );
            }
        }

        for (let i = exit.length - 1; i >= 0; i--) {
            let data = exit[i];
            if (data.type === "number") {
                addNumberToGrid(data.area, data.name);
                //console.log(data);
            } else if (data.type === "indicator") {
                updatedLayoutExit.lg.push(
                    createNewIndicator(
                        data.value,
                        data.name,
                        data.area,
                        data.param
                    )
                );
            } else {
                updatedLayoutExit.lg.push(
                    createNewOperator(data.value, data.name, data.area)
                );
            }
        }

        setLayoutEntry(updatedLayoutEntry);
        setLayoutExit(updatedLayoutExit);
        setStrategyName(modules[index].name);
        // setDeletePressed(index);
        setInModify(index);
        setModifyPressed(null);
    }, [modifyPressed]);

    const strategyModuleView = (item, index) => {
        //console.log(item);
        return (
            <div
                style={{
                    width: "19em",
                    marginBottom: "1em",
                    border: "1px solid",
                }}
                key={index}
            >
                <div style={{ display: "flex" }}>
                    <h4 style={{ width: "300px" }}>{item.name}</h4>
                    <input
                        type="button"
                        value="Delete"
                        style={{
                            height: "30px",
                            marginTop: "0.6em",
                            marginRight: "0.6em",
                            marginLeft: "auto",
                        }}
                        onClick={() => setDeletePressed(index)}
                    />
                    <input
                        type="button"
                        value="Modify"
                        style={{
                            height: "30px",
                            marginTop: "0.6em",
                            marginRight: "0.6em",
                            marginLeft: "auto",
                        }}
                        onClick={() => setModifyPressed(index)}
                    />
                </div>
                <p>{item.text}</p>
            </div>
        );
    };

    return (
        <div>
            <div>{indicatorMenu}</div>

            <div style={{ margin: "120px 300px" }}>
                <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-6xl">
                    Strategies Creation
                </h1>{" "}
                {/* Grid and Items */}
                <div>
                    <input
                        type="radio"
                        id="entry"
                        name="entry_exit"
                        value="ENTRY"
                        checked={gridAreaState === "ENTRY"}
                        onChange={() => setSwitchGridState("ENTRY")}
                    />
                    <label htmlFor="entry">Entry</label>
                    <br />
                    <input
                        type="radio"
                        id="exit"
                        name="entry_exit"
                        value="EXIT"
                        checked={gridAreaState === "EXIT"}
                        onChange={() => setSwitchGridState("EXIT")}
                    />
                    <label htmlFor="exit">Exit</label>
                </div>
                <div
                    className="grid-container"
                    style={{
                        width: "1000px",
                        height: "160px",
                        position: "relative",
                        border: "2px solid",
                    }}
                >
                    <h5>ENTRY</h5>
                    <ResponsiveGridLayout
                        className="layout"
                        layouts={layoutEntry}
                        breakpoints={breakpoints}
                        cols={cols}
                        rowHeight={50}
                        maxRows={maxRows}
                        draggableHandle=".drag-handle"
                        compactType="horizontal"
                        isResizable={false}
                        onDragStop={(layout) =>
                            handleGridItemDragStop(layout, "ENTRY")
                        }
                        style={{ userSelect: "none" }}
                    >
                        {layoutEntry.lg.map((item, index) => (
                            <div key={item.key} data-grid={item}>
                                <div
                                    onDoubleClick={(event) =>
                                        event.preventDefault()
                                    }
                                    style={{
                                        display: "flex",
                                        userSelect: "none",
                                    }}
                                >
                                    {/* Delete Button */}
                                    <div
                                        className={
                                            item.isHovered ? "active" : "hidden"
                                        }
                                        onMouseEnter={() =>
                                            handleGridItemHover(
                                                item.area,
                                                index,
                                                true
                                            )
                                        }
                                        onMouseLeave={() =>
                                            handleGridItemHover(
                                                item.area,
                                                index,
                                                false
                                            )
                                        }
                                        onClick={() =>
                                            handleGridItemDelete(
                                                item.area,
                                                index
                                            )
                                        }
                                        onDoubleClick={(event) =>
                                            event.preventDefault()
                                        }
                                        style={{
                                            marginTop: "-28px",
                                            paddingLeft: "1px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "3.2em",
                                                background: "white",
                                                border: "1px dashed",
                                                marginBottom: "2px",
                                                userSelect: "none",
                                            }}
                                        >
                                            Delete
                                        </div>
                                    </div>
                                    {/* Modify Button */}
                                    {(item.type === "indicator" ||
                                        item.type === "number") && (
                                        <div
                                            className={
                                                item.isHovered
                                                    ? "active"
                                                    : "hidden"
                                            }
                                            onMouseEnter={() =>
                                                handleGridItemHover(
                                                    item.area,
                                                    index,
                                                    true
                                                )
                                            }
                                            onMouseLeave={() =>
                                                handleGridItemHover(
                                                    item.area,
                                                    index,
                                                    false
                                                )
                                            }
                                            onDoubleClick={(event) =>
                                                event.preventDefault()
                                            }
                                            onClick={() => {
                                                if (item.type === "indicator") {
                                                    showIndicatorModifyMenu(
                                                        item
                                                    );
                                                } else {
                                                    showNumberModifyMenu(item);
                                                }
                                            }}
                                            style={{
                                                marginTop: "-28px",
                                                paddingLeft: "1px",
                                                userSelect: "none",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: "3.2em",
                                                    background: "white",
                                                    border: "1px dashed",
                                                    marginBottom: "2px",
                                                }}
                                                onDoubleClick={(event) =>
                                                    event.preventDefault()
                                                }
                                            >
                                                Modify
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* Item shown on grid */}
                                <div className="grid-item">
                                    <div
                                        className="drag-handle"
                                        onMouseEnter={() => {
                                            handleGridItemHover(
                                                item.area,
                                                index,
                                                true
                                            );
                                        }}
                                        onMouseLeave={() =>
                                            handleGridItemHover(
                                                item.area,
                                                index,
                                                false
                                            )
                                        }
                                        onDoubleClick={(event) =>
                                            event.preventDefault()
                                        }
                                        style={{
                                            border: "1px solid",
                                            background: "white",
                                            textAlign: "center",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        {item.i}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ResponsiveGridLayout>
                </div>
                <div
                    className="grid-container"
                    style={{
                        width: "1000px",
                        height: "150px",
                        position: "relative",
                        border: "2px solid",
                    }}
                >
                    <h5>EXIT</h5>
                    <ResponsiveGridLayout
                        className="layout"
                        layouts={layoutExit}
                        breakpoints={breakpoints}
                        cols={cols}
                        rowHeight={50}
                        maxRows={maxRows}
                        draggableHandle=".drag-handle"
                        compactType="horizontal"
                        isResizable={false}
                        onDragStop={(layout) =>
                            handleGridItemDragStop(layout, "EXIT")
                        }
                        style={{ userSelect: "none" }}
                    >
                        {layoutExit.lg.map((item, index) => (
                            <div key={item.key} data-grid={item}>
                                <div
                                    onDoubleClick={(event) =>
                                        event.preventDefault()
                                    }
                                    style={{
                                        display: "flex",
                                        userSelect: "none",
                                    }}
                                >
                                    {/* Delete Button */}
                                    <div
                                        className={
                                            item.isHovered ? "active" : "hidden"
                                        }
                                        onMouseEnter={() => {
                                            handleGridItemHover(
                                                item.area,
                                                index,
                                                true
                                            );
                                        }}
                                        onMouseLeave={() =>
                                            handleGridItemHover(
                                                item.area,
                                                index,
                                                false
                                            )
                                        }
                                        onClick={() =>
                                            handleGridItemDelete(
                                                item.area,
                                                index
                                            )
                                        }
                                        onDoubleClick={(event) =>
                                            event.preventDefault()
                                        }
                                        style={{
                                            marginTop: "-28px",
                                            paddingLeft: "1px",

                                            // border: "1px solid",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "3.2em",
                                                background: "white",
                                                border: "1px dashed",
                                                marginBottom: "2px",
                                                userSelect: "none",
                                            }}
                                        >
                                            Delete
                                        </div>
                                    </div>
                                    {/* Modify Button */}
                                    {(item.type === "indicator" ||
                                        item.type === "number") && (
                                        <div
                                            className={
                                                item.isHovered
                                                    ? "active"
                                                    : "hidden"
                                            }
                                            onMouseEnter={() =>
                                                handleGridItemHover(
                                                    item.area,
                                                    index,
                                                    true
                                                )
                                            }
                                            onMouseLeave={() =>
                                                handleGridItemHover(
                                                    index,
                                                    false
                                                )
                                            }
                                            onDoubleClick={(event) =>
                                                event.preventDefault()
                                            }
                                            onClick={() => {
                                                if (item.type === "indicator") {
                                                    showIndicatorModifyMenu(
                                                        item
                                                    );
                                                } else {
                                                    showNumberModifyMenu(item);
                                                }
                                            }}
                                            style={{
                                                marginTop: "-28px",
                                                paddingLeft: "1px",
                                                userSelect: "none",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: "3.2em",
                                                    background: "white",
                                                    border: "1px dashed",
                                                    marginBottom: "2px",
                                                }}
                                                onDoubleClick={(event) =>
                                                    event.preventDefault()
                                                }
                                            >
                                                Modify
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* Item shown on grid */}
                                <div className="grid-item">
                                    <div
                                        className="drag-handle"
                                        onMouseEnter={() => {
                                            handleGridItemHover(
                                                item.area,
                                                index,
                                                true
                                            );
                                        }}
                                        onMouseLeave={() =>
                                            handleGridItemHover(
                                                item.area,
                                                index,
                                                false
                                            )
                                        }
                                        onDoubleClick={(event) =>
                                            event.preventDefault()
                                        }
                                        style={{
                                            border: "1px solid",
                                            background: "white",
                                            textAlign: "center",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        {item.i}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ResponsiveGridLayout>
                </div>
                {/* Dropdowns to add items and Strategy View*/}
                <div style={{ display: "flex" }}>
                    <div>
                        <form
                            style={{ margin: "10px 0px" }}
                            className="grid-form"
                        >
                            <label
                                htmlFor="indicators"
                                className="grid-form-label"
                            >
                                Indicators
                            </label>
                            <select
                                name="indicators"
                                id="indicators"
                                value={selectedItem}
                                onChange={(event) => {
                                    handleItemAddToGrid(event, gridAreaState);
                                }}
                                style={{ marginLeft: "5px" }}
                            >
                                <option>Select...</option>
                                {indicators.map((item) => (
                                    <option value={item.value} key={item.value}>
                                        {item.text}
                                    </option>
                                ))}
                            </select>
                            <br />
                            <label
                                htmlFor="operators"
                                className="grid-form-label"
                            >
                                Operators
                            </label>
                            <select
                                name="operators"
                                id="oprators"
                                value={selectedItem}
                                onChange={(event) => {
                                    handleItemAddToGrid(event, gridAreaState);
                                }}
                                style={{ marginLeft: "5px" }}
                            >
                                <option>Select...</option>
                                {operators.map((item) => (
                                    <option value={item} key={item}>
                                        {item}
                                    </option>
                                ))}
                                {parenthesis.map((item) => (
                                    <option value={item} key={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                            <label
                                htmlFor="operators"
                                className="grid-form-label"
                            >
                                Relational
                            </label>
                            <select
                                name="relational"
                                id="relational"
                                value={selectedItem}
                                onChange={(event) => {
                                    handleItemAddToGrid(event, gridAreaState);
                                }}
                                style={{ marginLeft: "5px" }}
                            >
                                <option>Select...</option>
                                {relational.map((item) => (
                                    <option value={item} key={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                            <label
                                htmlFor="number"
                                className="grid-form-label"
                                style={{ marginRight: "5px" }}
                            >
                                Number
                            </label>
                            <input
                                type="text"
                                value={number}
                                onChange={(e) => {
                                    setNumber(e.target.value);
                                }}
                                style={{ marginTop: "5px" }}
                                maxLength={maxCharacters}
                            />
                            <input
                                type="button"
                                value="Add Number"
                                onClick={() => addNumberToGrid(gridAreaState)}
                            />
                        </form>
                    </div>
                </div>
                <br />
                <div>
                    <label style={{ marginRight: "10px" }}>
                        Strategy Name:{" "}
                    </label>
                    <input
                        type="text"
                        value={strategyName}
                        onChange={(e) => setStrategyName(e.target.value)}
                        style={{ marginRight: "5px" }}
                        maxLength={maxCharacters}
                    />
                    <input
                        type="button"
                        value="Save Strategy"
                        onClick={handleStrategyCorrectness}
                    />
                    <input
                        type="button"
                        value="Clear Grid"
                        onClick={clearGrid}
                        style={{ marginLeft: "9em" }}
                    />
                    <br />
                    <span style={{ color: "red" }}>{modifyErrorMessage}</span>
                    <br />
                    <p style={{ color: "red" }}>{showErrorMessage}</p>
                    <div>
                        {modules.map((item, index) =>
                            strategyModuleView(item, index)
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridContainer;
