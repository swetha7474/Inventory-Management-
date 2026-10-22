const xValues = ["Laptop", "Keyboard", "Mouse", "Monitor", "Printer"];
const yValues = [30, 18, 35, 10, 5];
const barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            label: "Stock Quantity",
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        scales: {
            x: {
                ticks: {
                    color: "black"
                }
            },
            y: {
                ticks: {
                    color: "black"
                }
            }
        }
    }
}

);