import ProfileAside from "./asideProfile";
import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        width: "100%",
        backgroundColor: "red",
      }}
    >
      <ProfileAside />
      <Outlet />
    </div>
  );
};

export default ProfileLayout;
