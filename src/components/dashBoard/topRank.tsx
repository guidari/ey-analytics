import { Box, Button } from "@mui/material";

import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import Router from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { IUserRow } from "../../interface/IUser";

export default function TopRank() {
  const [users, setUsers] = useState<IUserRow[]>([]);

  const getUsers = async () => {
    const docRef = collection(db, "users");

    const q = query(docRef, orderBy("userLevel", "desc"), limit(3));

    const querySnapshot = await getDocs(q);
    let allUsers: any = [];
    querySnapshot.forEach((doc) => {
      allUsers.push(doc.data());
    });
    setUsers(allUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const userInfo = (e: any) => {
    // const userInfo: any = e.row;

    localStorage.setItem("userId", e.target.id);

    Router.push({
      pathname: "/users/userInfo",
      query: {
        id: e.target.id,
      },
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: 2,
        marginBottom: 2,
      }}
    >
      <Box sx={{ width: 80 }}>
        <p style={{ textAlign: "center", padding: 0.5 }}>
          <Button onClick={userInfo} sx={{ color: "white" }} id={users[1]?.id}>
            <img
              id={users[1]?.id}
              src={users[1]?.image}
              alt={users[1]?.name}
              title={users[1]?.name}
              width="50px"
              height="50px"
              style={{ borderRadius: "50%" }}
            />
          </Button>

          {users[1]?.name}
        </p>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            fontWeight: "bold",
            minHeight: 100,
            color: "var(--gray-700)",
            backgroundColor: "var(--yellow-1)",
          }}
        >
          <p style={{ fontSize: "30px" }}> {users[1]?.userLevel}</p>
          <p className="text-sm">Level</p>
        </Box>
      </Box>
      <Box sx={{ width: 80 }}>
        <p style={{ textAlign: "center", padding: 0.5 }}>
          <Button onClick={userInfo} sx={{ color: "white" }} id={users[0]?.id}>
            <img
              id={users[0]?.id}
              src={users[0]?.image}
              alt={users[0]?.name}
              title={users[0]?.name}
              width="50px"
              height="50px"
              style={{ borderRadius: "50%" }}
            />
          </Button>
          {users[0]?.name}
        </p>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            fontWeight: "bold",
            minHeight: 150,
            color: "var(--gray-700)",
            backgroundColor: "var(--yellow-1)",
          }}
        >
          <p style={{ fontSize: "30px" }}> {users[0]?.userLevel}</p>

          <p className="text-sm">Level</p>
        </Box>
      </Box>
      <Box sx={{ width: 80 }}>
        <p style={{ textAlign: "center", padding: 0.5 }}>
          <Button onClick={userInfo} sx={{ color: "white" }} id={users[2]?.id}>
            <img
              id={users[2]?.id}
              src={users[2]?.image}
              alt={users[2]?.name}
              title={users[2]?.name}
              width="50px"
              height="50px"
              style={{ borderRadius: "50%" }}
            />
          </Button>
          {users[2]?.name}
        </p>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            fontWeight: "bold",
            minHeight: 50,
            color: "var(--gray-700)",
            backgroundColor: "var(--yellow-1)",
          }}
        >
          <p style={{ fontSize: "30px" }}> {users[2]?.userLevel}</p>
          <p className="text-sm">Level</p>
        </Box>
      </Box>
    </Box>
  );
}
