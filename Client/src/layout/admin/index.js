// import React from "react";
// // import './index.css';

// function ListOrder(){
//     return (
//         <div>

//         </div>
//     );
// }
// export default ListOrder;


import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
  { field: 'bookId', headerName: 'Book ID', width: 130 },
  { field: 'address', headerName: 'Address', width: 130 },
  { field: 'orderDate', headerName: '', width: 130 },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, bookId: 5, address:"Dimona,2213", orderDate:"one day" },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, bookId: 7, address:"asdas,1232", orderDate:"12/23/2123" },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, bookId: 2, address:"sdasd", orderDate:"/12/32/0029" },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, bookId: 3, address:"fdssdf", orderDate:"12/32/2000" },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, bookId: 3, address:"asdsda", orderDate:"" },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, bookId: 9, address:"sdsads", orderDate:"" },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, bookId: 5, address:"dfsdf", orderDate:"" },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, bookId: 5, address:"sdfsdf", orderDate:"" },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, bookId: 1, address:"fhjfg", orderDate:"" },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
