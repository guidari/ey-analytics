import { Box } from "@mui/material";
import Image from "next/image";

interface IButtonSocial {
  title: string;
  href: string;
  icon: any;
}

export default function ButtonSocial({ title, href, icon }: IButtonSocial) {
  return (
    <a id="github" href={href} target="_blank">
      <Box
        sx={{
          display: "flex",
          gap: 1,
          backgroundColor: "var(--gray-100)",
          color: "var(--white)",
          paddingX: 2,
          paddingY: 1,
          marginY: 2,
          width: 130,
          borderRadius: 2,
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          textDecoration: "none",
          "&:hover": {
            backgroundColor: "var(--gray-300)",
          },
          cursor: "pointer",
        }}
      >
        <Image src={`/images/${icon}.png`} width={20} height={20} />
        <p>{title}</p>
      </Box>
    </a>
  );
}
