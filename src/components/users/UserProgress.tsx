import { Box, Grid } from "@mui/material";

import {
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { IUser } from "../../interface/IUser";

export default function UserProgress({ id }: any) {
  const [user, setUser] = useState<IUser | DocumentData>();

  const fetchUserData = async () => {
    try {
      let userId;
      if (!id) {
        userId = localStorage.getItem("userId");
      } else {
        userId = id;
      }
      const q = query(collection(db, "users"), where("id", "==", userId));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setUser(data);
    } catch (err) {
      console.log("User not authenticated");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: "var(--gray-100)",
        borderRadius: 2,
        paddingX: 4,
        paddingY: 2,
        marginY: 3,
      }}
    >
      <Grid container columns={{ xs: 3, sm: 8, md: 12 }}>
        <Grid xs={3}>
          <Box sx={{ marginBottom: 1 }}>
            🚀{" "}
            <span style={{ fontSize: 24, fontWeight: "bold" }}>
              {user?.progress.coursesInProgress}
            </span>
          </Box>
          <p style={{ fontSize: 20, fontWeight: "bold" }}>Enrolled Courses</p>
        </Grid>
        <Grid xs={3}>
          <Box sx={{ marginBottom: 1 }}>
            🚀{" "}
            <span style={{ fontSize: 24, fontWeight: "bold" }}>
              {" "}
              {user?.progress.completedCourses}
            </span>
          </Box>
          <p style={{ fontSize: 20, fontWeight: "bold" }}>Completed courses</p>
        </Grid>
        <Grid xs={3}>
          <Box sx={{ marginBottom: 1 }}>
            🚀{" "}
            <span style={{ fontSize: 24, fontWeight: "bold" }}>
              {" "}
              {user?.progress.hours}
            </span>
          </Box>
          <p style={{ fontSize: 20, fontWeight: "bold" }}>Study hours</p>
        </Grid>
        <Grid xs={3}>
          <Box sx={{ marginBottom: 1 }}>
            🚀{" "}
            <span style={{ fontSize: 24, fontWeight: "bold" }}>
              {" "}
              {user?.progress.challenges}
            </span>
          </Box>
          <p style={{ fontSize: 20, fontWeight: "bold" }}>
            Completed Challenges
          </p>
        </Grid>
      </Grid>
    </Box>
  );
}
