"use client";
import React, { useState, useEffect } from "react";
import ChartPie from "@/components/home/charts/ChartPie";
import ChartBar from "@/components/home/charts/ChartBar";
import LoaderCharts from "./LoaderCharts/LoaderCharts";

function ChartsContainer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const chartData1 = {
    labels: ['Operativos', 'Inoperativos'],
    backgroundColor: ['#01BAE8', '#D51101'],
    hoverBackgroundColor: ['#71DCF7', '#F76054'],
    data: [32, 50]
  };

  const chartData2 = {
    labels: ['Operativos', 'Inoperativos'],
    backgroundColor: ['#1F8402', '#A48602'],
    hoverBackgroundColor: ['#3ECF15', '#DEB70D'],
    data: [10, 60]
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      {loading ? (
        <LoaderCharts />
      ) : (
        <div className="w-full flex space-x-1">
          <div className="w-1/4 bg-transparent p-4 flex flex-col">
            <div className="bg-white rounded-lg p-4 shadow-md mb-3">
              <ChartPie chartData={chartData1} />
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <ChartPie chartData={chartData2} />
            </div>

          </div>
          <div className="w-3/4 bg-white rounded-lg m-4 mr-4 shadow-md flex justify-center items-center">
            <ChartBar />
          </div>
        </div>
      )}
    </div>
  );
}

export default ChartsContainer;
