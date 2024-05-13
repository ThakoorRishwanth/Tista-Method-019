// Removed unused React import
import React, { useEffect, useRef, useState } from 'react';
// Imported chart.js/auto module
import Chart from 'chart.js/auto';
import Sidebar from './Sidebar';
import '../css/Dashboard.css';

interface BikeData {
    id: number;
    name: string;
    type: string;
    engine_displacement: string;
    price: string;
    color: string;
    image_url: string;
    description: string;
    features: string[];
}

function ViewData(): JSX.Element {
    const [datas, setData] = useState<BikeData[]>([]);
    const [totalRevenue, setTotalRevenue] = useState<number>(0);
    // Corrected type for chartRef and chartRef2
    const chartRef = useRef<Chart<"bar"> | null>(null);
    const chartRef2 = useRef<Chart<"bar"> | null>(null);

    async function fetchData(): Promise<void> {
        try {
            const res = await fetch('https://tista-method-019-1.onrender.com/motorcycles');
            const data = await res.json();
            setData(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // Calculate total revenue
        const revenue = datas.reduce((acc, bike) => acc + parseFloat(bike.price), 0);
        setTotalRevenue(revenue);
    }, [datas]);

    useEffect(() => {
        // Create revenue chart
        const ctx = document.getElementById('revenueChart') as HTMLCanvasElement;
        if (chartRef.current) {
            chartRef.current.destroy();
        }
        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Total Revenue'],
                datasets: [{
                    label: 'Revenue',
                    data: [totalRevenue],
                    backgroundColor: ['#FF9F00'], // Adjust color as needed
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }, [totalRevenue]);

    useEffect(() => {
        // Create color chart
        const ctx = document.getElementById('colorChart') as HTMLCanvasElement;
        if (chartRef2.current) {
            chartRef2.current.destroy();
        }
        // Explicitly typed colorsMap
        const colorsMap: { [key: string]: number } = datas.reduce((acc, curr) => {
            acc[curr.color] = (acc[curr.color] || 0) + 1;
            return acc;
        }, {} as { [key: string]: number });
        const labels = Object.keys(colorsMap);
        const data = Object.values(colorsMap);
        chartRef2.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Number of Colors Available',
                    data: data,
                    backgroundColor: '#36A2EB', // Adjust color as needed
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }, [datas]);

    return (
        <div id="viewdata">
            <Sidebar />
            <section id="info">
                <div className="card">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.Y59CgLVJSoFNM3D6OEzumQHaD4&pid=Api&P=0&h=180" alt="Card" className="card-image" />
                    <p className="card-text">Number of Available bikes: {datas.length}</p>
                </div>
                <div className="card">
                    <canvas id="revenueChart"></canvas>
                </div>
                <div className="card">
                    <canvas id="colorChart"></canvas>
                </div>
            </section>
        </div>
    );
}

export default ViewData;


