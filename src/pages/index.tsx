import { Box, Container, Grid } from "@mui/material";
import Menu from "../components/menu";
import Header from "../components/Header";
import Link from "next/link";

const Home = () => {
  return (
    <Container>
      <Box>
        <h4>Welcome Page</h4>
        <Link href="dashboard">Continue</Link>
      </Box>
    </Container>
  );
};

export default Home;
