import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import React, { useRef, useEffect } from "react";
import { GridComponent } from "echarts/components";
import { SVGRenderer, SkiaChart } from "@wuba/react-native-echarts";
import { pieChartData } from "../../constants";

echarts.use([SVGRenderer, PieChart, GridComponent]);

export default function Chart() {
  const skiaRef = useRef(null);
  useEffect(() => {
    option = {
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          center: ["50%", "50%"],
          data: pieChartData,
          avoidLabelOverlap: false,
          padAngle: 2,
          itemStyle: {
            borderRadius: 10,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 15,
              fontWeight: "bold",
            },
          },
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
