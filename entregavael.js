
    const labels = ["January", "February", "March", "April", "May", "June"];
    const data1 = {
      labels: labels,
      datasets: [
        {
          label: "Temperatura",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [80, 55, 51, 28, 21, 35, 45],
        },
      ],
    };
    const config1 = {
      type: "bar",
      data: data1,
      options: {},
    };
    const myChart1 = new Chart(document.getElementById("myChart1"), config1);

    // Second chart data
    const data2 = {
      labels: labels,
      datasets: [
        {
          label: "Umidade",
          backgroundColor: "rgb(54, 162, 235)",
          borderColor: "rgb(54, 162, 235)",
          data: [25, 35, 45, 55, 65, 75, 85],
        },
      ],
    };
    const config2 = {
      type: "bar",
      data: data2,
      options: {},
    };
    const myChart2 = new Chart(document.getElementById("myChart2"), config2);
