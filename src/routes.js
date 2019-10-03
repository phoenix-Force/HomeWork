import Mainc from "./components/mn/Main.vue";
import edit from "./components/mn/edit.vue";

export const routes = [{
    path: '/',
    component: Mainc,
    name: 'Home'
  },
  {
    path: '/edit',
    component: edit,
    name: 'edit'
  }
];
