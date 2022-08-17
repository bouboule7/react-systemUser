import React, { useEffect , useState} from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import './List.css'

function TablePaginationActions(props) {
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <button
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <div>((</div>
      </button>
      <button
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <div>(</div>
      </button>
      <button
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <div>)</div>
      </button>
      <button
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <div>))</div>
        </button>
    </Box>
  );
}

export default function List(props) {
  const [state, setState]=useState([])
  let changemet=props.changement;
  useEffect(()=>{
    fetch("http://localhost:8081/connected").then(response=>response.json())
          .then(data=>{
            setState(data)
          })
          .catch((err)=>{
            alert("error"+err.message);
          })
  },[changemet])

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  const handleChangePage = (
    event,
    newPage
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="lists">
      <p>Liste des utilisateur avec leur information respectif:</p>
    <TableContainer className="listeTable" component={Paper}>
      <Table aria-label="custom pagination table">
        <thead>
          <tr>
            <td>
              User
            </td>
            <td>
              ****
            </td>
            <td>
              UserId
            </td>
            <td>
              GroupId
            </td>
            <td>
              Group
            </td>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? state.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : state
          ).map((row) => (
            <tr key={row.userName}>
              <td className="nom">
                {row.userName}
              </td>
              <td  >
                {row.password}
              </td>
              <td >
                {row.userId}
              </td>
              <td>
                {row.groupId}
              </td>
              <td>
              {row.groupe}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <TablePagination
              rowsPerPageOptions={[3, 5,10,15,20,25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={state.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page yesssss',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </tr>
        </tfoot>
      </Table>
    </TableContainer>
    </div>
  );
}
