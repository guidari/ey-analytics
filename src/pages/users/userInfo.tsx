import FactCheckIcon from "@mui/icons-material/FactCheck";
import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import {
  arrayUnion,
  collection,
  doc,
  DocumentData,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Layout } from "../../components/layout";
import ButtonSocial from "../../components/users/ButtonSocial";
import Language from "../../components/users/Language";
import ProgressBox from "../../components/users/ProgressBox";
import SkillBox from "../../components/users/SkillBox";
import { db } from "../../config/firebase";
import { IUser } from "../../interface/IUser";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MyButton from "../../components/myButton";
import AppliedJobs from "../../components/users/AppliedJobs";
import CompletedCourses from "../../components/users/CompletedCourses";
import UserProgress from "../../components/users/UserProgress";

const UserInfo = () => {
  const matches = useMediaQuery("(min-width:900px)");
  const router = useRouter();

  const [user, setUser] = useState<IUser | DocumentData>();

  const {
    query: { id },
  } = router;

  const fetchUserName = async () => {
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

  function formatDate(date: any) {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  const notification = {
    id: Date.now(),
    title: "Job opportunity",
    description: "You recevied an email, go check it out!",
    date: formatDate(Date.now()),
  };

  useEffect(() => {
    fetchUserName();
  }, []);

  const sendNotification = () => {
    alert("Perfect! Your notification was sent!");
    updateDoc(doc(db, `users/${id}`), {
      notifications: arrayUnion(notification),
    });
  };

  const watchVideo = () => {
    const video = document.querySelector("#video") as HTMLVideoElement;
    const source = document.querySelector("#source") as HTMLSourceElement;
    const buttonStart = document.querySelector(
      "#buttonStart"
    ) as HTMLButtonElement;
    buttonStart.style.display = "none";
    source.src = user?.video;
    video.load();
    video.play();
  };

  return (
    <Layout>
      <>
        <Box
          sx={{
            marginBottom: 3,
          }}
        >
          <Link href="/users">
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
              <span>Back to users</span>
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
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Box
              sx={
                matches
                  ? { width: "50%", display: "flex", gap: 3 }
                  : { width: "100%", display: "flex", gap: 3 }
              }
            >
              <Stack
                direction={{ xs: "column", sm: "row", md: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
              >
                <Box>
                  <img
                    src={user?.image}
                    width={matches ? 170 : 100}
                    height={matches ? 150 : 90}
                    style={{ borderRadius: 8 }}
                  />
                </Box>

                <Stack sx={{ justifyContent: "space-between", lineHeight: 2 }}>
                  <h3>{user?.name}</h3>
                  <span>{user?.headline}</span>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <LocationOnIcon style={{ color: "var(--yellow-1)" }} />
                    {user?.location}
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <EmailIcon style={{ color: "var(--yellow-1)" }} />{" "}
                    {user?.email}
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <LocalPhoneIcon style={{ color: "var(--yellow-1)" }} />{" "}
                    {user?.phone}
                  </Box>
                </Stack>
              </Stack>
            </Box>
            <Box sx={matches ? { width: "50%" } : { width: "100%" }}>
              <h3 style={{ marginBottom: 20 }}>Social Medias</h3>
              <ButtonSocial
                title="GitHub"
                href={`${user?.github}`}
                icon="github"
              />
              <ButtonSocial
                title="LinkedIn"
                href={`${user?.linkedin}`}
                icon="linkedin"
              />
            </Box>
          </Stack>
          {/* MY PROGRESS */}
          <Stack
            direction={{ xs: "column", sm: "row", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{ justifyContent: "space-between", marginTop: 5 }}
          >
            <ProgressBox
              title="Enrolled Courses"
              icon={<FactCheckIcon sx={{ color: "var(--yellow-1)" }} />}
              statusNumber={user?.coursesInProgress}
            />
            <ProgressBox
              title="Completed courses"
              icon={<FactCheckIcon sx={{ color: "var(--yellow-1)" }} />}
              statusNumber={user?.completedCourses}
            />
            <ProgressBox
              title="Hours Completed this year"
              icon={<FactCheckIcon sx={{ color: "var(--yellow-1)" }} />}
              statusNumber={user?.hours}
            />
            <ProgressBox
              title="Completed Challenges"
              icon={<FactCheckIcon sx={{ color: "var(--yellow-1)" }} />}
              statusNumber={user?.challenges}
            />
          </Stack>
          {/* SKILLS */}
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{ marginTop: 3, display: "flex" }}
          >
            <Box
              sx={
                matches
                  ? {
                      width: "50%",
                    }
                  : {
                      width: "100%",
                    }
              }
            >
              <h2 style={{ marginBottom: 30 }}>Skills</h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: matches ? "1fr 1fr 1fr" : "1fr 1fr",
                  gap: 10,
                }}
              >
                {user?.skills?.map((item: string) => (
                  <SkillBox title={item} />
                ))}
              </div>
            </Box>

            {/* LANGUAGE */}
            <Box sx={matches ? { width: "50%" } : { width: "100%" }}>
              <h2 style={{ marginBottom: 25 }}>Languages</h2>

              {user?.languages.map((item: any) => {
                return (
                  <Language
                    language={item.language}
                    proficiency={item.profiency}
                  />
                );
              })}
            </Box>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {/* ABOUT */}
            <Box sx={matches ? { width: "50%" } : { width: "100%" }}>
              <h2 style={{ marginTop: 20 }}>About</h2>
              <Box
                sx={{
                  backgroundColor: "var(--gray-100)",
                  padding: 3,
                  borderRadius: 2,
                  marginTop: 3,
                }}
              >
                <p>{user?.about}</p>
              </Box>
            </Box>
            {/* INTRODUCTION VIDEO */}
            <Box sx={matches ? { width: "50%" } : { width: "100%" }}>
              <h2 style={{ marginTop: 20 }}>Introduction video</h2>
              {/* <iframe
                width="100%"
                height="250"
                // src="https://www.youtube.com/embed/U4rEIeDBigw"
                // src={user?.video}
                style={{ marginTop: 20 }}
              >
                <video src="{user?.video}"></video>
              </iframe> */}
              <Box sx={{ position: "relative" }}>
                <Button
                  id="buttonStart"
                  variant="text"
                  type="button"
                  onClick={watchVideo}
                  sx={{
                    position: "absolute",
                    width: "100%",
                    marginTop: 2.3,
                    height: "250px",
                    zIndex: 9999,
                  }}
                >
                  Click here to start the video
                </Button>
                <video
                  width="100%"
                  height="250"
                  style={{ marginTop: 20, zIndex: 9 }}
                  id="video"
                  controls
                >
                  <source id="source" src={user?.video} />
                </video>
              </Box>
            </Box>
          </Stack>

          <h2 style={{ marginBottom: 10 }}>User Progress</h2>
          <UserProgress id={id} />

          <h2 style={{ marginBottom: 10 }}>Applied Jobs</h2>

          <AppliedJobs id={id} />

          <h2 style={{ marginBottom: 10 }}>Completed Courses</h2>
          <CompletedCourses id={id} />

          <h2 style={{ marginBottom: 10 }}>Get in touch!</h2>

          <Box
            sx={{
              backgroundColor: "var(--gray-100)",
              paddingX: 3,
              paddingY: 3,
              borderRadius: 2,
            }}
          >
            <p>
              This profile fits an open opportunity? Follow these steps to get
              in touch with him/her:
            </p>

            <Grid sx={{ marginTop: 2 }} container columns={{ xs: 6, md: 12 }}>
              <Grid sx={{ paddingRight: 2 }} item xs={6}>
                <strong>Step 1</strong>
                <p style={{ marginTop: 20, marginBottom: 20 }}>
                  Send it an email saying that you liked his/her profile and
                  insert a link to enroll to that opportunity.
                </p>

                <MyButton
                  link={`https://mail.google.com/mail/?view=cm&fs=1&to=${user?.email}`}
                  title="Send email"
                />
              </Grid>
              <Grid sx={{ paddingRight: 2 }} item xs={6}>
                <strong>Step 2</strong>
                <p style={{ marginTop: 20, marginBottom: 20 }}>
                  Send a notification on the EY Platform to let him/her know
                  that we have an eye on him/her.
                </p>
                <MyButton
                  title="Send notification"
                  onClick={sendNotification}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </>
    </Layout>
  );
};

export default UserInfo;
