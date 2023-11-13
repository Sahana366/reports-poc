import React, { useState } from 'react';
import ChartComponent from './Charts/Charts';
import TableComponent from './Table/Table';
import './App.css';

const App: React.FC = () => {
  const [selectedChart, setSelectedChart] = useState<string | null>(null);

  // Example data for charts
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Bar Chart',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
      {
        label: 'Line Chart',
        data: [30, 45, 15, 60, 90],
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      },
      {
        label: 'Pie Chart',
        data: [25, 45, 30],
        backgroundColor: ['red', 'blue', 'green'],
        borderWidth: 1,
      },
    ],
  };

  // Example options for charts
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Example data and columns for the table
  const tableData = [
    { id: 1, name: 'John Doe', age: 25, city: 'New York' },
    { id: 2, name: 'Jane Doe', age: 30, city: 'San Francisco' },
    { id: 3, name: 'Bob Smith', age: 22, city: 'Los Angeles' },
  ];

  const tableColumns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age' },
    { Header: 'City', accessor: 'city' },
  ];

  const handleButtonClick = (chartType: string) => {
    setSelectedChart(chartType);
  };

  return (
    <div className='App'>
      <h1 className='mtb-20'>Reports on selection of charts</h1>
      <div className='mtb-20'>
        <button onClick={() => handleButtonClick('bar')} className='mlr-20 p-10 Chart-btn'>Bar Chart</button>
        <button onClick={() => handleButtonClick('line')} className='mlr-20 p-10 Chart-btn'>Line Chart</button>
        <button onClick={() => handleButtonClick('pie')} className='mlr-20 p-10 Chart-btn'>Pie Chart</button>
        <button onClick={() => handleButtonClick('table')} className='mlr-20 p-10 Chart-btn'>Table</button>
      </div>
      {selectedChart ? (
        <>
          {selectedChart === 'bar' && (
            <ChartComponent chartType="bar" data={chartData} options={chartOptions} />
          )}
          {selectedChart === 'line' && (
            <ChartComponent chartType="line" data={chartData} options={chartOptions} />
          )}
          {selectedChart === 'pie' && (
            <ChartComponent chartType="pie" data={chartData} options={chartOptions} />
          )}
          {selectedChart === 'table' && (
            <TableComponent columns={tableColumns} data={tableData} />
          )}
        </>
      ) : (
        <p>Click on any above buttons to view report</p>
      )}
    </div>
  );
};

export default App;
