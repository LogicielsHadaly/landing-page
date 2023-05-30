import React, { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "../style/dragNdrop.module.css";
import indicatorList from "./indicators_params.json";

const ResponsiveGridLayout = WidthProvider(Responsive);

let keys = 0;

const GridContainer = ({ stock, url }) => {
    const [breakpointSize, setBreakpointSize] = useState();

    const [errorMessage, setErrorMessage] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState("");
    const [goodToSaveStrategyBool, setGoodToSaveStrategyBool] = useState(false);

    const [modules, setModules] = useState([]);
    const [indicatorMenu, setIndicatorMenu] = useState(null);
    const [modifyErrorMessage, setModifyErrorMessage] = useState("");

    const [strategyName, setStrategyName] = useState("Strategy");

    const [maxCharacters, setMaxCharacters] = useState(15);
    const [maxAmountofItems, setMaxAmountofItems] = useState(7);

    const [entryReqBody, setEntryReqBody] = useState();
    const [exitReqBody, setExitReqBody] = useState();

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

    const [switchGridState, setSwitchGridState] = useState("ENTRY");
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
        lg: maxAmountofItems,
        md: maxAmountofItems,
        sm: maxAmountofItems,
        xs: maxAmountofItems,
        xxs: maxAmountofItems,
    };

    const [positionOfItemsNamesEntry, setPositionOfItemsNamesEntry] = useState(
        []
    );
    const [positionOfItemsNamesExit, setPositionofItemsNamesExit] = useState(
        []
    );
    const [strategyText, setStrategyText] = useState("");
    const [selectedItem, setSelectedItem] = useState("Select...");

    const [exposure, setExposure] = useState(1000);

    const [stopLoss, setStopLoss] = useState({ status: 1, value: "3" });
    const [takeProfit, setTakeProfit] = useState({ status: 1, value: "10" });
    const [trailingStop, setTrailingStop] = useState({ status: 1, value: "3" });
    const [security, setSecurity] = useState();
    const [requestBody, setRequestBody] = useState(null);

    useEffect(() => {
        if (requestBody === null) return;
        console.log(requestBody);
        const stringifyPart1 = JSON.stringify(requestBody);
        const stringifyPart2 = {
            strategy: stringifyPart1,
            stock: stock,
        };
        fetch(url, {
            headers: {
                "Content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(stringifyPart2),
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log("We're good!");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [requestBody]);

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

    const createRequestBody = () => {
        const entryInOrder = layoutEntry.lg.reduce((acc, item) => {
            if (positionOfItemsNamesEntry.includes(item.i)) {
                acc.push(layoutEntry.lg.find((entry) => entry.i === item.i));
            }
            return acc;
        }, []);

        const exitInOrder = layoutExit.lg.reduce((acc, item) => {
            if (positionOfItemsNamesExit.includes(item.i)) {
                acc.push(layoutExit.lg.find((exit) => exit.i === item.i));
            }
            return acc;
        }, []);

        const exitLogic = [];
        const exitIndicator = [];
        exitInOrder.forEach((item) => {
            if (item.type === "indicator") {
                const dictionary = item.parameters.reduce((acc, obj) => {
                    acc[obj.param] = obj.value;
                    return acc;
                }, {});
                const obj = { [item.i]: dictionary };
                exitLogic.push(obj);
                exitIndicator.push(obj);
            }
            if (item.type === "operator") {
                const operator = " " + item.i + " ";
                exitLogic.push({ [operator]: {} });
            }
        });

        const entryLogic = [];
        const entryIndicator = [];
        entryInOrder.forEach((item) => {
            if (item.type === "indicator") {
                const dictionary = item.parameters.reduce((acc, obj) => {
                    acc[obj.param] = obj.value;
                    return acc;
                }, {});
                const obj = { [item.i]: dictionary };
                entryLogic.push(obj);
                entryIndicator.push(obj);
            }
            if (item.type === "operator") {
                const operator = " " + item.i + " ";
                entryLogic.push({ [operator]: {} });
            }
        });

        setRequestBody({
            EXIT: {
                LOGIC: exitLogic,
                EXPOSURE: exposure,
                INDICATORS: exitIndicator,
            },
            ENTRY: {
                LOGIC: entryLogic,
                EXPOSURE: exposure,
                INDICATORS: entryIndicator,
            },
            SECURITY: {
                stop_loss: stopLoss,
                take_profit: takeProfit,
                trailing_stop: trailingStop,
            },
        });
    };

    //Handle whenever dragging an item.
    //Updates the list based on the x position
    const handleGridItemDragStop = (layout, area) => {
        const sortedItems = [...layout].sort((a, b) => a.x - b.x);
        if (area === "ENTRY") {
            setPositionOfItemsNamesEntry(
                sortedItems.map((item) => item.i.replace(/\d+/g, ""))
            );
        } else if (area === "EXIT") {
            setPositionofItemsNamesExit(
                sortedItems.map((item) => item.i.replace(/\d+/g, ""))
            );
        }
    };

    //Strategy Module text to show
    useEffect(() => {
        setStrategyText(
            <span>
                <br />
                Entry: {positionOfItemsNamesEntry}
                <br />
                Exit: {positionOfItemsNamesExit}
            </span>
        );
    }, [positionOfItemsNamesEntry, positionOfItemsNamesExit]);

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
        const entryList = positionOfItemsNamesEntry;
        const exitList = positionOfItemsNamesExit;

        let errorMessageHandle = "";

        if (entryList.length < 2)
            errorMessageHandle = errorMessageHandle.concat(
                `
                The entry list does not have enough items.
                `
            );
        if (exitList.length < 2)
            errorMessageHandle = errorMessageHandle.concat(
                `
                The exit list does not have enough items.

                `
            );

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
        errorMessageHandle = errorMessageHandle.concat(handleStrategyName());

        //Set the state to good!
        setShowErrorMessage(errorMessageHandle);
        setErrorMessage(errorMessageHandle);
        if (errorMessageHandle === "") {
            setGoodToSaveStrategyBool(true);
            createRequestBody();
        }
    };

    const handleCorrectStrategy = (itemList, area) => {
        //Makes sure there are more than 2 items on grid
        //If the first or second item is an operator, not good
        if (operators.includes(itemList[0]))
            return `
            
            There is an operator at the begining of ${area} grid.
            
            `;
        else if (operators.includes(itemList[itemList.length - 1]))
            return `
            
            There is an operator at the end ${area} grid.
            
            `;
        if (relational.includes(itemList[0]))
            return `
        There is a relational at the begining of ${area} grid.
        `;
        else if (relational.includes(itemList[itemList.length - 1]))
            return `
        There is a relational at the end of ${area} grid.
        `;
        //Iterate through the items

        let relationalCount = 0;

        for (let i = 1; i < itemList.length; i++) {
            if (relational.includes(itemList[i])) {
                relationalCount++;
            }
            //If the item is an operator...
            if (operators.includes(itemList[i])) {
                const previousItem = itemList[i - 1];
                if (operators.includes(previousItem))
                    //If it's followed by another operator, not good
                    return `
                    There are operators following each other in the ${area} grid
                    `;
            }
            //If the item is an indicator...
            else if (indicators.some((item) => item.value === itemList[i])) {
                const previousItem = itemList[i - 1];
                if (
                    indicators.some((item) => item.value === previousItem) //If the previous Item is also and indicator, not good
                )
                    return `
                    
                    There are indicators following each other in the ${area} grid.
                    
                    `;
            }
        }

        if (relationalCount === 0)
            return `
           
            Missing a relational operator (<, >, =) in the ${area} grid.
            
            `;
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
                    return `
                    
                    There are parentheses in the wrong order in the ${area} grid.
                   
                    `;
                }
            }
        }

        if (stack.length > 0) {
            return `
            
            Missing right parentheses in the ${area} grid.
            
            `;
        } else {
            return "";
        }
    };

    //Makes sure two strategies don't have the same name.
    const handleStrategyName = () => {
        const updatedModules = modules;
        if (updatedModules.some((item) => item.name === strategyName)) {
            return "Cannot have two strategies with the same name";
        } else return "";
    };

    //Add item from dropdown to grid
    const handleItemAddToGrid = (event, area) => {
        let updatedLayout;
        if (switchGridState === "ENTRY") {
            updatedLayout = { ...layoutEntry };
        } else if (switchGridState === "EXIT") {
            updatedLayout = { ...layoutExit };
        }
        //If it reached the max amount of items, the item will not be added
        if (updatedLayout.lg.length >= maxAmountofItems) {
            setErrorMessage("Max amount of items on grid");
            return;
        }

        //Creation of new item.
        const selectedItemValue = event.target.value;
        const selectedItemName = event.target[event.target.selectedIndex].text;
        const eventName = event.target.name;
        let newItem = null;

        if (eventName === "indicators") {
            newItem = createNewIndicator(
                selectedItemValue,
                selectedItemName,
                switchGridState,
                getParamsFromJson(selectedItemValue)
            );
            showGridItemModifyMenu(newItem);
        } else {
            newItem = createNewOperator(
                selectedItemValue,
                selectedItemName,
                switchGridState
            );
        }

        //Add new item to grid
        updatedLayout.lg.push(newItem);
        if (switchGridState === "ENTRY") setLayoutEntry(updatedLayout);
        else if (switchGridState === "EXIT") setLayoutExit(updatedLayout);
        handleGridItemDragStop(updatedLayout.lg, switchGridState);
    };

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

    //Creates the modify menu for the items on the grid
    const showGridItemModifyMenu = (indicatorItem) => {
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
                    top: "118%",
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
                                <div style={{ display: "flex" }}>
                                    <label
                                        htmlFor={item.param}
                                        style={{
                                            marginTop: "5px",
                                        }}
                                    >
                                        {item.param}
                                        <span
                                            style={{
                                                color: "grey",
                                                marginLeft: "10px",
                                            }}
                                        >
                                            {constraintText(item.conditions)}
                                        </span>
                                    </label>
                                    <br />
                                </div>
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
                                        placeholder={`Value at: ${item.value}`}
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

    //Makes the grid equal to []
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
        setErrorMessage("");
    };

    //This creates a new indicator item
    const createNewIndicator = (value, name, area, param) => {
        const newItem = {
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
        return newItem;
    };

    //This creates a new operator item
    const createNewOperator = (value, name, area) => {
        const newItem = {
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
        return newItem;
    };

    const getParamsFromJson = (item) => {
        const indicator = indicatorList.find((i) => i.indicator_name === item);
        const parsedParameters = JSON.parse(indicator.indicator_default_para);
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
        // let keys = Object.keys(constraints);
        if (value < constraints["MIN"] || value > constraints["MAX"])
            return false;
        else return true;
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
        if (strategyName.length > maxCharacters) {
            setShowErrorMessage(
                `Strategy name must be maximum ${maxCharacters} characters long!`
            );
            return;
        }

        if (!goodToSaveStrategyBool) return;

        const modulesArray = modules;
        let entryText = "";
        positionOfItemsNamesEntry.forEach((item) => {
            entryText = entryText.concat(item + " ");
        });
        let exitText = "";
        positionOfItemsNamesExit.forEach((item) => {
            exitText = exitText.concat(item + " ");
        });
        //console.log(layoutEntry.lg);

        const entryStrategy = makeStrategy(layoutEntry.lg);
        const exitStrategy = makeStrategy(layoutExit.lg);

        const strategy = { ENTRY: entryStrategy, EXIT: exitStrategy };
        //console.log(strategy);

        const text = (
            <span>
                Entry: {entryText}
                <br />
                Exit: {exitText}
            </span>
        );

        const newModule = {
            name: strategyName,
            value: strategy,
            text: text,
        };
        modulesArray.push(newModule);
        setModules(modulesArray);
        setPositionOfItemsNamesEntry([]);
        setPositionofItemsNamesExit([]);
        clearGrid();
    }, [goodToSaveStrategyBool]);

    const deleteStrategy = (index) => {
        const updatedModules = modules;
        updatedModules.splice(index, 1);
        setModules(updatedModules);
        clearGrid();
    };

    const modifyStrategy = (index) => {
        //console.log(modules);
        let values = modules[index].value;

        let updatedLayoutEntry = { ...layoutEntry };
        let updatedLayoutExit = { ...layoutExit };

        const entry = values.ENTRY;
        const exit = values.EXIT;

        entry.forEach((item, i) => {
            //console.log(item);
            if (item.type === "indicator") {
                updatedLayoutEntry.lg.push(
                    createNewIndicator(
                        item.value,
                        item.name,
                        item.area,
                        item.param
                    )
                );
            } else {
                updatedLayoutEntry.lg.push(
                    createNewOperator(item.value, item.name, item.area)
                );
            }
        });
        exit.forEach((item, i) => {
            if (item.type === "indicator")
                updatedLayoutExit.lg.push(
                    createNewIndicator(
                        item.value,
                        item.name,
                        item.area,
                        item.param
                    )
                );
            else
                updatedLayoutExit.lg.push(
                    createNewOperator(item.value, item.name, item.area)
                );
        });

        setLayoutEntry(updatedLayoutEntry);
        setLayoutExit(updatedLayoutExit);
        setStrategyName(modules[index].name);
        deleteStrategy(index);
    };

    return (
        <div>
            <div>{indicatorMenu}</div>
            <div>
                {/* Grid and Items */}
                <div>
                    <input
                        type="radio"
                        id="entry"
                        name="entry_exit"
                        value="ENTRY"
                        checked={switchGridState === "ENTRY"}
                        onChange={() => setSwitchGridState("ENTRY")}
                    />
                    <label htmlFor="entry">Entry</label>
                    <br />
                    <input
                        type="radio"
                        id="exit"
                        name="entry_exit"
                        value="EXIT"
                        checked={switchGridState === "EXIT"}
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
                        maxRows={2}
                        draggableHandle=".drag-handle"
                        compactType="horizontal"
                        isResizable={false}
                        onDragStop={(layout) =>
                            handleGridItemDragStop(layout, "ENTRY")
                        }
                        onBreakpointChange={(item) => {
                            setBreakpointSize(item);
                        }}
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
                                    {item.type === "indicator" && (
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
                                            onClick={() =>
                                                showGridItemModifyMenu(item)
                                            }
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
                        rowHeight={20}
                        maxRows={3}
                        draggableHandle=".drag-handle"
                        compactType="horizontal"
                        isResizable={false}
                        onDragStop={(layout) =>
                            handleGridItemDragStop(layout, "EXIT")
                        }
                        onBreakpointChange={(item) => {
                            setBreakpointSize(item);
                        }}
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
                                    {item.type === "indicator" && (
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
                                            onClick={() =>
                                                showGridItemModifyMenu(item)
                                            }
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
                                    handleItemAddToGrid(event, switchGridState);
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
                                    handleItemAddToGrid(event, switchGridState);
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
                                    handleItemAddToGrid(event, switchGridState);
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
                    />
                    <input
                        type="button"
                        value="Submit Strategy"
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
                        {modules.map((item, index) => (
                            <div
                                style={{
                                    width: "19em",
                                    marginBottom: "1em",
                                    border: "1px solid",
                                }}
                                key={index}
                            >
                                <div style={{ display: "flex" }}>
                                    <h4 style={{ width: "300px" }}>
                                        {item.name}
                                    </h4>

                                    <input
                                        type="button"
                                        value="Delete"
                                        style={{
                                            height: "30px",
                                            marginTop: "0.6em",
                                            marginRight: "0.6em",
                                            marginLeft: "auto",
                                        }}
                                        onClick={() => deleteStrategy(index)}
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
                                        onClick={() => modifyStrategy(index)}
                                    />
                                </div>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridContainer;
