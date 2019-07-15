<template>
  <header>
    <div class="header-inner">
      <router-link to="/" class="logo">
        <img src="https://www.vue-js.com/public/images/vue.png" alt />
        <h1>vue.js</h1>
      </router-link>
      <div class="shouye">
        <router-link to="/">首页</router-link>
      </div>
      <div class="news">
        <router-link to="/messages">
          <div class="messages_count">{{messageNum!=0?messageNum:''}}</div>未读消息
        </router-link>
      </div>
      <div class="create">
        <router-link to="/topic/create" v-if="userInfo && $route.path!='/topic/create'">发布</router-link>
      </div>
      <div class="publichao">
        <router-link to="/">微信公众号</router-link>
      </div>
      <div class="banben">
        <router-link to="/">VUE 2.0</router-link>
      </div>
      <div class="ziliao">
        <router-link to="/">参考资料</router-link>
      </div>
      <div class="api">
        <router-link to="/">API</router-link>
      </div>
      <div class="about">
        <router-link to="/">关于</router-link>
      </div>
      <div class="setting">
        <router-link to="/">设置</router-link>
      </div>
      <div v-if="!userInfo" class="login">
        <input type="text" v-model="text" />
        <button @click="login">登录</button>
      </div>
      <div v-else class="logout">
        <img :src="userInfo.avatar_url" alt class="avatar" />
        <span class="out" @click="logout">
          <router-link to="/">退出</router-link>
        </span>
      </div>
    </div>
  </header>
</template>

<script>
import axios from "axios";
export default {
  name: "tou",
  data() {
    return {
      text: "74039e5a-3971-44df-aa0e-b506ee02254d",
      userInfo: null,
      messageNum: ""
    };
  },
  created() {
    if (sessionStorage.getItem("token")) {
      axios
        .post("https://www.vue-js.com/api/v1/accesstoken", {
          accesstoken: sessionStorage.getItem("token")
        })
        .then(res => {
          this.userInfo = res.data;
        });
      axios
        .get(
          `https://www.vue-js.com/api/v1/message/count?accesstoken=${sessionStorage.getItem(
            "token"
          )}`
        )
        .then(res => {
          this.messageNum = res.data.data;
          console.log(res.data);
          console.log(sessionStorage.getItem("token"));
          // 将得到的信息存储到本地浏览器
        });
    }
  },
  methods: {
    login() {
      axios
        .post("https://www.vue-js.com/api/v1/accesstoken", {
          accesstoken: this.text
        })
        .then(res => {
          this.userInfo = res.data;
          //   将得到信息存储到本地的浏览器
          sessionStorage.setItem("token", this.text);
          sessionStorage.setItem("user_id", res.data.id);
        });
    },
    logout() {
      console.log("退出");
      this.userInfo = null;
      sessionStorage.removeItem("token");
      //    sessionStorage.clear();
    }
  }
};
</script>

<style>
.messages_count {
  text-align: center;
  width: 16px;
  border-radius: 30%;
  background-color: #369219;
  color: #fff;
  margin-right: 0.5em;
}
header {
  width: 100%;
  height: 55px;
  background-color: #1c6132;
  margin-bottom: 14px;
}
header > .header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
header > .header-inner .news > a {
  display: flex;
  justify-content: flex-start;
}
header > .header-inner > div > a {
  text-decoration: none;
  font-size: 14px;
  color: #eee;
}
header > .header-inner > .logo {
  display: flex;
  align-items: center;
  height: 55px;
  text-decoration: none;
}
header > .header-inner > .logo > img {
  width: 45px;
  height: 45px;
}
header > .header-inner > .logo > h1 {
  color: #fff;
  font-size: 20px;
  text-shadow: 0 1px 0 #fff;
}
header > .header-inner .logout {
  display: flex;
  justify-content: space-between;
}
header > .header-inner .logout > .avatar {
  display: block;
  width: 45px;
  height: 45px;
}
header > .header-inner .logout > .out {
  background-color: #ccc;
  padding: 5px;
  align-self: flex-end;
  font-size: 10px;
  cursor: pointer;
  margin-top: 10px;
}
header > .header-inner .logout > .out > a {
  text-decoration: none;
  color: #eee;
}
</style>
