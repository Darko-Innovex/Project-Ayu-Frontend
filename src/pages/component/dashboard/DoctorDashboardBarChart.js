import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [12, 7, 10, 14, 5, 15, 10, 9, 17, 8, 13, 14],
        backgroundColor: "#1BCE8C",
        barThickness: 40,
        gap: 100,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#6F6F6F",
          font: {
            family: "Roboto",
            weight: 500,
            size: 15,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    layout: {
      padding: {
        right: 30,
        left: 30,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
