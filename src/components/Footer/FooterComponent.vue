<template>
  <footer>
    <FooterMenu />
    <div class="copyrights p-3">
      <div class="container">
        <div class="row row-cols-2">
          <div class="col p-3">
            <p>Enjoy the low price. We are tracking any intention of piracy.</p>
          </div>
          <!-- /.col -->
          <div class="col p-3">
            <p class="text-end">
              &#169; 2020 <span class="text-uppercase">nexgen</span> is Proudly
              Powered by <span class="primary">Codings</span>.
            </p>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row row-cols-2 -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.copyrights -->
  </footer>
</template>

<script>
import FooterMenu from "../Footer/FooterMenuComponent.vue";

export default {
  name: "SiteFooter",
  components: {
    FooterMenu,
  },
};
</script>

<style lang="scss" scoped>
.copyrights {
  background-color: $consulting-copyright-bg;
  color: $consulting-white-smoke;
  font-size: 14px;
  .primary {
    color: $consulting-primary;
    font-weight: 600;
  }
}
</style>