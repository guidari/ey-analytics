import Router from "next/router";
import { Layout } from "../../components/layout";
import RegisteredUsers from "../../components/users/RegisteredUsers";

const Users = () => {
  const userInfo = (e: any) => {
    const userInfo: any = e.row;
    console.log("userInfo", userInfo);

    localStorage.setItem("userId", e.row.id);

    Router.push({
      pathname: "/users/userInfo",
      query: {
        id: userInfo.id,
      },
    });
  };

  return (
    <Layout>
      <RegisteredUsers onRowClick={userInfo} />
    </Layout>
  );
};

export default Users;
