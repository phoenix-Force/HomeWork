import Mainc from "./components/mn/Main.vue";
import edit from "./components/mn/edit.vue";
import slider from "./components/caraos/slider.vue"
import profile from "./components/profile/profile.vue"
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
];
