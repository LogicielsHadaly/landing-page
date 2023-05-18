import GradientWrapper from "../../GradientWrapper";
import Button from "../Button";
import React, { useRef, useEffect, useState } from "react";
import { createChart } from "lightweight-charts";
import styles from "./style/chartStyles.module.css";

// Specify the dark theme
var darkTheme = {
  chart: {
    layout: {
      background: {
        type: "solid",
        color: "#2B2B43",
      },
      lineColor: "#2B2B43",
      textColor: "#D9D9D9",
    },
    watermark: {
      color: "rgba(0, 0, 0, 0)",
    },
    crosshair: {
      color: "#758696",
    },
    grid: {
      vertLines: {
        color: "#2B2B43",
      },
      horzLines: {
        color: "#363C4E",
      },
    },
  },
  series: {},
};

// Specify the light theme
const lightTheme = {
  chart: {
    layout: {
      background: {
        type: "solid",
        color: "#FFFFFF",
      },
      lineColor: "#2B2B43",
      textColor: "#191919",
    },
    watermark: {
      color: "rgba(0, 0, 0, 0)",
    },
    grid: {
      vertLines: {
        visible: false,
      },
      horzLines: {
        color: "#f0f3fa",
      },
    },
  },
  series: {
    topColor: "rgba(33, 150, 243, 0.56)",
    bottomColor: "rgba(33, 150, 243, 0.04)",
    lineColor: "rgba(33, 150, 243, 1)",
  },
};

// Code that create a constant DEV tha produice the graph
var CHART_TRADE = ({ data = [], lineColor = "#1326F7" }) => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(data);
  const [theme, setTheme] = useState("Dark");

  const hexToRGBA = (hex, alpha) => {
    const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };

  var topColor = hexToRGBA(lineColor, 0.56);
  var bottomColor = hexToRGBA(lineColor, 0.04);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: 300,
      height: 160,
    });

    const lineSeries = chart.addLineSeries();

    var areaSeries = chart.addAreaSeries({
      topColor: topColor,
      bottomColor: bottomColor,
      lineColor: lineColor,
      lineWidth: 2,
    });
    areaSeries.setData(data);

    function syncToTheme(theme) {
      chart.applyOptions(themesData[theme].chart);
      areaSeries.applyOptions(themesData[theme].series);
    }

    var themesData = {
      Dark: darkTheme,
      Light: lightTheme,
    };
    syncToTheme("Dark");

    chartRef.current = chart;
    return () => {
      chartRef.current.remove();
    };
  }, [chartData, theme, lineColor, topColor, bottomColor]);

  return (
    <section className="custom-screen text-gray-600">
      <div className="relative max-w-xl mx-auto sm:text-center">
        {/* trading view graph */}
        <div className={styles.chartWrapper}>
          <div ref={chartContainerRef} className={styles.chart} />
        </div>
      </div>
    </section>
  );
};

export default CHART_TRADE;
