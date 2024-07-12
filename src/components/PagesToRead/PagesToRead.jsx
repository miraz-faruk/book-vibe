import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookToReadList } from "../../utility/localstorage";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PagesToRead = () => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredBookToReadList();

        if (books.length > 0) {
            const readBooksListed = books.filter(book =>
                storedBookIds.some(id => id === book.bookId)
            );
            setReadBooks(readBooksListed);
        }
    }, [books]);

    // Generate an array of colors for each book
    const colors = readBooks.map(() => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.6)`);

    const chartData = {
        labels: readBooks.map(book => book.bookName),
        datasets: [{
            label: 'Page Numbers',
            data: readBooks.map(book => book.totalPages),
            backgroundColor: colors,
        }],
    };

    const options = {
        responsive: true,
        elements: {
            bar: {
                borderSkipped: 'bottom',
                backgroundColor: 'transparent',
                borderWidth: 0,
            },
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 16,
                    },
                },
            },
            y: {
                beginAtZero: true,
                max: 500,
                ticks: {
                    font: {
                        size: 16,
                    },
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 16,
                    },
                },
            },
        },
    };

    return (
        <div>
            <h2 className="bg-[#1313130D] text-[28px] font-bold rounded-2xl text-center py-8 mb-8">
                Pages To Read: {readBooks.length}
            </h2>
            {readBooks.length > 0 && (
                <div className="mt-8">
                    <Bar data={chartData} options={options} />
                </div>
            )}
        </div>
    );
};

export default PagesToRead;
