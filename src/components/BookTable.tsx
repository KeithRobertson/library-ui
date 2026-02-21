import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Book } from '../types/Book';

interface BookTableProps {
  books: Book[];
}

const columns: GridColDef[] = [
  { field: 'title', headerName: 'Title', flex: 5, minWidth: 500 },
  { field: 'author', headerName: 'Author', flex: 1, minWidth: 150 },
];

const dataGridStyles = {
  '& .even': {
    backgroundColor: '#f5f5f5',
  },
};

export const BookTable = ({ books }: BookTableProps) => {
  const rows = books.map((book, index) => ({
    id: index,
    ...book,
  }));

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { pageSize: 10 },
        },
      }}
      pageSizeOptions={[5, 10, 25]}
      disableRowSelectionOnClick
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
      }
      sx={dataGridStyles}
    />
  );
};
