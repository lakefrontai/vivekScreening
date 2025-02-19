"use client";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

export default function Chart() {
  const [data, setData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Stock Price",
        data: [100, 200, 150, 300],
        borderColor: "green",
      },
    ],
  });

  return <Line data={data} />;
}
