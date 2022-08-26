let myChart = document.getElementById("myChart").getContext("2d");

let massChart = new Chart(myChart, {
  type: "doughnut", // bar, horizontalBar, pie, doughnut, radar, polarArea
  data: {
    labels: ["Python", "JavaScript", "HTML/CSS", "SQL", "Vue.js"],
    datasets: [
      {
        label: "My time",
        data: [28.33, 28.33, 28.33, 10, 5],
        // backgroundColor: 'green'
        backgroundColor: ["#cbc5ea", "#bcc1ba", "white", "#d2cbcb", "#ECCFC3"],
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

// percentageInnerCutout : 50,
