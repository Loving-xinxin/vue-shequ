<template>
  <div class="home">
    <div class="nav">
      <ul>
        <li>
          <router-link
            @click.native="total=856"
            :class="$route.fullPath === '/' || $route.fullPath === '/?tab=all'? 'active' : ''"
            to="/?tab=all"
          >全部</router-link>
        </li>
        <li>
          <router-link
            @click.native="total=15"
            :class="$route.fullPath === '/?tab=good'? 'active' : ''"
            to="/?tab=good"
          >精华</router-link>
        </li>
        <li>
          <router-link
            @click.native="total=3"
            :class="$route.fullPath === '/?tab=weex'? 'active' : ''"
            to="/?tab=weex"
          >weex</router-link>
        </li>
        <li>
          <router-link
            @click.native="total=247"
            :class="$route.fullPath === '/?tab=share'? 'active' : ''"
            to="/?tab=share"
          >分享</router-link>
        </li>
        <li>
          <router-link
            @click.native="total=577"
            :class="$route.fullPath === '/?tab=ask'? 'active' : ''"
            to="/?tab=ask"
          >问答</router-link>
        </li>
        <li>
          <router-link
            @click.native="total=30"
            :class="$route.fullPath === '/?tab=job'? 'active' : ''"
            to="/?tab=job"
          >招聘</router-link>
        </li>
      </ul>
    </div>
    <div v-if="topics.length" class="content">
      <ul>
        <li v-for="topic in topics" :key="topic.id">
          <router-link :to="`/user/${topic.author.loginname}`">
            <img class="avatar" :src="topic.author.avatar_url" alt />
          </router-link>
          <div class="count">
            <span class="reply_count">{{topic.reply_count}}</span>
            <span>/</span>
            <span class="visit_count">{{topic.visit_count}}</span>
          </div>
          <span
            v-if="$route.fullPath === '/' || $route.fullPath === '/?tab=all' || topic.top || topic.good"
            :class="{tab:true,active: topic.top || topic.good}"
          >
            {{topic.top ? '置顶' : topic.good ? '精华' : topic.tab==='share' ? '分享' : topic.tab==='ask' ? '问答' : topic.tab==='job' ?
            '招聘': 'weex'}}
          </span>
          <span class="title">
            <router-link :to="`/topic/${topic.id}`">{{topic.title}}</router-link>
          </span>
          <span class="time">{{myMoment(topic.last_reply_at)}}</span>
        </li>
      </ul>
    </div>
    <img
      v-else
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562736903633&di=4bda7f994fa0572e42172c022363bc81&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F012a4d5c2c7159a8012029acbb7070.gif"
      alt
    />
    <el-pagination
      @current-change="changePage"
      background
      layout="prev, pager, next"
      :page-size="20"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "home",
  data() {
    return {
      topics: [],
      user: [],
      total: 856
    };
  },
  watch: {
    "$route.fullPath": {
      immediate: true,
      handler() {
        const tab = this.$route.query.tab || "all";
        const num = this.$route.query.page || "1";
        this.topics = [];
        axios
          .get(`https://www.vue-js.com/api/v1/topics/?tab=${tab}&page=${num}`)
          .then(res => {
            this.topics = res.data.data;
            // console.log(this.topics);
          });
      }
    }
  },
  methods: {
    myMoment(time) {
      moment.locale("zh-cn");
      return moment(time).fromNow();
    },
    changePage(num) {
      const tab = this.$route.query.tab || "all";
      this.$router.push(`/?tab=${tab}&page=${num}`);
    }
  }
};
</script>

<style>
.home {
  width: 80%;
  margin: 0 auto;
}
.home > .nav > ul {
  list-style: none;
  display: flex;
  align-content: center;
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
  font-size: 14px;
  margin: 0;
}
.home > .nav > ul > li {
  margin-right: 10px;
  cursor: pointer;
}
.home > .nav > ul > li > a {
  color: #369219;
  text-decoration: none;
}
.home > .nav > ul > li > .active {
  background-color: #369219;
  color: #fff;
  padding: 3px 4px;
  border-radius: 3px;
}
.home > img {
  width: 100%;
}
.home > .content {
  background-color: #fff;
}
.home > .content > ul {
  margin: 0;
  padding: 0;
}
.home > .content > ul > li {
  display: flex;
  align-items: center;
  padding: 10px 0 10px 10px;
  border-bottom: 1px solid #f0f0f0;
}
.home > .content > ul > li:hover {
  background-color: #f5f5f5;
}
.home > .content > ul > li .avatar {
  width: 30px;
  height: 30px;
  border-radius: 3px;
  margin-right: 4px;
  flex-shrink: 0;
}
.home > .content > ul > li .count {
  width: 60px;
  text-align: center;
  font-size: 12px;
  flex-shrink: 0;
}
.home > .content > ul > li .count .reply_count {
  font-size: 14px;
  color: #9e78c0;
}
.home > .content > ul > li .count .visit_count {
  font-size: 12px;
  color: #b4b4b4;
}
.tab {
  padding: 2px 3px;
  background-color: #999;
  color: #fff;
  font-size: 10px;
  border-radius: 3px;
  margin-right: 5px;
  margin-left: 5px;
  flex-shrink: 0;
}
.tab.active {
  color: #fff;
  background-color: #369219;
}
.home > .content > ul > li > .title > a {
  text-decoration: none;
  color: #333;
  font-size: 14px;
}
.home > .content > ul > li > .title {
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.home > .content > ul > li .title > a:hover {
  text-decoration: underline;
}
.home > .content > ul > li .time {
  flex-shrink: 0;
  font-size: 10px;
  margin-right: 10px;
}
</style>
