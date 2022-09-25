import { Button } from "@mui/material";

export default function MyButton({ title, link, ...rest }: any) {
  return (
    <Button
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
        transition: "0.3s",
        ":hover": {
          backgroundColor: "var(--yellow-1)",
          opacity: 0.8,
        },
      }}
      {...rest}
    >
      <a href={link} target="_blank">
        {title}
      </a>
    </Button>
  );
}
