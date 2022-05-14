<template>
  <main>
    <SiteJumbotron />
    <section class="company">
      <div class="container">
        <div class="row row-cols-2">
          <div class="col">
            <h6 class="text-uppercase fs_14 fw_700 mb-4">about the network</h6>
            <h2 class="fw_700 mb-4"><span class="h2_bg">The</span>Company</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              iaculis diam varius diam ultricies lacinia. Mauris lacus tellus,
              ultrices eu volutpat sit amet, finibus a ipsum.
            </p>
            <p>
              Curabitur convallis, diam a egestas iaculis, neque lorem interdum
              felis, in viverra lacus tortor in leo.
            </p>
          </div>
          <!-- /.col -->
          <div class="col">
            <div class="row row-cols-2">
              <div class="col">
                
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row row-cols-2 -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row row-cols-2 -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /.company -->
    <!-- 


- SECTION SERVICES

- SECTION PROCESS MENAGMENT

- SECTION TEAM

- SECTION LATEST NEWS

- SECTION NEWSLETTER
       -->
  </main>
</template>

<script>
import SiteJumbotron from "../Main/JumbotronComponent.vue";

export default {
  name: "SiteMain",
  components: {
    SiteJumbotron,
  },
};
</script>

<style lang="scss" scoped>
.company {
  background-color: $consulting-black-bg;
  padding: 130px;
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
</style>