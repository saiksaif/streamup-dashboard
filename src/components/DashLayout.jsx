import { Outlet } from "react-router-dom";

function DashLayout() {
  return (
    <div>
      Dash Layout
      <Outlet />
    </div>
  );
}

export default DashLayout;
