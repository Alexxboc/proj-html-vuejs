<template>
  <header>
    <!-- 
    - HEADER
    - SECTION JUMBOTRON>Navbar>form -->
    <div class="container">
      <HeaderMenu />
    </div>
    <!-- /.container -->
  </header>
</template>

<script>
import HeaderMenu from "@/components/HeaderMenuComponent.vue";

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