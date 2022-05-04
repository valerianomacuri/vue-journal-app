export default {
  name: "auth",
  component: () =>
    import(
      /* webpackChunkName: "AuthLayout" */ "@/modules/auth/layouts/AuthLayout.vue"
    ),
  children: [
    {
      // index path
      path: "",
      name: "login",
      component: () =>
        import(
          /* webpackChunkName: "Login" */ "@/modules/auth/views/Login.vue"
        ),
    },
    {
      // index path
      path: "register",
      name: "register",
      component: () =>
        import(
          /* webpackChunkName: "Register" */ "@/modules/auth/views/Register.vue"
        ),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: {
        name: "login",
      },
    },
  ],
}
