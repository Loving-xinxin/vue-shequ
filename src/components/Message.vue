<template>
  <div class="message">
    <div class="panel">
      <div class="header">
        <router-link :to="$publicUrl + '/'" class="head-home">主页</router-link>
        <span>/&nbsp;&nbsp;新消息</span>
      </div>
      <div class="cell" v-for="hasNotMessage in hasNotMessages" :key="hasNotMessage.id">
        <div>
          <router-link
            class="title"
            :to="`${$publicUrl}/user/${hasNotMessage.author.loginname}`"
          >{{hasNotMessage.author.loginname}}</router-link>
          <span class="padding-lr">{{hasNotMessage.type==='at'?'在话题':'回复了你的话题'}}</span>
          <router-link
            class="title"
            :to="`${$publicUrl}/topic/${hasNotMessage.topic.id}`"
          >{{hasNotMessage.topic.title}}</router-link>
          <span class="padding-lr">{{hasNotMessage.type==='at'?'中@了你':''}}</span>
        </div>
        <div class="time opcity">
          <img src="https://www.vue-js.com/public/images/checkmark_icon&16.png" alt />
        </div>
      </div>
      <div class="cell more" v-if="!hasNotMessages.length">无消息</div>
    </div>
    <div class="panel">
      <div class="header">过往信息</div>
      <div class="cell" v-for="hasMessage in hasMessages" :key="hasMessage.id">
        <router-link
          class="title"
          :to="`${$publicUrl}/user/${hasMessage.author.loginname}`"
        >{{hasMessage.author.loginname}}</router-link>
        <span class="padding-lr">{{hasMessage.type==='at'?'在话题':'回复了你的话题'}}</span>
        <router-link
          class="title"
          :to="`${$publicUrl}/topic/${hasMessage.topic.id}`"
        >{{hasMessage.topic.title}}</router-link>
        <span class="padding-lr">{{hasMessage.type==='at'?'中@了你':''}}</span>
        <div class="time">
          <img src="https://www.vue-js.com/public/images/checkmark_icon&16.png" alt />
        </div>
      </div>
      <div class="cell more" v-if="!hasMessages.length">无话题</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "message",
  data() {
    return {
      hasMessages: [],
      hasNotMessages: []
    };
  },
  created() {
    axios
      .get(
        `https://www.vue-js.com/api/v1/messages?accesstoken=${sessionStorage.getItem(
          "token"
        )}`
      )
      .then(res => {
        this.messageNum = res.data.data;
        console.log(res.data.data);
        this.hasMessages = res.data.data.has_read_messages;
        this.hasNotMessages = res.data.data.hasnot_read_messages;
        // 将得到的信息存储到本地浏览器
      });
  }
};
</script>

<style>
.message {
  width: 80%;
}
.message .padding-lr {
  padding: 0 5px;
}
.message .panel .cell img {
  width: 16px;
  position: absolute;
  right: 10px;
}
.message .opcity {
  opacity: 0.1;
}
.message .panel .inner,
.message .panel .cell {
  position: relative;
  line-height: 2em;
  padding: 6px 6px 6px 14px;
  background-color: #fff;
  border-radius: 0 0 3px 3px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
  display: flex;
  justify-content: flex-start;
}
.message .panel .cell > a {
  text-decoration: none;
  color: #08c;
}
.message .panel .header {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
  font-size: 14px;
  color: #999;
  margin-top: 15px;
}
.message .panel:first-child .header {
  display: flex;
  justify-content: flex-start;
}
.message .panel:first-child .header > a {
  text-decoration: none;
  color: #369219;
}
.message .panel:first-child .header > span:last-child {
  margin-left: 6px;
}
</style>
