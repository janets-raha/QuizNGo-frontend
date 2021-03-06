import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
//import AdminUsers from "../components/AdminUsers.vue";
import AdminQuiz from "../components/AdminQuiz.vue";
import Quiz from "../components/Quiz.vue";
import EditQuiz from "../components/EditQuiz.vue";
import Admin from "../views/Admin.vue";
import AdminUser from "../components/AdminUser.vue";
import AdminStats from "../components/AdminStats.vue";
import MyAccount from "../components/MyAccount.vue";
import MyDashboard from "../components/MyDashboard.vue";

//import Favorites from "../components/Favorites.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/quiz/:quiz_id",
    name: "Quiz",
    component: Quiz,
  },
  {
    path: "/newquiz",
    name: "NewQuiz",
    component: EditQuiz,
  },
  {
    path: "/editquiz/:quiz_id",
    name: "EditQuiz",
    component: EditQuiz,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin",
    component: Admin,
    children: [
      {
        name: "Admin",
        path: "",
        component: AdminQuiz,
      },
      {
        name: "AdminUser",
        path: "user",
        component: AdminUser,
      },
      {
        name: "AdminStats",
        path: "stats",
        component: AdminStats,
      },
    ],
  },
   {
    path: "/dashboard",
    component: Profile,
    children: [
      {
        name: "Dashboard",
        path: "",
        component: MyDashboard
      },
      {
        name: "Profile",
        path: "profile",
        component: MyAccount
      }
    ]
  }, 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
