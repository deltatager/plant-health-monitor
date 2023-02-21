import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, LineElement, PointElement, CategoryScale, Title, LinearScale} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title);

export default function Home() {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const data = {
    labels: ['2023/01/01', '2023/01/01', '2023/01/0'],
    datasets: [
      {
        data: [1,2,3,4,5,6,7],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  return (
    <>
      <Line options={options} data={data}/>
    </>
  )
}
