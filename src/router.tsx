import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DashboardView from "./view/DashboardView";
import UserSettingView from "./view/UserSettingView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <DashboardView />,
      },
      {
        path: "user-setting",
        element: <UserSettingView />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

export default router;
