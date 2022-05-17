<template>
  <div class="jumbotron">
    <div class="container">
      <JumboNavigator />
      <JumboFormArea />
    </div>
    <!-- /.container -->
  </div>
  <!-- /.jumbotron -->
</template>

<script>
import JumboNavigator from "../Main/NavigatorComponent.vue";
import JumboFormArea from "../Main/FormAreaComponent.vue";

export default {
  name: "SiteJumbotron",
  components: {
    JumboNavigator,
    JumboFormArea,
  },
};
</script>

<style lang="scss" scoped>
.jumbotron {
  min-height: calc(79vh - 50px);
  background-image: url(@/assets/img/bg-6.jpg);
  background-size: cover;
  background-position: center;
}

@media screen and (min-width: 1850px){
  .jumbotron {
  min-height: calc(95vh - 50px);
  background-image: url(@/assets/img/bg-6.jpg);
  background-size: cover;
  background-position: center;
}
}
</style>