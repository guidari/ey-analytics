import { Box, Grid } from "@mui/material";
import axios from "axios";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import MyButton from "../myButton";

export default function CompletedCourses({ id }: any) {
  // const [user, setUser] = useState<IUserRow | DocumentData>();
  const [completedCourses, setCompletedCourses] = useState<string[]>([]);

  // const getUser = async () => {
  //   let userId;
  //   if (!id) {
  //     userId = localStorage.getItem("userId");
  //   } else {
  //     userId = id;
  //   }
  //   const q = query(collection(db, "users"), where("id", "==", userId));
  //   const doc = await getDocs(q);
  //   const data = doc.docs[0].data();
  //   setUser(data);
  //   console.log("data", data);
  //   return data;
  // };

  console.log("id", id);

  useEffect(() => {
    const getUser = async () => {
      try {
        setCompletedCourses([]);

        let userId;
        if (!id) {
          userId = localStorage.getItem("userId");
        } else {
          userId = id;
        }
        const q = query(collection(db, "users"), where("id", "==", userId));
        const doc = await getDocs(q);
        const user = doc.docs[0].data();

        let tokenHeaders;
        let completed: any = [];

        user?.arrayCompletedCourses.map(async (item: any) => {
          tokenHeaders = {
            headers: {
              id: item,
            },
          };
          await axios
            .get(process.env.NEXT_PUBLIC_NODE_API + "mycourses", tokenHeaders)
            .then(function (response) {
              console.log("response.data", response.data);
              completed.push(response.data);
              setCompletedCourses((current: string[]) => [
                ...current,
                ...[response.data],
              ]);
              console.log("completedCourses", completedCourses);
            });
        });

        // setCompletedCourses(completed);
      } catch (err) {
        console.log("User not authenticated");
      }
    };

    getUser();
  }, [id]);

  // console.log("completedCourses", completedCourses);

  return (
    <Box
      sx={{
        // backgroundColor: "var(--gray-100)",
        paddingX: 3,
        paddingY: 3,
        borderRadius: 2,
      }}
    >
      {!completedCourses && <Box>No courses completed</Box>}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 6, sm: 8, md: 12 }}
        sx={{ display: "flex", gap: 2 }}
      >
        {completedCourses.map((course: any) => {
          return (
            <Grid
              item
              xs={4}
              sx={{
                backgroundColor: "var(--gray-100)",
                marginY: 2,
                borderRadius: 2,
                paddingBottom: 3,
                position: "relative",
              }}
              key={course?.id}
            >
              <Box>
                <span style={{ fontWeight: "bold" }}>Role: </span>
                {course.title}
              </Box>
              <Box sx={{ marginY: 1 }}>
                <span style={{ fontWeight: "bold" }}>Applications: </span>
                {course.visible_instructors[0].title}
              </Box>
              <Box>
                <span style={{ fontWeight: "bold" }}>ID: </span>
                {course.id}
              </Box>

              <Box sx={{ height: 50 }}></Box>
              <Box sx={{ position: "absolute", bottom: 20, left: 20 }}>
                <MyButton link={course.role} title="See course" />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
