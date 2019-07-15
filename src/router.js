import vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Topic from './components/Topic.vue';
import Users from './components/Users.vue';
import PublicTopic from './components/PublicTopic.vue';
import Message from './components/Message.vue';
vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/topic/create',
      component: PublicTopic
    },
    {
      path: '/topic/:id',
      component: Topic
    },
    {
      path: '/user/:loginname',
      component: Users
    },
    {
      path: '/messages',
      component: Message
    }
  ],
  mode: 'history'
});
