import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import companyMetrix from "../company-metrix.png";

const Dashboard = () => {
  const [showMetrics, setShowMetrics] = useState(false);
  const [locationChartData, setLocationChartData] = useState(null);
  const [typeChartData, setTypeChartData] = useState(null);

  const toggleMetrics = () => {
    setShowMetrics(!showMetrics);
  };

  // Dummy data for the chart
  const defaultChartData = {
    series: [
      {
        name: "Income",
        color: "#31C48D",
        data: [1420, 1620, 1820, 1420, 1650, 2120],
      },
      {
        name: "Expense",
        data: [788, 810, 866, 788, 1100, 1200],
        color: "#F05252",
      },
    ],
    chart: {
      sparkline: {
        enabled: false,
      },
      type: "bar",
      width: "100%",
      height: 400,
      toolbar: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "100%",
        borderRadiusApplication: "end",
        borderRadius: 6,
        dataLabels: {
          position: "top",
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
      formatter: function (value) {
        return "$" + value;
      },
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
        formatter: function (value) {
          return "$" + value;
        },
      },
      categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -20,
      },
    },
    fill: {
      opacity: 1,
    },
  };

  useEffect(() => {
    if (showMetrics) {
      // Initialize ApexCharts for Location Chart when the metrics are shown
      if (document.getElementById("location-chart") && window.ApexCharts) {
        const chart = new window.ApexCharts(
          document.getElementById("location-chart"),
          locationChartData || defaultChartData
        );
        chart.render();
      }

      // Initialize ApexCharts for Type Chart when the metrics are shown
      if (document.getElementById("type-chart") && window.ApexCharts) {
        const chart = new window.ApexCharts(
          document.getElementById("type-chart"),
          typeChartData || defaultChartData
        );
        chart.render();
      }
    }
  }, [showMetrics, locationChartData, typeChartData]);

  const handleLocationChange = (selectedLocation) => {
    // Update locationChartData based on selectedLocation
    // You need to provide the actual data for the selected location
    const updatedLocationChartData = {
      // ... (Updated data based on selectedLocation)
    };
    setLocationChartData(updatedLocationChartData);
  };

  const handleTypeChange = (selectedType) => {
    // Update typeChartData based on selectedType
    // You need to provide the actual data for the selected type
    const updatedTypeChartData = {
      // ... (Updated data based on selectedType)
    };
    setTypeChartData(updatedTypeChartData);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Upper Half */}
      <div className="flex-1 bg-[#E4E7EB] p-4">
        <h1
          className="text-xl px-5 py-3 font-bold mb-6"
          onClick={toggleMetrics}
        >
          Company Metrics
        </h1>
        {/* Your dropdown for Company Metrics goes here */}
        {showMetrics && (
          <div className="flex flex-col md:flex-row w-full px-8 gap-4">
            {/* Display the image in the dropdown with increased size */}
            <img
              src={companyMetrix} // Updated variable name
              alt="Company Metrix"
              className="w-full h-auto md:w-3/4 px-7 md:p-4 border  rounded"
              style={{ width: "200%", height: "auto", maxWidth: "1250px" }}
            />
          </div>
        )}
      </div>

      {/* Lower Half */}
      <div className="flex-1 bg-[#E4E7EB] p-4">
        <div className="flex justify-between mb-4">
          <div className="grid grid-cols-2">
            <div className="grid px-6">
              <h1 className="text-xl px-4 font-bold">
                Revenue By Job Location
              </h1>
              <div className="flex-1 bg-white p-4">
                <div id="location-chart"></div>
              </div>
            </div>
            <div className="grid px-14">
              <h1 className="text-xl px-28 font-bold">Revenue By Job Type</h1>
              <div className="flex-1 px-4 bg-white p-4">
                <div id="type-chart"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between"></div>
      </div>
    </div>
  );
};

export default Dashboard;
