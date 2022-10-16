import { Box, Grid } from "@mui/material";
import { collection, getDocs, query } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import JobBox from "../../components/jobs/jobBox";
import { Layout } from "../../components/layout";
import MyButton from "../../components/myButton";
import { db } from "../../config/firebase";
import { IJobBox } from "../../interface/IJobBox";

export default function Jobs() {
  const [jobs, setJobs] = useState<IJobBox[]>([]);

  const getJobs = async () => {
    const docRef = collection(db, "jobs");

    const q = query(docRef);

    const querySnapshot = await getDocs(q);
    let allJobs: any = [];
    querySnapshot.forEach((doc) => {
      allJobs.push(doc.data());
    });
    setJobs(allJobs);
    console.log("allJobs", allJobs);
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "var(--gray-700)",
          paddingX: 3,
          paddingY: 3,
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <h2>Jobs</h2>

          <Link href="jobs/registerNewJob">
            <MyButton title="Add new job" />
          </Link>
        </Box>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={2}>
          {jobs.map((job) => {
            return (
              <Grid item xs={4}>
                <JobBox
                  id={job.id}
                  title={job.title}
                  description={job.description}
                  location={job.location}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Layout>
  );
}
