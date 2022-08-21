import { Box, useMediaQuery } from "@mui/material";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

interface IDefaultChart {
  title: string;
  series: any;
}

export default function DefaultChart({ title, series }: IDefaultChart) {
  const matches = useMediaQuery("(min-width:900px)");

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

  // const series = [{ name: "series1", data: [31, 120, 10, 28, 56, 19, 45] }];

  return (
    <Box
      sx={{
        backgroundColor: "var(--gray-700)",
        borderRadius: 2,
        paddingX: matches ? 2 : 0,
        paddingY: 1,
        margin: matches ? 2 : 0,
        marginTop: 2,
      }}
    >
      <h3 style={{ paddingLeft: 20, marginTop: 20, marginBottom: 20 }}>
        {title}
      </h3>

      <Chart type="area" options={options} series={series} height={200} />
    </Box>
  );
}
