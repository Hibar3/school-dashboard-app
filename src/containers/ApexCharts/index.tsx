"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Props as ApexChartProps } from "react-apexcharts";
// const Charts = dynamic(() => import("react-apexcharts"), { ssr: false });

// this is a work around for running ApexChart without SSR //
export const ApexChart: React.FC<ApexChartProps> = (props) => {
  const [Chart, setChart] = useState<any>();
  const hasType = typeof props?.type !== "undefined";

  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  return hasType && Chart && <Chart {...props} />;
};

export default ApexChart;
