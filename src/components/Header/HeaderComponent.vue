<template>
  <header>
    <HeaderMenu />
  </header>
</template>

<script>
import HeaderMenu from "../Header/HeaderMenuComponent.vue";

export default {
  name: "SiteHeader",
  components: {
    HeaderMenu,
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: $consulting-limed-sprouce;
}
</style>