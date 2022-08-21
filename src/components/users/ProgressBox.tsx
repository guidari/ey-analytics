import { Box } from "@mui/material";

interface IProgressBox {
  title: string;
  icon: any;
  statusNumber: number;
}

export default function ProgressBox({
  title,
  icon,
  statusNumber,
}: IProgressBox) {
  return (
    <Box>
      <p style={{ fontWeight: "bold" }}>{title}</p>
      <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
        {icon}
        <p style={{ fontSize: 18, fontWeight: "bold" }}>{statusNumber}</p>
      </Box>
    </Box>
  );
}
