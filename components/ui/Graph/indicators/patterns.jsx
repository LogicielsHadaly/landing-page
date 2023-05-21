import React from "react";

const patterns = [
    { indicator: "CDL2CROWS", label: "Two Crows" },
    { indicator: "CDL3BLACKCROWS", label: "Three Black Crows" },
    { indicator: "CDL3INSIDE", label: "Three Inside Up/Down" },
    { indicator: "CDL3LINESTRIKE", label: "Three-Line Strike" },
    { indicator: "CDL3OUTSIDE", label: "Three Outside Up/Down" },
    { indicator: "CDL3STARSINSOUTH", label: "Three Stars In The South" },
    { indicator: "CDL3WHITESOLDIERS", label: "Three Advancing White Soldiers" },
    { indicator: "CDLABANDONEDBABY", label: "Abandoned Baby" },
    { indicator: "CDLADVANCEBLOCK", label: "Advance Block" },
    { indicator: "CDLBELTHOLD", label: "Belt-hold" },
    { indicator: "CDLBREAKAWAY", label: "Breakaway" },
    { indicator: "CDLCLOSINGMARUBOZU", label: "Closing Marubozu" },
    { indicator: "CDLCONCEALBABYSWALL", label: "Concealing Baby Swallow" },
    { indicator: "CDLCOUNTERATTACK", label: "Counterattack" },
    { indicator: "CDLDARKCLOUDCOVER", label: "Dark Cloud Cover" },
    { indicator: "CDLDOJI", label: "Doji" },
    { indicator: "CDLDOJISTAR", label: "Doji Star" },
    { indicator: "CDLDRAGONFLYDOJI", label: "Dragonfly Doji" },
    { indicator: "CDLENGULFING", label: "Engulfing Pattern" },
    { indicator: "CDLEVENINGDOJISTAR", label: "Evening Doji Star" },
    { indicator: "CDLEVENINGSTAR", label: "Evening Star" },
    {
        indicator: "CDLGAPSIDESIDEWHITE",
        label: "Up/Down-gap side-by-side white lines",
    },
    { indicator: "CDLGRAVESTONEDOJI", label: "Gravestone Doji" },
    //{ indicator: "CDLHAMMER", label: "Hammer" },
    { indicator: "CDLHANGINGMAN", label: "Hanging Man" },
    { indicator: "CDLHARAMI", label: "Harami Pattern" },
    { indicator: "CDLHARAMICROSS", label: "Harami Cross Pattern" },
    { indicator: "CDLHIGHWAVE", label: "High-Wave Candle" },
    { indicator: "CDLHIKKAKE", label: "Hikkake Pattern" },
    { indicator: "CDLHIKKAKEMOD", label: "Modified Hikkake Pattern" },
    { indicator: "CDLHOMINGPIGEON", label: "Homing Pigeon" },
    { indicator: "CDLIDENTICAL3CROWS", label: "Identical Three Crows" },
    { indicator: "CDLINNECK", label: "In-Neck Pattern" },
    { indicator: "CDLINVERTEDHAMMER", label: "Inverted Hammer" },
    { indicator: "CDLKICKING", label: "Kicking" },
    {
        indicator: "CDLKICKINGBYLENGTH",
        label: "Kicking - bull/bear determined by the longer marubozu",
    },
    { indicator: "CDLLADDERBOTTOM", label: "Ladder Bottom" },
    { indicator: "CDLLONGLEGGEDDOJI", label: "Long Legged Doji" },
    { indicator: "CDLLONGLINE", label: "Long Line Candle" },
    { indicator: "CDLMARUBOZU", label: "Marubozu" },
    { indicator: "CDLMATCHINGLOW", label: "Matching Low" },
    { indicator: "CDLMATHOLD", label: "Mat Hold" },
    { indicator: "CDLMORNINGDOJISTAR", label: "Morning Doji Star" },
    { indicator: "CDLMORNINGSTAR", label: "Morning Star" },
    { indicator: "CDLONNECK", label: "On-Neck Pattern" },
    { indicator: "CDLPIERCING", label: "Piercing Pattern" },
    { indicator: "CDLRICKSHAWMAN", label: "Rickshaw Man" },
    { indicator: "CDLRISEFALL3METHODS", label: "Rising/Falling Three Methods" },
    { indicator: "CDLSEPARATINGLINES", label: "Separating Lines" },
    { indicator: "CDLSHOOTINGSTAR", label: "Shooting Star" },
    { indicator: "CDLSHORTLINE", label: "Short Line Candle" },
    { indicator: "CDLSPINNINGTOP", label: "Spinning Top" },
    { indicator: "CDLSTALLEDPATTERN", label: "Stalled Pattern" },
    { indicator: "CDLSTICKSANDWICH", label: "Stick Sandwich" },
    {
        indicator: "CDLTAKURI",
        label: "Takuri (Dragonfly Doji with very long lower shadow)",
    },
    { indicator: "CDLTASUKIGAP", label: "Tasuki Gap" },
    { indicator: "CDLTHRUSTING", label: "Thrusting Pattern" },
    { indicator: "CDLTRISTAR", label: "Tristar Pattern" },
    { indicator: "CDLUNIQUE3RIVER", label: "Unique 3 River" },
    { indicator: "CDLUPSIDEGAP2CROWS", label: "Upside Gap Two Crows" },
    {
        indicator: "CDLXSIDEGAP3METHODS",
        label: "Upside/Downside Gap Three Methods",
    },
];

export default patterns;
