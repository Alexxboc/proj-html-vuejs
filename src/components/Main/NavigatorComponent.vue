<template>
  <div class="navigator d-flex justify-content-between py-4">
    <MainLogo />
    <NavigatorMenu />
  </div>
  <!-- /.navigator -->
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

