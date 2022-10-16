import { Box, Grid, TextareaAutosize } from "@mui/material";
import {
  addDoc,
  collection,
  doc,
  DocumentData,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import MyButton from "../../components/myButton";
import { db } from "../../config/firebase";
import MyTextField from "../form/myTextField";

import { useEffect, useState } from "react";
import { IJob } from "../../interface/IJob";

export default function EditJob({ id, title, location, description }: any) {
  const [job, setJob] = useState<IJob | DocumentData>();

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

      setJob(data);
    } catch (err) {
      console.log("job not authenticated");
    }
  };

  useEffect(() => {
    fetchJobName();
  }, []);

  const editJob = async (e: any) => {
    e.preventDefault();
    const title = (document.getElementById("title") as HTMLInputElement).value;
    const description = (
      document.getElementById("description") as HTMLInputElement
    ).value;
    const location = (document.getElementById("location") as HTMLInputElement)
      .value;

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "jobs"), {
      title,
      description,
      location,
    });
    console.log("Document written with ID: ", docRef.id);

    updateDoc(doc(db, `jobs/${docRef.id}`), {
      id: docRef.id,
    });
  };
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "var(--gray-700)",
          paddingY: 3,
          borderRadius: 2,
        }}
      >
        <h2>Edit</h2>

        <Grid
          sx={{ marginTop: 2 }}
          component="form"
          onSubmit={editJob}
          container
          spacing={2}
          columns={{ xs: 6, sm: 8, md: 12 }}
        >
          <Grid item xs={6}>
            <MyTextField
              label="Title"
              id="title"
              defaultValue={job?.title! || title}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <MyTextField label="Location" id="location" required />
          </Grid>
          <Grid item xs={12}>
            <MyTextField label="Ddescription" id="description" required />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Write a detailed description"
              style={{
                width: "100%",
                height: "150px",
                backgroundColor: "var(--gray-300)",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <MyButton title="Edit" onClick={editJob} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
