import { Box } from "@mui/material";

import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { IJob } from "../../interface/IJob";

export default function TopJobs() {
  const [jobs, setJobs] = useState<IJob[]>([]);

  const getJobs = async () => {
    const docRef = collection(db, "jobs");

    const q = query(docRef, orderBy("applications", "desc"), limit(5));

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
    <Box
      sx={{
        marginBottom: 2,
      }}
    >
      {jobs.map((job) => {
        return (
          <Box
            sx={{
              marginX: 2,
              marginBottom: 2,
              paddingY: 1,
              paddingX: 2,
              borderRadius: 2,
              backgroundColor: "var(--gray-100)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <div>
                <span style={{ fontWeight: "bold" }}>Role: </span>
                {job.title}
              </div>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <span style={{ fontWeight: "bold" }}>Applications: </span>
              {job.applications}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <span style={{ fontWeight: "bold" }}>ID: </span>
              {job.id}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
