import { Box, Button, CircularProgress } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import axios from "axios";
import { collection, getDocs } from "firebase/firestore";
import { SetStateAction, useEffect, useState } from "react";
import { db } from "../../config/firebase";

export default function RegisteredUsers({ onRowClick }: any) {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const querySnapshot = await getDocs(collection(db, "users"));

    querySnapshot.forEach((doc) => {
      const document: SetStateAction<any[]> = [];

      querySnapshot.forEach((doc) => {
        document.push({
          ...doc.data(),
        });
      });

      setUsers(document);
    });
  }

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
      width: 200,
      headerClassName: "header-style",
    },
    {
      field: "hours",
      headerName: "Study hours",
      width: 153,
      headerClassName: "header-style",
    },
    {
      field: "completedCourses",
      headerName: "Completed Courses",
      width: 200,
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
            }}
            // getRowId={(row: any) => row.id}
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            onRowClick={onRowClick}
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
