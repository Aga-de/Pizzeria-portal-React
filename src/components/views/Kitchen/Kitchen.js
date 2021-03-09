import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'number', headerName: 'Number/Table', type: 'number', width: 130},
  { field: 'order', headerName: 'Order', width: 130 },
  {
    field: 'options',
    headerName: 'Options',
    width: 160,
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    type: 'number',
    width: 130,
  },
  {
    field: 'fullData',
    headerName: 'Full data',
    sortable: false,
    width: 300,
    valueGetter: (params) =>
      `${params.getValue('order') || ''} ${params.getValue('options') || ''} ${params.getValue('quantity') || ''}`,
  },
];

const rows = [
  { id: 1, number: 234, order: 'Pizza', options: 'Mushroom', quantity: 2 },
  { id: 2, number: 3, order: 'Coffee', options: 'Americana', quantity: 3 },
  { id: 3, number: 3, order: 'Cake', options: 'Donut', quantity: 6 },
  { id: 4, number: 456, order: 'Pizza', options: 'Pepperoni', quantity: 3 },
  { id: 5, number: 2, order: 'Salad', options: 'Greek', quantity: 1 },
];

function Kitchen() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}


export default Kitchen;