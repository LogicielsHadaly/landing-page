import React, { useState, useEffect } from "react";
import indicators from "./indicatorExport";

export const IndicatorList = () => {
    const indicatorArray = [];
    indicators.forEach((i) => {
        indicatorArray.push(i);
    });
    return indicatorArray;
};
