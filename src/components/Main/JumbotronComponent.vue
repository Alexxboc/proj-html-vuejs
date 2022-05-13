<template>
  <section class="jumbotron">
    <JumboNavigator />
  </section>
  <!-- /.jumbotron -->
</template>

<script>
import JumboNavigator from "../Main/NavigatorComponent.vue";

export default {
  name: "SiteJumbotron",
  components: {
    JumboNavigator,
  },
};
</script>

<style lang="scss" scoped>
.jumbotron {
  height: 830px;
  background-image: url(@/assets/img/bg-6.jpg);
  background-size: cover;
  background-position: center;
}
</style>