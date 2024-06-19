import * as echarts from "echarts/core";
import React, { useRef, useEffect } from "react";
import { GridComponent, VisualMapComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { SkiaChart } from "@wuba/react-native-echarts";
import { areaChartData } from "../../constants";

echarts.use([
  GridComponent,
  VisualMapComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

export default function AreaChart() {
  const skiaRef = useRef(null);
  useEffect(() => {
    option = {
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      visualMap: {
        type: "piecewise",
        show: false,
        dimension: 0,
        seriesIndex: 0,
      },
      series: [
        {
          lineStyle: {
            color: "orange",
            width: 5,
          },
          data: areaChartData,
          type: "line",
          areaStyle: {
            color: "orange",
          },
          smooth: true,
        },
      ],
    };
    let chart;
    if (skiaRef.current) {
      chart = echarts.init(skiaRef.current, "light", {
        renderer: "svg",
        width: 400,
        height: 400,
      });
      chart.setOption(option);
    }
    return () => chart?.dispose();
  }, []);

  return <SkiaChart ref={skiaRef} />;
}
