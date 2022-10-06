import { Box, useMediaQuery } from "@mui/material";

interface IBoxContent {
  children: any;

  title: string;
}

export default function BoxContent({ children, title }: IBoxContent) {
  const matches = useMediaQuery("(min-width:900px)");

  return (
    <Box
      sx={{
        backgroundColor: "var(--gray-700)",
        borderRadius: 2,
        paddingX: matches ? 2 : 0,
        paddingY: 1,
        margin: matches ? 2 : 0,
        marginTop: 2,
      }}
    >
      <h3 style={{ paddingLeft: 20, marginTop: 20, marginBottom: 20 }}>
        {title}
      </h3>

      {children}
    </Box>
  );
}
