<template>
  <main>
    <SiteJumbotron />
    <SectionCompany />

    <section class="services">
      <div class="container">
        <div class="row info">
          <div class="col-8 d-flex flex-column justify-content-end">
            <h6 class="over-title text-uppercase fs_14 fw_700">
              Our business area
            </h6>
            <!-- /.over-title -->
            <h2 class="section_title fw_700 my-4">Excellence in <span class="h2_bg_services">Services</span></h2>
            <!-- /.section_title -->
            <p>
              We are leaders in providing consultancy services with a set of
              cutting-edge technologies and a team of experienced and renowned
              professionals. These are some options that you can hire.
            </p>
          </div>
          <!-- /.col-10 -->
          <div class="col-4 d-flex align-items-end justify-content-end">
            <a href="#" class="btn_get decor_none"> See all </a>
            <!-- /.btn_get decor-none -->
          </div>
          <!-- /.col-2 -->
        </div>
        <!-- /.row info -->
        <div class="row row-cols-3 items">
          <div class="col"></div>
          <!-- /.col -->
        </div>
        <!-- /.row row-cols-3 items -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /.services -->

    <!-- 
- SECTION PROCESS MENAGMENT

- SECTION TEAM

- SECTION LATEST NEWS

- SECTION NEWSLETTER
       -->
  </main>
</template>

<script>
import SiteJumbotron from "../Main/JumbotronComponent.vue";
import SectionCompany from "../Main/SectionCompanyComponent.vue";

export default {
  name: "SiteMain",
  components: {
    SiteJumbotron,
    SectionCompany,
  },
};
</script>

<style lang="scss" scoped>
.services {
  padding: 130px 0;
  background-color: $consulting-services-bg;
}

.col-4 {
  margin-bottom: 1rem;
}

h6 {
  color: $consulting-elf-green;
}

h2 {
  font-size: 48px;
  font-family: "Poppins", sans-serif;
  color: $consulting-dark-blue;
}

p {
  color: #637179;
}
</style>