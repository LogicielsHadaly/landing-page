import React, { Component } from "react";
import patterns from "./patterns";

export const PatternList = () => {
    const patternList = [];
    patterns.forEach((i) => {
        patternList.push(i);
    });
    return patternList;
};
