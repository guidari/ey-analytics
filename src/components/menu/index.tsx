import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import { Box, useMediaQuery } from "@mui/material";
import NavLink from "./NavLink";

export default function Menu() {
  const matches = useMediaQuery("(max-width:899px)");

  if (!matches) {
    return (
      <Box>
        <span style={{ fontWeight: "bold", fontSize: 18 }}>Geral</span>
        <NavLink title="Dashboard" icon={<DashboardIcon />} href="/dashboard" />
        <NavLink title="Users" icon={<GroupIcon />} href="/users" />
        <NavLink title="Jobs" icon={<WorkIcon />} href="/jobs" />
      </Box>
    );
  }

  if (matches) {
    return (
      <Box>
        <span style={{ fontWeight: "bold", fontSize: 18 }}>Geral</span>
        <NavLink title="Dashboard" icon={<DashboardIcon />} href="/dashboard" />
        <NavLink title="Users" icon={<GroupIcon />} href="/users" />
        <NavLink title="Jobs" icon={<WorkIcon />} href="/jobs" />
      </Box>
    );
  }

  return <></>;
}
