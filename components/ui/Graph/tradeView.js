import React, { useRef, useEffect } from "react";
import styles from "../DEV/chartStyles.module.css";
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
};

var INDICATORS = ({ dataInput = [], size }) => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);

  if (size) {
    layout.width = size.width;
    layout.height = size.height;
  }

  useEffect(() => {
    const chart = LightweightCharts.createChart(
      chartContainerRef.current,
      layout,
      { autoSize: true }
    );
    const series = chart.addCandlestickSeries({
      upColor: "rgb(38,166,154)",
      downColor: "rgb(255,82,82)",
      wickUpColor: "rgb(38,166,154)",
      wickDownColor: "rgb(255,82,82)",
      borderVisible: false,
    });
    series.setData(dataInput);

    chartRef.current = chart;
    return () => {
      chartRef.current.remove();
    };
  });

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

export default INDICATORS;
