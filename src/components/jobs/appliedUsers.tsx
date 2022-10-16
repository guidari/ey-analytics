import { Box, CircularProgress } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export default function AppliedUsers({ onRowClick, users }: any) {
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 200,
      headerClassName: "header-style",
    },

    {
      field: "skills",
      headerName: "Skills",
      width: 200,
      headerClassName: "header-style",
    },
    {
      field: "challenges",
      headerName: "Completed Challenges",
      flex: 1,
      headerClassName: "header-style",
    },
    {
      field: "hours",
      headerName: "Study hours",
      flex: 1,
      headerClassName: "header-style",
    },
    {
      field: "completedCourses",
      headerName: "Completed Courses",
      flex: 1,
      headerClassName: "header-style",
    },
  ];

  const rows: any = users;

  return (
    <Box>
      {users ? (
        <Box
          sx={{
            width: "100%",
            "& .header-style": {
              backgroundColor: "var(--gray-100)",
              color: "var(--white)",
            },
          }}
        >
          <DataGrid
            sx={{
              cursor: "pointer",
              backgroundColor: "var(--gray-700)",
              color: "var(--white)",
              "& .MuiDataGrid-cell:hover": {
                color: "var(--yellow-1)",
              },
              "& .MuiTablePagination-displayedRows": {
                color: "var(--white)",
              },
              "& .MuiSvgIcon-root": {
                fill: "var(--white)",
              },
            }}
            // getRowId={(row: any) => row.id}
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[25, 50, 75, 100]}
            onRowClick={onRowClick}
            autoHeight
          />
        </Box>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress sx={{ color: "var(--yellow-1)" }} />
        </Box>
      )}
    </Box>
  );
}
