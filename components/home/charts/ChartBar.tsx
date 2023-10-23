"use client"
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js'
Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
    labels: ['Operativos', 'Inoperativos', 'Marcas', 'Municipios',],
    datasets: [{
        label: '# of Votes',
        data: [60, 59, 20, 5],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 2
    }]
}

const ChartBar = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simula una carga demorada para mostrar el mensaje de "Cargando..."
        setLoading(false);
    }, []);

    return (
        <div className="flex items-center justify-center">
            {loading ? (
                null) : (
                <Bar data={data}
                    height={400}
                    width={700}
                    options={{ responsive: true, plugins: { legend: { display: false } } }} />
            )}
        </div>
    );
}

export default ChartBar;
