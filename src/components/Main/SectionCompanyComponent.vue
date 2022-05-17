<template>
  <section class="company">
    <div class="container">
      <div class="row row-cols-2 justify-content-center gx-5">
        <div class="col left">
          <h6 class="over_title">about the network</h6>
          <h2 class="h2_section mb-4"><span class="h2_bg_company">The</span>Company</h2>
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
        <div class="col right">
          <div class="row row-cols-2 gy-5">
            <div class="col">
              <div class="item_title d-flex align-items-start fs_14 pb-3">
                <font-awesome-icon
                  class="title_icon me-2"
                  icon="fa-solid fa-award"
                />
                <h4 class="fw_700">Tradition</h4>
              </div>
              <!-- /.item_title -->
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
            <!-- /.col -->
            <div class="col">
              <div class="item_title d-flex align-items-start fs_14 pb-3">
                <font-awesome-icon
                  class="title_icon me-2"
                  icon="fa-solid fa-lock"
                />
                <h4 class="fw_700">Security</h4>
              </div>
              <!-- /.item_title -->
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
            <!-- /.col -->
            <div class="col">
              <div class="item_title d-flex align-items-start fs_14 pb-3">
                <font-awesome-icon
                  class="title_icon me-2"
                  icon="fa-solid fa-pen-to-square"
                />
                <h4 class="fw_700">Certificate</h4>
              </div>
              <!-- /.item_title -->
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
            <!-- /.col -->
            <div class="col">
              <div class="item_title d-flex align-items-start fs_14 pb-3">
                <font-awesome-icon
                  class="title_icon me-2"
                  icon="fa-solid fa-graduation-cap"
                />
                <h4 class="fw_700">Expertise</h4>
              </div>
              <!-- /.item_title -->
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
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
</template>

<script>
export default {
  name: "SectionCompany",
};
</script>

<style lang="scss" scoped>
.company {
  background-color: $consulting-black-bg;
}

.col.left {
  padding-right: 7rem;
}

.col.right {
  padding-left: 3rem;
  padding-top: 1rem;
}

h6.over_title {
  padding-bottom: 1.7rem;
}

h2 {
  color: $consulting-white;
}

p {
  color: $consulting-white-text;
}

.item_title {
  h4 {
    color: $consulting-white;
  }
  .title_icon {
    color: $consulting-elf-green;
    font-size: 24px;
  }
}
</style>