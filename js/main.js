// Generate random data function for 30 days of data
const generateRandomData = (numPoints, maxValue) => {
    return Array.from({ length: numPoints }, () => Math.floor(Math.random() * maxValue));
};

// Generate the last 30 days' dates as labels
const generateLast30DaysLabels = () => {
    const labels = [];
    const today = new Date();
    for (let i = 29; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        labels.push(date.toISOString().slice(5, 10)); // Format date as 'MM-DD'
    }
    return labels;
};

// Chart.js setup for the Daily Cars chart
const ctx = document.getElementById('dailyCarsChart').getContext('2d');
const dailyCarsChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: generateLast30DaysLabels(), // Generate labels for the last 30 days
        datasets: [
            {
                label: 'Daily Cars',
                data: generateRandomData(30, 500), // Generate 30 random data points for Daily Cars
                borderColor: 'white',
                backgroundColor: 'black',
                borderWidth: 2
            },
            {
                label: 'Emergency Vehicles',
                data: generateRandomData(30, 100), // Generate 30 random data points for Emergency Vehicles
                borderColor: 'red',
                backgroundColor: 'black',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: '#555' // Y-axis grid line color
                },
                title: {
                    display: true,
                    text: 'Number of Vehicles'
                }
            },
            x: {
                grid: {
                    color: '#555' // X-axis grid line color
                },
                title: {
                    display: true,
                    text: 'Date (MM-DD)'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#ddd', // Legend text color
                    boxWidth: 20, // Box width for color box
                    padding: 10 // Padding around legend items
                },
                position: 'top' // Legend position
            }
        }
    }
});

// Random values for the metric cards
document.getElementById('totalCars').textContent = generateRandomData(1, 1000)[0];
document.getElementById('emergencyVehicles').textContent = generateRandomData(1, 200)[0];
document.getElementById('averageCars').textContent = generateRandomData(1, 700)[0];
document.getElementById('extraCars').textContent = generateRandomData(1, 300)[0];

// Hamburger menu toggle for mobile navigation
document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});
