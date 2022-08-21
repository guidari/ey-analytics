import { Box, Container } from "@mui/material";

import Link from "next/link";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 10,
          backgroundColor: "var(--gray-700)",
          padding: 5,
          borderRadius: 2,
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Find the best match for our company
        </h1>
        <Image
          src="/images/undraw_analytics.svg"
          width={300}
          height={300}
          style={{ marginTop: 20, marginBottom: 20 }}
        />

        <Box
          sx={{
            marginTop: 6,
          }}
        >
          <Link href="/dashboard">
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "var(--yellow-1)",
                color: "var(--gray-700)",
                paddingY: 1,
                width: 200,
                borderRadius: 2,
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              <span>Go to Dashboard</span>
              <ArrowForwardIcon />
            </Box>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
