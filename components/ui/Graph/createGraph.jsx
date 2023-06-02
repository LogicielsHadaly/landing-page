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

    if (size) {
        layout.width = size.width;
        layout.height = size.height;
    }

    useEffect(() => {
        if (indicatorData.length > 1) {
            console.log("double line");
            return;
        }

        const chart = LC.createChart(chartContainerRef.current, layout, {
            autosize: true,
        });

        let candleStickSeries;
        if (historicData.length > 0) {
            candleStickSeries = chart.addCandlestickSeries({
                upColor: "rgb(38,166,154)",
                downColor: "rgb(255,82,82)",
                wickUpColor: "rgb(38,166,154)",
                wickDownColor: "rgb(255,82,82)",
                borderVisible: false,
            });
            candleStickSeries.setData(historicData);
        }

        if (indicatorData.length > 0) {
            const lineColor = [
                "#2962FF",
                "#e942f5",
                "#42f595",
                "#FFFFFF",
                "#fffb00",
            ];
            indicatorData.map((indicator, index) => {
                let areaSeries = chart.addAreaSeries({
                    lineColor: lineColor[index],
                    topColor: "rgba(0,0,0,0)",
                    bottomColor: "rgba(0, 08, 255, 0)",
                });
                areaSeries.setData(indicator);
            });
        }

        //console.log(historicData);
        //console.log(markerData);

        let markersList = [];
        if (markerData.length > 0) {
            const markerColors = [
                ["#8cff5e", "#ffc15e"],
                ["#14faf6", "#ca03fc"],
                ["#f5f5f5", "#f70015"],
            ];
            markerData.map((marker, index) => {
                if (marker.value > 0 || marker.value < 0) {
                    const position = marker.value > 0 ? "aboveBar" : "belowBar";
                    const color =
                        marker.value > 0
                            ? markerColors[marker.index][0]
                            : markerColors[marker.index][1];
                    const markerToPush = {
                        time: marker.time,
                        position: position,
                        color: color,
                        shape: "circle",
                        text: "",
                    };
                    markersList.push(markerToPush);
                }
            });
            try {
                candleStickSeries.setMarkers(markersList);
            } catch (error) {
                console.log(error);
            }
        }

        chartRef.current = chart;
        return () => {
            chartRef.current.remove();
        };
    }, [historicData, indicatorData, markerData]);

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
