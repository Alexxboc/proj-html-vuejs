<template>
  <main>
    <section class="jumbotron">
      <div class="container">
        <div class="navigator d-flex justify-content-between py-4">
          <div class="logo fs_20 fw_600 text-uppercase">
            <span class="me-2 logo_pill">n e x</span>
            <span>g e n</span>
          </div>
          <!-- /.logo -->
          <div class="nav_menu d-flex align-items-center">
            <ul class="unstyled d-flex align-items-center">
              <li v-for="(link, index) in menuList" :key="index" class="ms-5">
                <a href="#" class="decor_none text-uppercase fw_500" :class="index === 6? 'btn_get' : '' ">
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>
          <!-- /.nav_menu -->
        </div>
        <!-- /.navigator -->
        <div class="form"></div>
        <!-- /.form -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /.jumbotron -->
    <!-- 
- SECTION COMPANY

- SECTION SERVICES

- SECTION PROCESS MENAGMENT

- SECTION TEAM

- SECTION LATEST NEWS

- SECTION NEWSLETTER
       -->
  </main>
</template>

<script>
export default {
  name: "SiteMain",
  components: {},
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

<style lang="scss" scoped>
.jumbotron {
  height: 830px;
  background-image: url(@/assets/img/bg-6.jpg);
  background-size: cover;
  background-position: center;
}
/* Navigator */
a {
  color: $consulting-limed-sprouce;
}
</style>