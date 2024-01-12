const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/IndexPage.vue') }
  //   ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/",
    component: () => import("src/pages/pageRegisterLogin.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("layouts/layoutDashboard.vue"),
  },
  {
    path: "/education-detail",
    component: () => import("src/pages/pageEducationDetail.vue"),
  },
  {
    path: "/pencarian",
    component: () => import("src/pages/pagePencarian.vue"),
  },
  {
    path: "/bookmark",
    component: () => import("src/pages/pageBookmark.vue"),
  },
];

export default routes;
