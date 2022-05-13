<template>
  <div class="container">
    <div class="navigator d-flex justify-content-between py-4">
      <MainLogo />
      <NavigatorMenu />
    </div>
    <!-- /.navigator -->
    <div class="form"></div>
    <!-- /.form -->
  </div>
  <!-- /.container -->
</template>

<script>
import MainLogo from "../Main/LogoComponent.vue";
import NavigatorMenu from "../Main/NavigatorMenu.vue";

export default {
  name: "JumboNavigator",
  components: {
    MainLogo,
    NavigatorMenu,
  },
};
</script>

<style lang="scss" scoped>
</style>