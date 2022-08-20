import FactCheckIcon from "@mui/icons-material/FactCheck";
import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";

import { Layout } from "../../components/layout";

const UserInfo = () => {
  const matches = useMediaQuery("(min-width:900px)");
  const router = useRouter();

  const {
    query: { name, email },
  } = router;

  console.log("name", name);
  console.log("email", email);
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
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Box sx={{ display: "flex", gap: 3 }}>
            <Box>
              <Image
                src="/images/user.jpg"
                width={matches ? 170 : 100}
                height={matches ? 150 : 90}
                style={{ borderRadius: 8 }}
              />
            </Box>

            <Stack sx={{ justifyContent: "space-between" }}>
              <h3>{name}</h3>
              <span>Application Developer</span>
              <span>🎃 Vancouver Canada</span>
              <span>🎃 {email}</span>
              <span>🎃 +82 2 97237-4690</span>
            </Stack>
          </Box>
          <Box>
            <h3>Social Medias</h3>
            <Button>Github</Button>
            <Button>LinkedIn</Button>
          </Box>
        </Stack>

        {/* MY PROGRESS */}
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{ justifyContent: "space-between", marginTop: 5 }}
        >
          <Box>
            <p style={{ fontWeight: "bold" }}>Completed courses</p>
            <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
              <FactCheckIcon sx={{ color: "var(--yellow-1)" }} />
              <p style={{ fontSize: 18, fontWeight: "bold" }}>11</p>
            </Box>
          </Box>
          <Box>
            <p style={{ fontWeight: "bold" }}>Completed courses</p>
            <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
              <FactCheckIcon sx={{ color: "var(--yellow-1)" }} />
              <p style={{ fontSize: 18, fontWeight: "bold" }}>11</p>
            </Box>
          </Box>
          <Box>
            <p style={{ fontWeight: "bold" }}>Completed courses</p>
            <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
              <FactCheckIcon sx={{ color: "var(--yellow-1)" }} />
              <p style={{ fontSize: 18, fontWeight: "bold" }}>11</p>
            </Box>
          </Box>
          <Box>
            <p style={{ fontWeight: "bold" }}>Completed courses</p>
            <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
              <FactCheckIcon sx={{ color: "var(--yellow-1)" }} />
              <p style={{ fontSize: 18, fontWeight: "bold" }}>11</p>
            </Box>
          </Box>
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
              <Box
                sx={{
                  borderRadius: 4,

                  backgroundColor: "var(--gray-300)",
                  paddingX: 3,
                  paddingY: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                React
              </Box>
              <Box
                sx={{
                  borderRadius: 4,

                  backgroundColor: "var(--gray-300)",
                  paddingX: 3,
                  paddingY: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                React
              </Box>
              <Box
                sx={{
                  borderRadius: 4,

                  backgroundColor: "var(--gray-300)",
                  paddingX: 3,
                  paddingY: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                React
              </Box>
              <Box
                sx={{
                  borderRadius: 4,

                  backgroundColor: "var(--gray-300)",
                  paddingX: 3,
                  paddingY: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                React
              </Box>
            </div>
          </Box>

          <Box sx={matches ? { width: "50%" } : { width: "100%" }}>
            <h2>Languages</h2>
          </Box>
        </Stack>
      </Box>
    </Layout>
  );
};

export default UserInfo;
