刘海丹 15:57:12
<template>
  <div class="user" v-if="user">
    <div class="userinfo">
      <div class="head">
        <router-link to="/">主页</router-link>
        <span>/</span>
      </div>
      <div>
        <img :src="user.avatar_url" alt />
        <span>{{user.loginname}}</span>
        <span>{{user.score}} 积分</span>
        <span>注册时间 {{myMomentTime(user.create_at)}}</span>
      </div>
    </div>
    <div class="panel">
      <div class="head">最近创建的话题</div>
      <div class="cell" v-for="recent_topic in user.recent_topics" :key="recent_topic.id">
        <router-link :to="`/user/${recent_topic.author.loginname}`">
          <img :src="recent_topic.author.avatar_url" alt />
        </router-link>
        <div class="count">
          <span class="reply-count">{{recent_topic.reply_count}}</span>/
          <span class="visit-count">{{recent_topic.visit_count}}</span>
        </div>
        <router-link :to="`/topics/${recent_topic.id}`" class="title">{{recent_topic.title}}</router-link>
        <span class="time">{{myMomentTime(recent_topic.last_reply_at)}}</span>
      </div>
    </div>
    <div class="panel">
      <div class="head">最近参与的话题</div>
      <div class="cell" v-for="recent_replie in user.recent_replies" :key="recent_replie.id">
        <router-link :to="`/user/${recent_replie.author.loginname}`">
          <img :src="recent_replie.author.avatar_url" alt />
        </router-link>
        <div class="count">
          <span class="reply-count">{{recent_replie.reply_count}}</span>/
          <span class="visit-count">{{recent_replie.visit_count}}</span>
        </div>
        <router-link :to="`/topics/${recent_replie.id}`" class="title">{{recent_replie.title}}</router-link>
        <span class="time">{{myMomentTime(recent_replie.last_reply_at)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "user",
  data() {
    return {
      user: null
    };
  },
  created() {
    const loginname = this.$route.params.loginname;
    axios.get(`https://www.vue-js.com/api/v1/user/${loginname}`).then(res => {
      this.user = res.data.data;
      console.log(res.data.data);
    });
  },
  methods: {
    myMomentTime(time) {
      moment.locale("zh-cn");
      return moment(time).fromNow();
    }
  }
};
</script>

<style>
.user {
  width: 90%;
  margin: 0 auto;
}
.user .userinfo {
  margin: 15px 0;
}
.user .userinfo .head {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
  border-bottom: 1px solid #ccc;
}
.user .userinfo .head a {
  color: #369219;
}
.user .userinfo .head span {
  padding: 0 5px;
  color: #ccc;
}
</style>
