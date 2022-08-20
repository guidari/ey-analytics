import { Box, Grid, Paper, styled } from "@mui/material";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

import { Layout } from "../components/layout";

const Dashboard = () => {
  const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
  });

  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: "var(--white-200)",
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    dataLabels: {
      style: {
        colors: ["#2e2e38"],
      },
    },

    xaxis: {
      type: "datetime",
      axisBorder: {
        color: "var(--white-200)",
      },
      axisTicks: {
        color: "var(--white-200)",
      },
      categories: [
        "2022-08-18T00:00:00Z",
        "2022-08-19T00:00:00Z",
        "2022-08-20T00:00:00Z",
        "2022-08-21T00:00:00Z",
        "2022-08-22T00:00:00Z",
        "2022-08-23T00:00:00Z",
        "2022-08-24T00:00:00Z",
      ],
    },
    fill: {
      opacity: 0.3,
      type: "gradient",
      gradient: {
        shade: "dark",
        opacityTo: 0.3,
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        color: "#ffe600",
        shadeTo: "dark",
        shadeIntensity: 0.65,
      },
    },
  };

  const series = [{ name: "series1", data: [31, 120, 10, 28, 56, 19, 45] }];
  const userGrowth = [{ name: "series1", data: [10, 23, 25, 42, 56, 69, 120] }];

  return (
    <Layout>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 6, sm: 8, md: 12 }}
        >
          <Grid xs={12} sm={12} md={6}>
            <Box
              sx={{
                backgroundColor: "var(--gray-700)",
                borderRadius: 4,
                paddingX: 2,
                paddingY: 1,
                margin: 2,
              }}
            >
              <h3 style={{ paddingLeft: 20 }}>Submitted challenges</h3>

              <Chart
                type="area"
                options={options}
                series={series}
                height={200}
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <Box
              sx={{
                backgroundColor: "var(--gray-700)",
                borderRadius: 4,
                paddingX: 2,
                paddingY: 1,
                margin: 2,
              }}
            >
              <h3 style={{ paddingLeft: 20 }}>User growth</h3>

              <Chart
                type="area"
                options={options}
                series={userGrowth}
                height={200}
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <Box
              sx={{
                backgroundColor: "var(--gray-700)",
                borderRadius: 4,
                paddingX: 2,
                paddingY: 1,
                margin: 2,
              }}
            >
              <h3 style={{ paddingLeft: 20 }}>Course hours</h3>
              <Chart
                type="area"
                options={options}
                series={series}
                height={200}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Dashboard;
