import { createWebHistory, createRouter } from "vue-router";
import SignIn from "@/pages/auth/SignIn.vue";
import SignUp from "@/pages/auth/SignUp.vue";

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
    }
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;