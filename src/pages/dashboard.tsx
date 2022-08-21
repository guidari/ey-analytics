import { Box, Grid } from "@mui/material";
import DefaultChart from "../components/chart/DefaultChart";

import { Layout } from "../components/layout";

const Dashboard = () => {
  const series = [{ name: "series1", data: [31, 120, 10, 28, 56, 19, 45] }];
  const userGrowth = [{ name: "series1", data: [10, 23, 25, 42, 56, 69, 120] }];

  return (
    <Layout>
      <Box sx={{ flexGrow: 1, margin: 2 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 6, sm: 8, md: 12 }}
        >
          <Grid xs={12} sm={12} md={6}>
            <DefaultChart title="Submitted challenges" series={series} />
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <DefaultChart title="User growth" series={userGrowth} />
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <DefaultChart title="Course hours" series={series} />
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <DefaultChart title="User growth" series={userGrowth} />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Dashboard;
