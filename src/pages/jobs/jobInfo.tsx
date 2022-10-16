import { Box } from "@mui/material";
import Link from "next/link";
import { Layout } from "../../components/layout";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Router, { useRouter } from "next/router";
import { IJob } from "../../interface/IJob";

import {
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { SetStateAction, useEffect, useState } from "react";
import AppliedUsers from "../../components/jobs/appliedUsers";
import MyButton from "../../components/myButton";
import { db } from "../../config/firebase";

export default function RegisterNewJob() {
  const router = useRouter();

  const [job, setJob] = useState<IJob | DocumentData>();
  const [users, setUsers] = useState<any[]>([]);

  const {
    query: { id },
  } = router;

  const fetchJobName = async () => {
    try {
      let jobId;
      if (!id) {
        jobId = localStorage.getItem("jobId");
      } else {
        jobId = id;
      }
      const q = query(collection(db, "jobs"), where("id", "==", jobId));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      const users = data.users;
      const document: SetStateAction<any[]> = [];

      for (let index = 0; index < users.length; index++) {
        const element: string = users[index];
        const newQ = query(collection(db, "users"), where("id", "==", element));
        const newDoc = await getDocs(newQ);
        const newData = newDoc.docs[0].data();
        document.push(newData);
      }

      setUsers(document);
      setJob(data);
    } catch (err) {
      console.log("job not authenticated");
    }
  };

  useEffect(() => {
    fetchJobName();
  }, []);

  const userInfo = (e: any) => {
    const userInfo: any = e.row;
    console.log("userInfo", userInfo);

    localStorage.setItem("userId", e.row.id);

    Router.push({
      pathname: "/users/userInfo",
      query: {
        id: userInfo.id,
      },
    });
  };

  return (
    <Layout>
      <Box
        sx={{
          marginBottom: 3,
        }}
      >
        <Link href="/jobs">
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--yellow-1)",
              color: "var(--gray-700)",
              paddingY: 1,
              width: 180,
              borderRadius: 2,
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            <ArrowBackIcon />
            <span>Back to jobs</span>
          </Box>
        </Link>
      </Box>
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
            // placeItems: "center",
            marginBottom: 2,
          }}
        >
          <h2 style={{ marginBottom: 20 }}>
            Users who applied to this job role
          </h2>
          <Box>
            <MyButton
              title="Job description"
              link={`${process.env.NEXT_PUBLIC_EY_WEBSITE}jobs/jobDescription?id=${job?.id}`}
            />
          </Box>
        </Box>
        <AppliedUsers users={users} onRowClick={userInfo} />

        {/* <EditJob id={id} title={job?.title} /> */}
      </Box>
    </Layout>
  );
}
