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
import { IJob } from "../../interface/IJob";
import { IUser } from "../../interface/IUser";
import MyButton from "../myButton";

export default function AppliedJobs({ id }: any) {
  const [user, setUser] = useState<IUser | DocumentData>();
  const [jobs, setJobs] = useState<any[]>([]);

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

      let allJobs = [];

      const jobsId = data.appliedJobs;

      for (let index = 0; index < jobsId.length; index++) {
        const element = jobsId[index];
        console.log("element", element);
        const q = query(collection(db, "jobs"), where("id", "==", element));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        allJobs.push(data);
      }

      setUser(data);
      setJobs(allJobs);
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
        // backgroundColor: "var(--gray-100)",
        paddingX: 3,
        paddingY: 3,
        borderRadius: 2,
      }}
    >
      <h2 style={{ marginBottom: 20 }}>Applied Jobs</h2>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 6, sm: 8, md: 12 }}
        sx={{ display: "flex", gap: 2 }}
      >
        {jobs.map((job: IJob) => {
          return (
            <Grid
              item
              xs={4}
              sx={{
                backgroundColor: "var(--gray-100)",
                marginY: 2,
                borderRadius: 2,
                paddingBottom: 3,
                position: "relative",
              }}
            >
              <Box>
                <span style={{ fontWeight: "bold" }}>Role: </span>
                {job.title}
              </Box>
              <Box sx={{ marginY: 1 }}>
                <span style={{ fontWeight: "bold" }}>Applications: </span>
                {job.applications}
              </Box>
              <Box>
                <span style={{ fontWeight: "bold" }}>ID: </span>
                {job.id}
              </Box>

              <Box sx={{ height: 50 }}></Box>
              <Box sx={{ position: "absolute", bottom: 20, left: 20 }}>
                <MyButton
                  link={`${process.env.NEXT_PUBLIC_EY_WEBSITE}jobs/jobDescription?id=${id}`}
                  title="See role"
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
