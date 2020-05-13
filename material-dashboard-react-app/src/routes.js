// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Register from "@material-ui/icons/GroupAdd";
import Login from "@material-ui/icons/LockOpen";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
// core components/views for Auth layout
import LoginPage from "views/Pages/LoginPage.jsx";
import RegisterPage from "views/Pages/RegisterPage.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Administrador",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notificaciones",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Editar perfil",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/login-page",
    name: "Login Page",
    icon: Login,
    component: LoginPage,
    layout: "/auth"
  },
  {
    path: "/register-page",
    name: "Register Page",
    icon: Register,
    component: RegisterPage,
    layout: "/auth"
  }
];

export default dashboardRoutes;
