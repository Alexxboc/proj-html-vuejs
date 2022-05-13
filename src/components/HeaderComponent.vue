<template>
  <header>
    <HeaderMenu />
  </header>
</template>

<script>
import HeaderMenu from "@/components/HeaderMenuComponent.vue";

export default {
  name: "SiteHeader",
  components: {
    HeaderMenu,
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
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: $consulting-limed-sprouce;
}
</style>