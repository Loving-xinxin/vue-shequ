<template>
  <footer>
    <div class="link">
      <ul>
        <li>RSS</li>
        <li>|</li>
        <li>源码地址</li>
      </ul>
    </div>
    <p>
      <span>服务器搭建在</span>
      <img src="https://www.vue-js.com/public/images/ucloud.png" alt />
      <span>,</span>
      <span>存储赞助商为</span>
      <img src="https://www.vue-js.com/public/images/qiniu.png" alt />
    </p>
    <p>声明：内容均来自于网络，如有侵权行为请发送邮件至vueclub@126.com,我们将在第一时间删除</p>
  </footer>
</template>

<script>
export default {
  name: "foot"
};
</script>

<style>
footer {
  width: 40%;
  margin: 0;
  padding: 16px 0 20px 78px;
  margin-top: 40px;
  width: 100%;
  background-color: #fff;
}
footer .link ul {
  display: flex;
  justify-content: flex-start;
}
footer .link ul > li {
  list-style: none;
  margin-right: 10px;
  color: #666;
  font-size: 14px;
  cursor: pointer;
}
footer .link ul > li:nth-child(2) {
  color: #ccc;
}
footer p {
  font-size: 14px;
  color: #ababab;
}
footer p:last-child {
  margin-top: 20px;
}
footer p > img {
  cursor: pointer;
}
</style>
