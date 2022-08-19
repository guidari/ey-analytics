import { Container, Grid, useMediaQuery } from "@mui/material";
import Header from "../Header";
import Menu from "../menu";

export function Layout({ children }: any) {
  const matches = useMediaQuery("(min-width:900px)");

  if (matches) {
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

  return (
    <Container>
      <Header />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}
