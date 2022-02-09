import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from "firebase";
Vue.use(VueRouter)

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    alias: ["/inicio", "/home", "/portada"],
  },
  {
    path: "/exponents",
    name: "Exponents",
    component: () =>
      import( /* webpackChunkName: "exponents" */ "../views/Exponents.vue"),
  },

  {
    path: "/information",
    name: "Information",
    component: () =>
      import( /* webpackChunkName: "information" */ "../views/Information.vue"),
    meta: {
      authenticate: true,
    },
  },
  {
    path: "/news",
    name: "News",
    component: () =>
      import( /* webpackChunkName: "news" */ "../views/News.vue"),

  },
  {
    path: "/intro",
    name: "Intro",
    component: () =>
      import( /* webpackChunkName: "intro" */ "../views/Intro.vue"),

  },
  {
    path: "/hero",
    name: "Hero",
    component: () =>
      import( /* webpackChunkName: "hero" */ "../views/Hero.vue"),

  },
  {
    path: "/heroTwo",
    name: "HeroTwo",
    component: () =>
      import( /* webpackChunkName: "heroTwo" */ "../views/HeroTwo.vue"),

  },
  {
    path: "/heroThree",
    name: "HeroThree",
    component: () =>
      import( /* webpackChunkName: "heroThree" */ "../views/HeroThree.vue"),

  },
  {
    path: "/game",
    name: "Game",
    component: () =>
      import( /* webpackChunkName: "game" */ "../views/Game.vue"),

  },
  {
    path: "/howToPlay",
    name: "HowToPlay",
    component: () =>
      import( /* webpackChunkName: "howToPlay" */ "../views/HowToPlay.vue"),

  },
  {
    path: "/contactUs",
    name: "ContactUs",
    component: () =>
      import( /* webpackChunkName: "contactUs" */ "../views/ContactUs.vue"),

  },
  {
    path: "/admKing",
    name: "AdmKing",
    component: () =>
      import( /* webpackChunkName: "admKing" */ "../views/AdmKing.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import( /* webpackChunkName: "notfound" */ "../views/NotFound.vue"),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

});

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let authorization = to.matched.some((record) => record.meta.authenticate);

  if (!authorization && user) {
    next();
  } else if (authorization && !user) {
    next("home");
  } else {

  }
  next();
});



export default router