let myChart = document.getElementById("myChart").getContext("2d");

let massChart = new Chart(myChart, {
  type: "doughnut", // bar, horizontalBar, pie, doughnut, radar, polarArea
  data: {
    labels: [
      "Python",
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "SQL",
      "Vue.js",
      "Django",
    ],
    datasets: [
      {
        label: "My time",
        data: [28.33, 28.33, 28.33, 10, 5, 5, 5],
        backgroundColor: [
          "#BF9ACA",
          "#f7ebec",
          "white",
          "#D9B8C4",
          "#ECCFC3",
          "#F49FBC",
          "#37123C",
        ],
        fontColor: "black",
        borderColor: "transparent",
        hoverBorderWidth: 1,
        hoverBorderColor: "black",
      },
    ],
  },

  options: {
    cutout: 55,
    plugins: {
      legend: {
        position: "right",
        labels: {
          padding: 15,
          color: "black",
          font: {
            size: 16,
            family: "Catamaran",
            color: "black",
          },
        },
      },
    },
  },
});
