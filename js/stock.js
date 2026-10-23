const xValues = ["Laptop", "Keyboard", "Mouse", "Monitor", "Printer"];
const yValues = [30, 18, 35, 10, 5];
const barColors = ["red", "green", "blue", "orange", "brown"];

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    indexAxis: 'y',
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text:"Stock Quantity",
        font: { size: 16 }
      }
    },
  }
});