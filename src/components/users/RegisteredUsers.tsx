import { Box, CircularProgress } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RegisteredUsers({ onRowClick }: any) {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get(
        `https://62e3f5c5c6b56b45117f9631.mockapi.io/api/users
        `
      )
      .then((response: any) => {
        setUsers(response.data);
      });
  }, []);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 286,
      headerClassName: "header-style",
    },
    {
      field: "email",
      headerName: "Email",
      width: 286,
      headerClassName: "header-style",
    },
    {
      field: "active",
      headerName: "Status",
      width: 286,
      headerClassName: "header-style",
    },
  ];

  const rows: any = users;

  return (
    <Box>
      {users ? (
        <Box
          sx={{
            height: 635,
            width: "100%",
            "& .header-style": {
              backgroundColor: "var(--gray-700)",
              color: "var(--white)",
            },
          }}
        >
          <DataGrid
            sx={{
              cursor: "pointer",
              backgroundColor: "var(--gray-700)",
              color: "var(--white)",
            }}
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            onRowClick={onRowClick}
          />
        </Box>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}
