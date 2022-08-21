import { Box } from "@mui/material";

interface ILanguage {
  language: string;
  proficiency: string;
}

export default function Language({ language, proficiency }: ILanguage) {
  return (
    <Box
      sx={{
        borderBottom: "1px solid var(--gray-900)",
        lineHeight: 2,
      }}
    >
      <p style={{ marginTop: 15, fontWeight: "bold" }}>{language}</p>
      <p style={{ marginBottom: 15, color: "var(--gray-900)" }}>
        {proficiency}
      </p>
    </Box>
  );
}
