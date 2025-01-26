import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Checkbox, Typography } from '@mui/material';
import clsx from 'clsx';
import './DataGrid.css'
import stl_photo from '../assets/background_stl.png'
import exocad_photo from '../assets/background_exocad.png'
import print_photo from '../assets/background_print.png'
import inlab_photo from '../assets/background_inlab.png'


const HeaderCell = ({src, text}) => {
  return (
    <Box
        sx={{
          background: '#abecff',
          color: '#5d5d5d',
          borderRadius: '16px',
          padding: '0 10px',
          width: '180px',
          height: '90px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px'
        }}
      >
        {src && <img src={src} className="header_image"  />}
        <Typography variant='h5' fontWeight={600}>{text}</Typography>
      </Box>
  )
}
const paintCell = (params: GridCellParams<any, number>) => {
  console.log(params)
    return clsx('currentCell', {
      red: params?.formattedValue?.color === 'red',
      orange: params?.formattedValue?.color === 'orange',
      gray: params?.formattedValue?.color === 'gray',
      green: params?.formattedValue?.color === 'green',
    });
  }
const getPaintedCellValue = (params: GridCellParams<any, number>) => {return {isDone: params?.isDone, date: params?.date, color: params?.color}}

const PaintedCell = ({row}) => {
  return (
    <Box sx={{justifyContent: 'center',display: 'flex', alignItems: 'center', marginLeft:'-5px'}}>
      <Checkbox checked={row?.formattedValue?.isDone}/>
      <Typography variant='subtitle2'>{row?.formattedValue?.date}</Typography>
    </Box>
  )
}

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 100, renderHeader: () => <HeaderCell text='ID' />, },
  {
    field: 'fullName',
    headerName: 'Полное имя',
    headerClassName: 'super-app-theme--header',
    renderHeader: () => <HeaderCell text='Полное имя' />,
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 220,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'date_end',
    headerName: 'Дата окончания',
    renderHeader: () => <HeaderCell text='Дата окончания' />,
    width: 220,
    editable: true,
  },
  {
    field: 'comments',
    headerName: 'Комментарии',
    renderHeader: () => <HeaderCell text='Комментарии' />,
    width: 220,
    editable: true,
  },
  {
    field: 'stl',
    headerName: 'STL',
    renderHeader: () => <HeaderCell src={stl_photo} text='STL' />,
    width: 220,
    cellClassName: paintCell,
    valueGetter: getPaintedCellValue,
    renderCell: (row) => <PaintedCell row={row}/>,
  },
    
                
{
field: 'exocad',
headerName: 'EXOCAD',
renderHeader: () => <HeaderCell src={exocad_photo} text='EXOCAD' />,
width: 220,
    cellClassName: paintCell,
    valueGetter: getPaintedCellValue,
    renderCell: (row) => <PaintedCell row={row}/>,
},
{
field: 'print',
headerName: 'PRINT',
renderHeader: () => <HeaderCell src={print_photo} text='PRINT' />,
width: 220,
    cellClassName: paintCell,
    valueGetter: getPaintedCellValue,
    renderCell: (row) => <PaintedCell row={row}/>,
},
    {
    field: 'inlab',
    headerName: 'inLAB',
    renderHeader: () => <HeaderCell src={inlab_photo} text='InLAB' />,
    width: 220,
    cellClassName: paintCell,
    valueGetter: getPaintedCellValue,
    renderCell: (row) => <PaintedCell row={row}/>,
    },
    
  {
    field: 'date_start',
    headerName: 'Дата приёма',
    renderHeader: () => <HeaderCell text='Дата приёма' />,
    width: 180,
    editable: true,
  },
  {
    field: 'ended',
    headerName: 'Завершено',
    renderHeader: () => <HeaderCell text='Завершено' />,
    width: 180,
    renderCell: (row) => {
        return (
            <Box sx={{display: 'flex', marginLeft:'-5px'}}>
                <Checkbox checked={row.value}/>
            </Box>
        )},
    },
    {
      field: 'type',
      headerName: 'Ряд',
      renderHeader: () => <HeaderCell text='Ряд' />,
      width: 140,
      editable: true,
    },
];

const rows = [
  { id: 1, lastName: 'Андреев Андрей', comments: 'Постановка брекетов',
    date_start: '13.01.2025',
    date_end: '20.01.2025',
    stl: {isDone: true, date: '16.01', color: 'green'},
    exocad: {isDone: true, date: '18.01', color: 'green'},
    print: {isDone: true, date: '19.01', color: 'green'},
    inlab: {isDone: true, date: '20.01', color: 'green'},
    ended: true,
    type: 'Нижний' },
  { id: 2, lastName: 'Кириллов Кирилл', comments: 'Постановка первых брекетов',
    date_start: '16.01.2025',
    date_end: '23.01.2025',
    stl: {isDone: true, date: '16.01', color: 'green'},
    exocad: {isDone: true, date: '19.01', color: 'green'},
    print: {isDone: true, date: '21.01', color: 'green'},
    inlab: {isDone: true, date: '23.01', color: 'green'},
    ended: true,
    type: 'Нижний'
   },
  { id: 3, lastName: 'Еленова Елена',
    date_start: '17.01.2025',
    date_end: '24.01.2025',
    stl: {isDone: true, date: '18.01', color: 'green'},
    exocad: {isDone: true, date: '20.01', color: 'green'},
    print: {isDone: true, date: '22.01', color: 'green'},
    inlab: {isDone: true, date: '24.01', color: 'green'},
    ended: true,
    type: 'Нижний'
  },
  { id: 4, lastName: 'Богданов Богдан',
    date_start: '02.01.2025',
    stl: {isDone: true, date: '19.01', color: 'green'},
    exocad: {isDone: true, date: '21.01', color: 'green'},
    print: {isDone: true, date: '23.01', color: 'green'},
    inlab: {isDone: false, date: '25.01', color: 'red'},
    type: 'Нижний'
  },
  { id: 5, lastName: 'Иванов Иван',
    date_start: '12.01.2025',
    stl: {isDone: true, date: '20.01', color: 'green'},
    exocad: {isDone: true, date: '22.01', color: 'green'},
    print: {isDone: true, date: '24.01', color: 'green'},
    inlab: {isDone: false, date: '25.01', color: 'red'},
  type: 'Нижний'
  },
  { id: 6, lastName: 'Петров Петр',type: 'Верхний',
    date_start: '07.01.2025',
    stl: {isDone: true, date: '20.01', color: 'green'},
    exocad: {isDone: true, date: '23.01', color: 'green'},
    print: {isDone: false, date: '25.01', color: 'red'},
    inlab: {isDone: false, date: '26.01', color: 'orange'},
  },
  { id: 7, lastName: 'Валентинов Валентин', type: 'Верхний',
    date_start: '17.01.2025',
    stl: {isDone: true, date: '21.01', color: 'green'},
    exocad: {isDone: true, date: '24.01', color: 'green'},
    print: {isDone: false, date: '26.01', color: 'orange'},
    inlab: {isDone: false, date: '29.01', color: 'gray'},
  },
  { id: 8, lastName: 'Степанов Степан', type: 'Нижний',
    date_start: '19.01.2025',
    stl: {isDone: true, date: '22.01', color: 'green'},
    exocad: {isDone: false, date: '25.01', color: 'red'},
    print: {isDone: false, date: '27.01', color: 'orange'},
    inlab: {isDone: false, date: '30.01', color: 'gray'},
  },
  { id: 9, lastName: 'Валерьева Валерия',
    date_start: '21.01.2025',
    stl: {isDone: false, date: '25.01', color: 'red'},
    exocad: {isDone: false, date: '27.01', color: 'orange'},
    print: {isDone: false, date: '28.01', color: 'gray'},
    inlab: {isDone: false, date: '30.01', color: 'gray'},
    type: 'Верхний'
  },
];

export default function DataGridDemo() {
  return (
    <Box sx={{
        height: 600,
        width: '100%',
        '& .currentCell.green': {
          backgroundColor: '#21ff2ac2',
          color: '#000000',
          fontWeight: '600',
        },
        '& .currentCell.red': {
            backgroundColor: '#ff00289e' ,
          color: '#000000',
          fontWeight: '600',
        },
        '& .currentCell.orange': {
          backgroundColor: '#ff9100cf',
          color: '#000000',
          fontWeight: '600',
        },
        '& .currentCell.gray': {
          backgroundColor: '#9a9a9a8a',
          color: '#000000',
          fontWeight: '600',
        },
     }}>
      <DataGrid
        rows={rows}
        sx={{background: '#ffffff'}}
        columns={columns}
        columnHeaderHeight={112}
        checkboxSelection
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}