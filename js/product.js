const xValues = ["Laptop", "Keyboard", "Mouse", "Monitor", "Printer"];
const yValues = [30, 18, 35, 10, 5];
const pieColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: pieColors,
      data: yValues
    }]
  },
  options: {
    title: {
      text: "Stock Quantity"
    }
  }
});