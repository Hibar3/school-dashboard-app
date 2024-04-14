"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Charts = dynamic(() => import("react-apexcharts"), { ssr: false });

/** this is a work around for running ApexChart without SSR */

export function ApexChart(props?: any) {
  const [Chart, setChart] = useState<any>();
  const hasType = typeof props?.type !== "undefined";

  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  return hasType && Chart && <Chart {...props} />;
}

export default ApexChart;
