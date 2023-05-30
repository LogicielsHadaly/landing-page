const example = {
    strategy: {
        EXIT: {
            LOGIC: [
                { RSI: { time: "0", source: "close", timeperiod: "14" } },
                { " > ": {} },
                { 50: { num: "50" } },
            ],
            EXPOSURE: "1000",
            INDICATORS: [
                { RSI: { time: "0", source: "close", timeperiod: "14" } },
            ],
        },
        ENTRY: {
            LOGIC: [
                { MIDPRICE: { time: "0", timeperiod: "14" } },
                { " crossover ": {} },
                { MIDPOINT: { time: "0", source: "close", timeperiod: "14" } },
                { " and ": {} },
                { RSI: { time: "0", source: "close", timeperiod: "14" } },
                { " < ": {} },
                { 45: { num: "45" } },
            ],
            EXPOSURE: "1000",
            INDICATORS: [
                { MIDPRICE: { time: "0", timeperiod: "14" } },
                { MIDPOINT: { time: "0", source: "close", timeperiod: "14" } },
                { RSI: { time: "0", source: "close", timeperiod: "14" } },
            ],
        },
        SECURITY: {
            stop_loss: { status: 1, value: "3" },
            take_profit: { status: 1, value: "10" },
            trailing_stop: { status: 1, value: "3" },
        },
    },
    stock: "AAPL",
};

// {
//   "strategy": "{\"EXIT\": {\"LOGIC\": [{\"RSI\": {\"time\": \"0\", \"source\": \"close\", \"timeperiod\": \"14\"}}, {\" > \": {}}, {\"50\": {\"num\": \"50\"}}], \"EXPOSURE\": \"1000\", \"INDICATORS\": [{\"RSI\": {\"time\": \"0\", \"source\": \"close\", \"timeperiod\": \"14\"}}]}, \"ENTRY\": {\"LOGIC\": [{\"MIDPRICE\": {\"time\": \"0\", \"timeperiod\": \"14\"}}, {\" crossover \": {}}, {\"MIDPOINT\": {\"time\": \"0\", \"source\": \"close\", \"timeperiod\": \"14\"}}, {\" and \": {}}, {\"RSI\": {\"time\": \"0\", \"source\": \"close\", \"timeperiod\": \"14\"}}, {\" < \": {}}, {\"45\": {\"num\": \"45\"}}], \"EXPOSURE\": \"1000\", \"INDICATORS\": [{\"MIDPRICE\": {\"time\": \"0\", \"timeperiod\": \"14\"}}, {\"MIDPOINT\": {\"time\": \"0\", \"source\": \"close\", \"timeperiod\": \"14\"}}, {\"RSI\": {\"time\": \"0\", \"source\": \"close\", \"timeperiod\": \"14\"}}]}, \"SECURITY\": {\"stop_loss\": {\"status\": 1, \"value\": \"3\"}, \"take_profit\": {\"status\": 1, \"value\": \"10\"}, \"trailing_stop\": {\"status\": 1, \"value\": \"3\"}}}",
//   "stock": "AAPL"
// }
