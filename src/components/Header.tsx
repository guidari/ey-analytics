import { Box } from "@mui/material";
import Image from "next/image";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 3,
        marginBottom: 5,
      }}
    >
      <Image src="/images/ey-analytics.png" width={146} height={60} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "right",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Guilherme Datilio</span>
          <span>guilhermedatilio@ey.com</span>
        </Box>

        <img
          src="/images/user.jpg"
          width={48}
          height={48}
          style={{ borderRadius: "50px" }}
        />
      </Box>
    </Box>
  );
}
