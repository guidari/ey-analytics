import { Box, useMediaQuery } from "@mui/material";
import NavLink from "./NavLink";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import HamburguerMenu from "./HamburguerMenu";

export default function Menu() {
  const matches = useMediaQuery("(max-width:899px)");

  if (!matches) {
    return (
      <Box>
        <span style={{ fontWeight: "bold", fontSize: 18 }}>Geral</span>
        <NavLink title="Dashboard" icon={<DashboardIcon />} />
        <NavLink title="Users" icon={<GroupIcon />} />
      </Box>
    );
  }

  if (matches) {
    return (
      <Box>
        <span style={{ fontWeight: "bold", fontSize: 18 }}>Geral</span>
        <NavLink title="Dashboard" icon={<DashboardIcon />} />
        <NavLink title="Users" icon={<GroupIcon />} />
      </Box>
    );
  }

  return <></>;
}
