import { Box } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { INavLink } from "../interface/INavLink";

export default function NavLink({ title, icon }: INavLink) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        gap: 2,
        marginY: 3,
      }}
    >
      {icon}
      <span>{title}</span>
    </Box>
  );
}
