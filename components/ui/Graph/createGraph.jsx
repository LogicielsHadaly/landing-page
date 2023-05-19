import * as LC from "lightweight-charts";
import { useEffect, useRef } from "react";
import styles from "./style/chartStyles.module.css";

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

var CreateGraph = ({
    historicData = [],
    indicatorData = [],
    markerData = [],
    size,
}) => {
    const chartContainerRef = useRef(null);
    const chartRef = useRef(null);

    console.log(size);

    if (size) {
        layout.width = size.width;
        layout.height = size.height;
    } else {
        layoung;
    }

    useEffect(() => {
        // console.log(historicData);
        const chart = LC.createChart(chartContainerRef.current, layout, {
            autosize: true,
        });

        if (historicData.length > 0) {
            const candleStickSeries = chart.addCandlestickSeries({
                upColor: "rgb(38,166,154)",
                downColor: "rgb(255,82,82)",
                wickUpColor: "rgb(38,166,154)",
                wickDownColor: "rgb(255,82,82)",
                borderVisible: false,
            });
            candleStickSeries.setData(historicData);
        }

        //console.log(indicatorData);
        if (indicatorData.length > 0) {
            const lineColor = ["#2962FF", "#e942f5", "#42f595"];
            indicatorData.map((indicator, index) => {
                let areaSeries = chart.addAreaSeries({
                    lineColor: lineColor[index],
                    topColor: "rgba(0,0,0,0)",
                    bottomColor: "rgba(0, 08, 255, 0)",
                });
                areaSeries.setData(indicator);
            });
        }

        if (markerData.length > 0) {
            markerData.map((marker, index) => {
                if (marker === 100) {
                }
            });
        }

        chartRef.current = chart;
        return () => {
            chartRef.current.remove();
        };
    }, [historicData, indicatorData]);

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

export default CreateGraph;
