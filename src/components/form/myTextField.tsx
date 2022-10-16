import { TextField } from "@mui/material";

export default function MyTextField({ id, label, ...rest }: any) {
  return (
    <TextField
      id={id}
      label={label}
      sx={{
        backgroundColor: "var(--gray-300)",
        width: "100%",
        color: "white",
        "& label.Mui-focused": {
          color: "white",
        },
        "& label": {
          color: "black",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "var(--gray-100)",
          },
          "&:hover fieldset": {
            borderColor: "white",
          },
          "&.Mui-focused fieldset": {
            borderColor: "yellow",
          },
        },
      }}
      {...rest}
    />
  );
}
