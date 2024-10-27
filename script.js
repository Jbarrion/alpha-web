// Generate random data
const generateRandomData = (numPoints, maxValue) => {
    return Array.from({ length: numPoints }, () => Math.floor(Math.random() * maxValue));
};

// Chart.js setup for the Daily Cars chart
const ctx = document.getElementById('dailyCarsChart').getContext('2d');
const dailyCarsChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7'],
        datasets: [{
            label: 'Daily Cars',
            data: generateRandomData(7, 500),
            borderColor: 'white', // Line color for Daily Cars set to white
            backgroundColor: 'black', // Set fill color to black (invisible)
            borderWidth: 2
        }, {
            label: 'Emergency Vehicles',
            data: generateRandomData(7, 100),
            borderColor: 'white', // Line color for Emergency Vehicles set to white
            backgroundColor: 'black', // Set fill color to black (invisible)
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: '#555' // Grid line color
                }
            },
            x: {
                grid: {
                    color: '#555' // Grid line color
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    textcolor: '#ddd', // Legend text color (change to your desired color)
                    boxWidth: 20, // Box width for the color box
                    padding: 10 // Padding for the text labels
                },
                position: 'top', // You can adjust this to 'top', 'bottom', 'left', or 'right'
            }
        }
    }
});

// Random values for the metric cards
document.getElementById('totalCars').textContent = generateRandomData(1, 1000)[0];
document.getElementById('emergencyVehicles').textContent = generateRandomData(1, 200)[0];
document.getElementById('averageCars').textContent = generateRandomData(1, 700)[0];
document.getElementById('extraCars').textContent = generateRandomData(1, 300)[0];
