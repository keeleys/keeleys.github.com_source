<template>
  <div id="app">
    <main>
      <div id="logo">
        <img :src="logoImg" alt="" />
      </div>
      <div id="name">
        {{ name }}
      </div>
      <hr>
      <div id="sign">
        <span>{{ signText }}</span>
      </div>
      <hr>
      <div id="tag">
        <a class="btn" href='/diary'>记一件小事</a>
        <a class="btn" href='#'>记一点博客</a>
      </div>
      <div id="link">
        <Link/>
      </div>
    </main>
    <footer></footer>
  </div>
</template>
<script>
import logoImg from "@/image/logo.jpeg";
import Link from './Link.vue'
export default {
  components: { Link },
  data() {
    return {
      name: "凉水",
      logoImg: logoImg,
      signText: "明明如月，何时可掇"
    };
  }
};
</script>
