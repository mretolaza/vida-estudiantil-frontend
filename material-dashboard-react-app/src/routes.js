// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Register from "@material-ui/icons/GroupAdd";
import Login from "@material-ui/icons/LockOpen";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
// core components/views for Auth layout
import LoginPage from "views/Pages/LoginPage.jsx";
import RegisterPage from "views/Pages/RegisterPage.jsx";
import ForgotPass from "views/Pages/ForgotPass.jsx"
import UpdatePass from "views/Pages/changePass.jsx"
import NewClubPage from "./views/Pages/NewClubPage";
import AlertPage from "views/Pages/alertPage.jsx";
import NewTeamPage from "views/Pages/NewTeamPage.jsx";
import AddBoxIcon from '@material-ui/icons/AddBox';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import NewTallerPage from "./views/Pages/newTallerPage";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Administrador",
    icon: Dashboard,
    component: DashboardPage,
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
    name: "Inicio de sesión",
    icon: Login,
    component: LoginPage,
    layout: "/auth"
  },
  {
    path: "/register-page",
    name: "Registro",
    icon: Register,
    component: RegisterPage,
    layout: "/auth"
  },
  {
    path: "/forgot-pass-page",
    name: "Olvidé mi contraseña",
    icon: "vpn_key",
    component: ForgotPass,
    layout: "/auth"
  }, 
  {
    path: "/chance-pass-page",
    name: "Actualizar mi contraseña",
    icon: "vpn_key",
    component: UpdatePass,
    layout: "/auth"
  },
  {
    path: "/new-club-page",
    name: "Nuevo Club",
    icon: AddBoxIcon,
    component: NewClubPage,
    layout: "/admin"
  }, 
  {
    path: "/alert-page",
    name: "Alerta de Permisos",
    icon: AnnouncementIcon,
    component: AlertPage,
    layout: "/admin"
  },
  {
    path: "/new-team-page",
    name: "Nuevo Equipo",
    icon: AddBoxIcon,
    component: NewTeamPage,
    layout: "/admin"
  }, 
  {
    path: "/new-taller-page",
    name: "Nuevo Taller",
    icon: AddBoxIcon,
    component: NewTallerPage,
    layout: "/admin"
  },
];

export default dashboardRoutes;
