import FactCheckIcon from "@mui/icons-material/FactCheck";
import { Box, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import {
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DefaultChart from "../../components/chart/DefaultChart";

import { Layout } from "../../components/layout";
import ButtonSocial from "../../components/users/ButtonSocial";
import Language from "../../components/users/Language";
import ProgressBox from "../../components/users/ProgressBox";
import SkillBox from "../../components/users/SkillBox";
import { db } from "../../config/firebase";
import { IUser } from "../../interface/IUser";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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

  useEffect(() => {
    fetchUserName();
  }, []);

  const series = [{ name: "series1", data: [31, 120, 10, 28, 56, 19, 45] }];

  console.log("user", user);

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
                  <span>🎃 {user?.location}</span>
                  <span>🎃 {user?.email}</span>
                  <span>🎃 {user?.phone}</span>
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
                  gridTemplateColumns: "1fr 1fr 1fr",
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
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/U4rEIeDBigw"
                style={{ marginTop: 20 }}
              ></iframe>
            </Box>
          </Stack>

          <DefaultChart title="Hours" series={series} />
        </Box>
      </>
    </Layout>
  );
};

export default UserInfo;
