import { Box, Fade, Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Router from "next/router";
import { useState } from "react";
import { Layout } from "../../components/layout";
import RegisteredUsers from "../../components/users/RegisteredUsers";
import { IUser } from "../../interface/IUser";

const Users = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const userInfo = (e: any) => {
    const userInfo: any = e.row;
    console.log("userInfo", userInfo);

    Router.push({
      pathname: "/users/userInfo",
      query: {
        name: userInfo.name,
        email: userInfo.email,
      },
    });
    // setOpen(true);
  };

  return (
    <Layout>
      <RegisteredUsers onRowClick={userInfo} />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <p>
              Enthusiast of the best technologies for web & mobile development.
              Passionate for education and changing people's lives through
              programming. More than 200k people already went through one of my
              trainings. “Nothing in this world can take the place of
              persistence. Talent won’t; nothing is more common than
              unsuccessful men with talent. Genius won’t; unrewarded genius is
              practically a cliché. Education won’t; the world is full of
              educated fools. Persistence and determination alone are
              all-powerful.”
            </p>
          </Box>
        </Fade>
      </Modal>
    </Layout>
  );
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  height: 300,
  bgcolor: "background.paper",
  border: "1px solid var(--gray-900)",
  borderRadius: 2,
  backgroundColor: "var(--gray-700)",
  boxShadow: 24,
  p: 4,
};

export default Users;
