import { Box, Grid, TextareaAutosize } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { Layout } from "../../components/layout";
import MyButton from "../../components/myButton";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import MyTextField from "../../components/form/myTextField";
import { db } from "../../config/firebase";

export default function RegisterNewJob() {
  const [skills, setSkills] = useState<string[]>([]);

  const registerJob = async (e: any) => {
    e.preventDefault();
    const title = (document.getElementById("title") as HTMLInputElement).value;
    const description = (
      document.getElementById("description") as HTMLInputElement
    ).value;
    const location = (document.getElementById("location") as HTMLInputElement)
      .value;
    const completeDescription = (
      document.getElementById("completeDescription") as HTMLInputElement
    ).value;

    console.log("skills", skills);

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "jobs"), {
      title,
      description,
      location,
      completeDescription,
      applications: 0,
      skills,
    });
    console.log("Document written with ID: ", docRef.id);

    updateDoc(doc(db, `jobs/${docRef.id}`), {
      id: docRef.id,
    });
  };

  const createUserSkill = (e: any) => {
    console.log("e", e.target.value);
    setSkills((current: string[]) => [...current, ...[e.target.value]]);

    const skillInput = document.querySelector(
      "#skillInput"
    ) as HTMLInputElement;
    skillInput.value = "";
  };

  const deleteSkill = (e: any) => {
    const id = e.target.id;
    const newArray = [];
    for (let index = 0; index < skills.length; index++) {
      const element = skills[index];
      newArray.push(element);

      if (element === id) {
        newArray.pop();
      }
    }
    setSkills(newArray);
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
            <MyTextField id="title" label="Job title" required />
          </Grid>
          <Grid item xs={6}>
            <MyTextField id="location" label="Location" required />
          </Grid>
          <Grid item xs={12}>
            <MyTextField id="description" label="Description" required />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              id="completeDescription"
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
          <Grid item xs={4}>
            <MyTextField
              id="skillInput"
              label="Skills"
              // onChange={(event: any) => setSkill(event.target.value)}
              onKeyPress={(e: any) => {
                if (e.key === "Enter") {
                  createUserSkill(e);
                }
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={2} columns={{ xs: 6, sm: 8, md: 12 }}>
              {skills.map((item: string) => {
                return (
                  <Grid item xs={4} id={item}>
                    <MyButton
                      key={item}
                      title={item}
                      onClick={(e: any) => deleteSkill(e)}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <MyButton title="Register" onClick={registerJob} />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
