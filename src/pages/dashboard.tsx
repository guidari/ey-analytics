import { Box, Grid, useMediaQuery } from "@mui/material";
import BoxContent from "../components/boxContent";
import DefaultChart from "../components/chart/DefaultChart";

import { useState } from "react";
import TopJobs from "../components/dashBoard/topJobs";
import TopRank from "../components/dashBoard/topRank";
import { Layout } from "../components/layout";

const Dashboard = () => {
  const matches = useMediaQuery("(min-width:900px)");
  const [users, setUsers] = useState<any[]>([]);

  const series = [{ name: "series1", data: [31, 120, 10, 28, 56, 19, 45] }];
  const userGrowth = [{ name: "series1", data: [10, 23, 25, 42, 56, 69, 120] }];
  const weeChallenge = [
    { name: "series1", data: [14, 18, 23, 25, 15, 20, 32] },
  ];

  return (
    <Layout>
      {console.log("{users[2].name}", users)}
      <Box sx={{ flexGrow: 1, margin: 2 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 6, sm: 8, md: 12 }}
        >
          <Grid xs={12} sm={12} md={6}>
            <DefaultChart title="User growth" series={userGrowth} />
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <DefaultChart title="Course study hours" series={series} />
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <DefaultChart title="Submitted challenges" series={series} />
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <DefaultChart title="Week Challenge" series={weeChallenge} />
          </Grid>

          <Grid xs={12} sm={12} md={6}>
            <BoxContent title="Top 3 users 🏆">
              <p style={{ marginLeft: 20, marginBottom: 20 }}>
                Users with most submitted challenges:
              </p>
              <TopRank />
            </BoxContent>
          </Grid>

          <Grid xs={12} sm={12} md={6}>
            <BoxContent title="Most applied jobs">
              <TopJobs />
            </BoxContent>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Dashboard;
