<template>
  <main>
    <SiteJumbotron />
    <SectionCompany />
    <SectionServices />
    <SectionProcess />
    <SectionTeam />
    <section class="news">
      <div class="container">
        <div class="row info">
          <div class="col-8 d-flex flex-column justify-content-end">
            <h6 class="over_title text-uppercase fs_14 fw_700">
              Our editorial content
            </h6>
            <!-- /.over-title -->
            <h2 class="section_title fw_700 my-4">
              Latest <span class="h2_bg_light">News</span>
            </h2>
            <!-- /.section_title -->
            <p class="mb-0">
              Every week we publish content about what is best in the business
              world.
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
        <div class="row row-cols-3 cards mt-5 gx-4">
          <div class="col">
            <div class="card_news">
              <div class="card_img">
                <img src="@/assets/img/news-1.jpg" alt="foto" />
              </div>
              <!-- /.card_img -->
              <div class="card_info ">
                <h4 class="text-center fw_800">
                  Increasing creativity is possible for everyone
                </h4>
              </div>
              <!-- /.card_info -->
            </div>
            <!-- /.card_news -->
          </div>
          <!-- /.col -->
          <div class="col">
            <div class="card_news">
              <div class="card_img">
                <img src="@/assets/img/news-2.jpg" alt="foto" />
              </div>
              <!-- /.card_img -->
              <div class="card_info">
                <h4 class="text-center fw_800">
                  Because market research is part of the business plan
                </h4>
              </div>
              <!-- /.card_info -->
            </div>
            <!-- /.card_news -->
          </div>
          <!-- /.col -->
          <div class="col">
            <div class="card_news">
              <div class="card_img">
                <img src="@/assets/img/news-3.jpg" alt="foto" />
              </div>
              <!-- /.card_img -->
              <div class="card_info">
                <h4 class="text-center fw_800">
                  Working from home is now a trand
                </h4>
              </div>
              <!-- /.card_info -->
            </div>
            <!-- /.card_news -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row row-cols-3 cards -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /.news -->

    <!-- 




- SECTION LATEST NEWS

- SECTION NEWSLETTER
       -->
  </main>
</template>

<script>
import SiteJumbotron from "../Main/JumbotronComponent.vue";
import SectionCompany from "../Main/SectionCompanyComponent.vue";
import SectionServices from "../Main/SectionServicesComponent.vue";
import SectionProcess from "../Main/SectionProcessComponent.vue";
import SectionTeam from "../Main/SectionTeamComponent.vue";

export default {
  name: "SiteMain",
  components: {
    SiteJumbotron,
    SectionCompany,
    SectionServices,
    SectionProcess,
    SectionTeam,
  },
};
</script>

<style lang="scss" scoped>
// .col-4 {
//   margin-bottom: 1rem;
// }

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

.card_news {
  position: relative;
  img {
    border-radius: 10px;
    filter: brightness(0.6);
  }
  .card_info {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 50px 46px;
    h4 {
      color: $consulting-white;
    }
  }
}
</style>