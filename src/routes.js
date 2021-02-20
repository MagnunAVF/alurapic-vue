import Home from './components/home/Home.vue';
import Register from './components/register/Register.vue';

export const routes = [
  { path: '', name: 'home', component: Home, title: 'Home', menu: true },
  { path: '/register', name: 'register', component: Register, title: 'Register', menu: true },
  { path: '*', component: Home, menu: false },
];
