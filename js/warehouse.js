const xValues = ["Main Warehouse", "Central Warehouse", "South Warehouse"];
const yValues = [47, 28, 23];
const barColors = [
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
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        font: { size: 16 }
      }
    }
  }
});