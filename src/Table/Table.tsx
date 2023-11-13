import React from 'react';
import { useTable } from 'react-table';

interface TableProps {
  columns: any[]; // Replace 'any' with the appropriate type based on your columns structure
  data: any[]; // Replace 'any' with the appropriate type based on your data structure
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <div className='w-1oo d-flex-center'>
        <table {...getTableProps()} style={{ width: '60%', borderCollapse: 'collapse' }}>
        <thead>
            {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {column.render('Header')}
                </th>
                ))}
            </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
            prepareRow(row);
            return (
                <tr {...row.getRowProps()} style={{ border: '1px solid #ddd', padding: '8px' }}>
                {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
                </tr>
            );
            })}
        </tbody>
        </table>
    </div>
  );
};

export default Table;
