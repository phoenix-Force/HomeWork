import Mainc from "./components/mn/Main.vue";
import edit from "./components/mn/edit.vue";
import slider from "./components/caraos/slider.vue"
import profile from "./components/profile/profile.vue"
import gallery from "./components/mn/Gallery/Gallery.vue"
import timeline from "./components/timeline/timeline.vue"
export const routes = [{
    path: '/',
    component: slider,
    name: 'Home'
  },
  {
    path: '/edit',
    component: edit,
    name: 'edit'
  },
  {
  path: '/profile',
  component: profile,
  name: 'profile'
  },
  {
    path:'/gallery',
    component:gallery,
    name:"gallery"
  },
  {
    path:'/timeline',
    component:timeline,
    name:"timeline"
  }
];
