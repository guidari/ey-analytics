import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import HamburguerMenu from "./menu/HamburguerMenu";

export default function Header() {
  const matches = useMediaQuery("(max-width:899px)");

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
      {matches && (
        <>
          <HamburguerMenu />
          <Image src="/images/ey-analytics.png" width={102} height={42} />
        </>
      )}

      {!matches && (
        <Image src="/images/ey-analytics.png" width={146} height={60} />
      )}
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
          {!matches && (
            <>
              <span style={{ fontWeight: "bold" }}>Guilherme Datilio</span>
              <span>Administrador</span>
            </>
          )}
        </Box>

        <img
          src="/images/user.jpg"
          width={48}
          height={48}
          style={{ borderRadius: "100%" }}
        />
      </Box>
    </Box>
  );
}
