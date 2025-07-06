import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import NotFound from "../views/NotFound.vue";
import ForgotPass from "../views/ForgotPass.vue";
import Dashboard from "../views/Dashboard.vue";
import ClassList from "../views/Class-list.vue";
import Class from "../views/Class.vue";
import Teachers from "../views/Teachers.vue";
import Attendance from "../views/Attendance.vue";
import ClassRoom from "../views/ClassRoom.vue"
import ModalitiesList from "../views/Modalities-list.vue";
import ModalitiesForm from "../views/Modalities-form.vue";


const routes = [
  { path: "/", name: "Home", component: LandingPage },
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  { path: "/not-found", name: "NotFound", component: NotFound },
  { path: "/forgot-pass", name: "ForgotPass", component: ForgotPass },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/class-list", name: "ClassList", component: ClassList },
  { path: "/class", name: "Class", component: Class },
  { path: "/teachers", name: "Teachers", component: Teachers },
  { path: "/attendance/:id?", name: "Attendance", component: Attendance, props: true },
  { path: "/class-room/:id?", name: "ClassRoom", component: ClassRoom },
  { path: "/modalities-list", name: "ModalitiesList", component: ModalitiesList },
  { path: "/modalities-edit/:id?", name: "ModalitiesForm", component: ModalitiesForm, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  const matchedRoute = routes.find((route) => route.name === to.name);
  if (matchedRoute) {
    matchedRoute.name =
      matchedRoute.name == "Home" ? "LandingPage" : matchedRoute.name;
    document.body.className = "";
    document.body.classList.add(matchedRoute.name);
  }
});

router.beforeEach((to, from, next) => {
  let token = null;
  try {
    token = localStorage.getItem('accesstoken');
  } catch (e) {
    console.warn("Erro ao acessar sessionStorage:", e);
  }

  if ((to.path === '/login' || to.path === '/register') && token) {
    return next('/dashboard');
  } else if ((to.path !== '/login' && to.path !== '/register') && !token) {
    return next('/login');
  }

  next();
});

export default router;
