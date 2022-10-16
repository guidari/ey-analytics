import { Box, Grid, TextareaAutosize, TextField } from "@mui/material";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Link from "next/link";
import { Layout } from "../../components/layout";
import MyButton from "../../components/myButton";
import { db } from "../../config/firebase";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function RegisterNewJob() {
  const registerJob = async (e: any) => {
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
        <h2>Add a new job role</h2>

        <Grid
          sx={{ marginTop: 2 }}
          component="form"
          onSubmit={registerJob}
          container
          spacing={2}
          columns={{ xs: 6, sm: 8, md: 12 }}
        >
          <Grid item xs={6}>
            <TextField
              required
              id="title"
              label="Job title"
              sx={{
                backgroundColor: "var(--gray-300)",
                width: "100%",
                color: "white",
                "& label.Mui-focused": {
                  color: "white",
                },
                "& label": {
                  color: "black",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "var(--gray-100)",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "yellow",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="location"
              label="Location"
              sx={{
                backgroundColor: "var(--gray-300)",
                width: "100%",
                color: "white",
                "& label.Mui-focused": {
                  color: "white",
                },
                "& label": {
                  color: "black",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "var(--gray-100)",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "yellow",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="description"
              label="Description"
              sx={{
                backgroundColor: "var(--gray-300)",
                width: "100%",
                color: "white",
                "& label.Mui-focused": {
                  color: "white",
                },
                "& label": {
                  color: "black",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "var(--gray-100)",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "yellow",
                  },
                },
              }}
            />
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
            <MyButton title="Register" onClick={registerJob} />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
