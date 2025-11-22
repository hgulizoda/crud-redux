import ProfileAside from "./asideProfile";
import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <div
      className="big-container"
      style={{
        display: "flex",
        alignItems: "start",
        width: "100%",
        gap: "50px",
      }}
    >
      <ProfileAside />
      <Outlet />
    </div>
  );
};

export default ProfileLayout;
