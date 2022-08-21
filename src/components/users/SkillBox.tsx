import { Box } from "@mui/material";

interface ISkillBox {
  title: string;
}

export default function SkillBox({ title }: ISkillBox) {
  return (
    <Box
      sx={{
        borderRadius: 4,
        backgroundColor: "var(--yellow-1)",
        color: "var(--gray-700)",
        fontWeight: "bold",
        paddingX: 3,
        paddingY: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {title}
    </Box>
  );
}
