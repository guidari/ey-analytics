import { Container, Grid } from "@mui/material";
import Header from "../Header";
import Menu from "../menu";

export function Layout({ children }: any) {
  return (
    <Container>
      <Header />
      <Grid container spacing={4}>
        <Grid item xs={2}>
          <Menu />
        </Grid>

        <Grid item xs={10}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}
