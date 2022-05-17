<template>
  <div class="navigator d-flex justify-content-between py-4">
    <MainLogo />
    <NavigatorMenu :menuList="menuList"/>
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
  data() {
    return {
      menuList: [
        { name: "Home" },
        { name: "About" },
        { name: "Services" },
        { name: "Process" },
        { name: "Team" },
        { name: "Blog" },
        { name: "Get in touch" },
      ],
    };
  },
};
</script>

