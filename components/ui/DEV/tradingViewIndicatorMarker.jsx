import GradientWrapper from "../../GradientWrapper";
import Button from "../Button";
import React, { useRef, useEffect, useState } from "react";
import styles from "./chartStyles.module.css";
import * as LightweightCharts from "lightweight-charts";

const layout = {
    width: 300,
    height: 160,
    timeScale: {
      timeVisible: true,
      borderColor: "#D1D4DC",
    },
    rightPriceScale: {
      borderColor: "#D1D4DC",
    },
    layout: {
      background: {
        type: "solid",
        color: "#2B2B43",
      },
      textColor: "#D9D9D9",
    },
    grid: {
      horzLines: {
        color: "#758696",
      },
      vertLines: {
        color: "#363C4E",
      },
    },
  }

  
var INDICATORS = ({dataInput = []}) => {
    const chartContainerRef = useRef(null);
    const chartRef = useRef(null);


    useEffect(() => {
    const chart = LightweightCharts.createChart(chartContainerRef.current, layout);
    const series = chart.addCandlestickSeries({
      upColor: "rgb(38,166,154)",
      downColor: "rgb(255,82,82)",
      wickUpColor: "rgb(38,166,154)",
      wickDownColor: "rgb(255,82,82)",
      borderVisible: false,
    });
    series.setData(dataInput);
    const datesForMarkers = [dataInput[dataInput.length - 39], dataInput[dataInput.length - 19]];

    let indexOfMinPrice = 0;
    for (let i = 1; i < datesForMarkers.length; i++) {
      if (datesForMarkers[i].high < datesForMarkers[indexOfMinPrice].high) {
        indexOfMinPrice = i;
      }
    }

    const markers = [
      {
        time: dataInput[dataInput.length - 48].time,
        position: "aboveBar",
        color: "#f68410",
        shape: "circle",
        text: "D",
      },
    ];

    for (let i = 0; i < datesForMarkers.length; i++) {
      if (i !== indexOfMinPrice) {
        markers.push({
          time: datesForMarkers[i].time,
          position: "aboveBar",
          color: "#e91e63",
          shape: "arrowDown",
          text: "Sell @ " + Math.floor(datesForMarkers[i].high + 2),
        });
      } else {
        markers.push({
          time: datesForMarkers[i].time,
          position: "belowBar",
          color: "#2196F3",
          shape: "arrowUp",
          text: "Buy @ " + Math.floor(datesForMarkers[i].low - 2),
        });
      }
    }

    series.setMarkers(markers);
chartRef.current = chart;
return () => {
  chartRef.current.remove();
};
  });


return (
    <section className='custom-screen text-gray-600'>
        <div className='relative max-w-xl mx-auto sm:text-center'>
        {/* trading view graph */}
            <div className={styles.chartWrapper}>
            <div ref={chartContainerRef} className={styles.chart} />
            </div>
            </div>
    </section>
);
};

export default INDICATORS;

