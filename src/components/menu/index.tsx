import { Box } from "@mui/material";
import NavLink from "./NavLink";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";

export default function Menu() {
  return (
    <Box>
      <span style={{ fontWeight: "bold", fontSize: 18 }}>Geral</span>
      <NavLink title="Dashboard" icon={<DashboardIcon />} />
      <NavLink title="Users" icon={<GroupIcon />} />
    </Box>
  );
}
