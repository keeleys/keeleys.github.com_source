<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <embed :src="link.src" type="image/svg+xml" />
    </li>
  </ul>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("home", {
      links: state => state.links
    })
  }
};
</script>
