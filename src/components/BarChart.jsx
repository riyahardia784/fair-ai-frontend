import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const BarChart = ({ maleRate, femaleRate }) => {

  const data = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        label: 'Selection Rate (%)',
        data: [maleRate, femaleRate],
        backgroundColor: [
        'rgba(54, 162, 235, 0.6)', // Blue for Male
        'rgba(255, 99, 132, 0.6)'  // Pink/Red for Female
      ],
      borderColor: [
        'rgb(6, 50, 80)',
        'rgb(255, 5, 59)'
      ],
      borderWidth: 1,
       borderRadius: 10, 
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    },
    animation: {
    duration: 5000, // Speed: 2 seconds to complete
    easing: 'easeInOutQuart', // Smooth start and end
  },

     scales: {
      x: {
        grid: {
          display: false, // Removes vertical grid lines
        }
      },
      y: {
        grid: {
          display: false, // Removes horizontal grid lines
        },
        beginAtZero: true // Recommended for rate comparisons
      }
    }

  };

  return <Bar data={data} options={options} />;
};

export default BarChart;