import { createWebHistory, createRouter } from "vue-router";
import SignIn from "@/pages/auth/SignIn.vue";
import SignUp from "@/pages/auth/SignUp.vue";
import UserProfile from "@/pages/auth/UserProfile.vue";

  const routes = [
    {
      path: "/",
      name: "signIn",
      component: SignIn
    },
    {
      path: "/signup",
      name: "signUp",
      component: SignUp
    },
    {
      path: "/profile",
      name: "profile",
      component: UserProfile,
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;