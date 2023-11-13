import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './Charts.css';

interface ChartsProps {
  chartType: 'bar' | 'line' | 'pie';
  data: any; // Replace 'any' with the appropriate type based on your data structure
  options?: any; // Replace 'any' with the appropriate type based on your options structure
}

const Charts: React.FC<ChartsProps> = ({ chartType, data, options }) => {
  let chart;

  switch (chartType) {
    case 'bar':
      chart = <Bar data={data} options={options} />;
      break;
    case 'line':
      chart = <Line data={data} options={options} />;
      break;
    case 'pie':
      chart = <Pie data={data} options={options} />;
      break;
    default:
      chart = null;
  }

  return <div className='w-100 d-flex-center'>
     <div className='Adjust-width'>{chart}</div>
    </div>;
};

export default Charts;
