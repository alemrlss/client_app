"use client"
import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

interface ChartData {
    labels: string[];
    backgroundColor: string[];
    hoverBackgroundColor: string[];
    data: number[];
}

interface ChartPieProps {
    chartData: ChartData;
}

const ChartPie: React.FC<ChartPieProps> = ({ chartData }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    const { labels, backgroundColor, hoverBackgroundColor, data } = chartData;

    const chartDataSet = {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: backgroundColor,
            hoverBackgroundColor: hoverBackgroundColor
        }]
    };

    return (
        <div className='bg-white rounded-md shadow-md flex justify-center'>
            {loading ? (
                <div className="flex items-center justify-center">
                    <div role="status">
                        {/* Agrega aquí tu loader si es necesario */}
                    </div>
                </div>
            ) : (
                <Doughnut

                    data={chartDataSet}
                    options={{
                        cutout: '50%',
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                            legend: { display: true, position: 'bottom' },
                            tooltip: { enabled: true, padding: 16 }
                        }
                    }}
                />
            )}
        </div>
    );
};

export default ChartPie;
