<template>
  <footer>
    <FooterMenu />
    <FooterCopyright />
   
  </footer>
</template>

<script>
import FooterMenu from "../Footer/FooterMenuComponent.vue";
import FooterCopyright from "../Footer/FooterCopyrightComponent.vue"

export default {
  name: "SiteFooter",
  components: {
    FooterMenu,
    FooterCopyright
  },
};
</script>
