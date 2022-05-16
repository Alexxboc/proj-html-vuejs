<template>
  <main>
    <SiteJumbotron />
    <SectionCompany />
    <SectionServices />
    <SectionProcess />
    <SectionTeam />
    <SectionNews />
    <section class="subscribe">
      <div class="container smaller">
        <div class="row row-cols-2 gx-5">
          <div class="col">
            <h6 class="over_title text-uppercase fs_14 fw_700">Newsletter</h6>
            <!-- /.over-title -->
            <h2 class="section_title fw_700 my-4">
              <span class="h2_bg_company">Know</span>First
            </h2>
            <!-- /.section_title -->
            <p>
              Follow closely and receive content about our company and the news
              of the current market.
            </p>
          </div>
          <!-- /.col -->
          <div class="col">
            <form action="submit">
              <div class="row">
                <div class="col-12 mb-3">
                  <input type="text" placeholder="Name"/>
                </div>
                <div class="col-12 mb-3">
                  <input type="email" placeholder="Email"/>
                </div>
                <div class="col-12 mt-2">
                  <a href="#" class="btn_get decor_none">Subscribe</a>
                </div>
              </div>
            </form>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row row-cols-2 -->
      </div>
      <!-- /.container small -->
    </section>
    <!-- /.subscribe -->

    <!-- 


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
import SectionNews from "../Main/SectionNewsComponent.vue";

export default {
  name: "SiteMain",
  components: {
    SiteJumbotron,
    SectionCompany,
    SectionServices,
    SectionProcess,
    SectionTeam,
    SectionNews,
  },
};
</script>

<style lang="scss" scoped>
.subscribe {
  height: 500px;
  background-image: url(@/assets/img/bg-1.jpg);
  background-size: cover;
  background-position: center;
  .container.smaller {
    max-width: 970px;
  }
  h6 {
    color: $consulting-elf-green;
  }

  h2 {
    font-size: 48px;
    font-family: "Poppins", sans-serif;
    color: $consulting-white;
  }

  p {
    color: $consulting-white-text;
  }

  input {
    width: 100%;
    height: 50px;
    background: no-repeat;
    box-shadow: none;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    border-radius: 4px;
    line-height: 1.2;
  }
}
</style>