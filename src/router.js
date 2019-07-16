import vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Topic from './components/Topic.vue';
import Users from './components/Users.vue';
import PublicTopic from './components/PublicTopic.vue';
import Message from './components/Message.vue';
import { PUBLICURL } from './publicurl';
vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: PUBLICURL + '/',
      component: Home
    },
    {
      path: PUBLICURL + '/topic/create',
      component: PublicTopic
    },
    {
      path: PUBLICURL + '/topic/:id',
      component: Topic
    },
    {
      path: PUBLICURL + '/user/:loginname',
      component: Users
    },
    {
      path: PUBLICURL + '/messages',
      component: Message
    }
  ],
  mode: 'history'
});
