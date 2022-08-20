import { Box, Link } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { INavLink } from "../interface/INavLink";
import { ActiveLink } from "./ActiveLink";

export default function NavLink({ title, icon, href, ...rest }: INavLink) {
  return (
    <ActiveLink href={href} passHref>
      <Link {...rest}>
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
      </Link>
    </ActiveLink>
  );
}
