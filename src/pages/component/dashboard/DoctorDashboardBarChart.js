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
import { useEffect, useState } from "react";
import axios from "axios";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarChart = ({ hospitalId }) => {
  const [counts, setCounts] = useState([]);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/hospital/dashboard_data/${hospitalId}/appointmet`,
      );
      setCounts(response.data);
    } catch (error) {
      console.error("Error fetching appointments data:", error);
    }
  };

  useEffect(() => {
    fetchAppointments().then((r) => console.log(r));
  }, []);

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
        data: counts,
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
