/* Vikku Ponnaganti - Author of this file from Lines 3 - 108, any changes within
these lines authored by someone else will be stated otherwise 
This project was created on Vikku Ponnaganti's MacBook Pro and Firebase creation,
initialization was also done by Vikku Ponnaganti*/
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/Register.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
        import("../views/Dashboard.vue"),
    meta: {
      authRequired: true,
    },
  },
  //Brian - added routes
  {
    path: "/xbox",
    name: "Xbox Exergame",
    component: () =>
        import("../views/Exergame.vue"),
    meta: {
      authRequired: true,
    },
  },
  ////Brian - added routes
  {
    path: "/playstation",
    name: "Playstation Exergame",
    component: () =>
        import("../views/ExPlaystation.vue"),
    meta: {
      authRequired: true,
    },
  },
  ////Brian - added routes
  {
    path: "/switch",
    name: "Switch Exergame",
    component: () =>
        import("../views/ExSwitch.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/portal",
    name: "Portal",
    component: () =>
        import("../views/Portal.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/vidLib",
    name: "VidLib",
    component: () =>
        import("../views/VidLib.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/player",
    name: "Player",
    component: () =>
        import("../views/Player.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/trouble",
    name: "Trouble",
    component: () =>
        import("../views/Trouble.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
        import("../views/Contact.vue"),
    meta: {
      authRequired: true,
    },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
      if (firebase.auth().currentUser) {
          next();
      } else {
          alert("You must be logged in to see this page");
          next({
              path: "/",
          });
      }
  } else {
      next();
  }
});

export default router;
