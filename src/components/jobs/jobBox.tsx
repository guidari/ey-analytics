import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, IconButton } from "@mui/material";
import Router from "next/router";
import { IJobBox } from "../../interface/IJobBox";

export default function JobBox({ id, title, description, location }: IJobBox) {
  const jobInfo = (id: string) => {
    console.log("id", id);

    localStorage.setItem("jobId", id);

    Router.push({
      pathname: "/jobs/jobInfo",
      query: {
        id,
      },
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: "var(--gray-100)",
        height: 200,
        borderRadius: 2,
        position: "relative",
      }}
    >
      <Box
        sx={{
          paddingX: 2,
          paddingY: 1,
        }}
      >
        <strong>{title}</strong>
        <p
          style={{
            overflow: "hidden",
            display: "inline-block",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            maxHeight: "80px",
            WebkitLineClamp: 5,
            marginTop: 15,
          }}
        >
          {description}
        </p>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingX: 2,
            paddingBottom: 1,
            placeItems: "center",
          }}
        >
          <span style={{ display: "flex" }}>
            <LocationOnIcon sx={{ color: "var(--yellow-1)" }} /> {location}
          </span>

          <IconButton onClick={() => jobInfo(id)}>
            <ArrowForwardIosIcon sx={{ color: "var(--yellow-1)" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
