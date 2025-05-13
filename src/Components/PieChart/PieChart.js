// import React from 'react';
// import FusionCharts from 'fusioncharts';
// import ReactFC from 'react-fusioncharts';
// import Charts from 'fusioncharts/fusioncharts.charts';

// // Add the chart type to FusionCharts
// ReactFC.fcRoot(FusionCharts, Charts);

// const chartData = {
//     chart: {
//         caption: "Split of Top Products Sold",
//         subCaption: "Last Quarter",
//         basefontsize: "9",
//         pieFillAlpha: "60",
//         pieBorderThickness: "2",
//         hoverFillColor: "#cccccc",
//         pieBorderColor: "#ffffff",
//         showPercentInTooltip: "0",
//         numberPrefix: "$",
//         plotTooltext: "$label, $$valueK, $percentValue",
//         theme: "fusion"
//     },
//     data: [
//         { label: "Food & Beverages", value: "55.5" },
//         { label: "Apparel & Accessories", value: "42" },
//         { label: "Baby Products", value: "22.5" },
//         { label: "Electronics", value: "30" }
//     ]
// };

// const chartConfig = {
//     type: 'pie2d', // Specify the chart type
//     width: '600', // Width of the chart
//     height: '400', // Height of the chart
//     dataFormat: 'json', // Data format
//     dataSource: chartData // Data source
// };

// const PieChart = () => {
//     return (
//         <div>
//             <h2>Product Sales Analysis</h2>
//             <ReactFC {...chartConfig} />
//         </div>
//     );
// };

// export default PieChart;

import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

const PieChart = () => {
    const [data, setData] = useState([
        ['Category', 'Sales'],
        ['Food & Beverages', 0],
        ['Apparel & Accessories', 0],
        ['Baby Products', 0],
        ['Electronics', 0],
        ['Elder Products', 0],
    ]);

    const fullData = [
        ['Category', 'Sales'],
        ['Food & Beverages', 55.5],
        ['Apparel & Accessories', 42],
        ['Baby Products', 22.5],
        ['Electronics', 30],
        ['Elder Products', 40],
    ];

    const options = {
        title: 'Product Sales Analysis',
        is3D: true, // Enable 3D effect
        pieSliceText: 'label',
        animation: {
            startup: true,
            duration: 2000, // Duration of the animation in milliseconds
            easing: 'out',
        },
        legend: {
            position: 'top',
        },
    };

    useEffect(() => {
        const animateData = () => {
            const increment = (total) => Math.ceil(total / 100);
            let currentData = [0, 0, 0, 0, 0];
            const interval = setInterval(() => {
                currentData = currentData.map((value, index) => {
                    if (value < fullData[index + 1][1]) {
                        return Math.min(value + increment(fullData[index + 1][1]), fullData[index + 1][1]);
                    }
                    return value;
                });

                setData([
                    ['Category', 'Sales'],
                    ['Food & Beverages', currentData[0]],
                    ['Apparel & Accessories', currentData[1]],
                    ['Baby Products', currentData[2]],
                    ['Electronics', currentData[3]],
                    ['Elder Products', currentData[4]],
                ]);

                if (currentData.every((value, index) => value === fullData[index + 1][1])) {
                    clearInterval(interval);
                }
            }, 20);
        };

        animateData();
    }, []);

    return (
        <div>
            <h2>Product Sales Analysis</h2>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"600px"}
                height={"400px"}
                legendToggle
            />
        </div>
    );
};

export default PieChart;

