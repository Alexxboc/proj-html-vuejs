<template>
  <section class="services">
    <div class="container">
      <div class="row info">
        <div class="col-8 d-flex flex-column justify-content-end">
          <h6 class="over-title text-uppercase fs_14 fw_700">
            Our business area
          </h6>
          <!-- /.over-title -->
          <h2 class="section_title fw_700 my-4">
            Excellence in <span class="h2_bg_services">Services</span>
          </h2>
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
      <div class="row row-cols-3 items gy-4 mt-4">
        <div class="col">
          <div class="card_info p-5">
            <div class="item_icons d-flex justify-content-between">
              <font-awesome-icon icon="fa-solid fa-sitemap" class="icon" />
              <font-awesome-icon icon="fa-solid fa-arrow-right" class="arrow" />
            </div>
            <!-- /.item_icons -->
            <h4 class="item_title fw_700 py-4">Audit & Assurance</h4>
            <!-- /.item_title -->
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
        </div>
        <!-- /.card_info -->
        <div class="col">
          <div class="card_info p-5">
            <div class="item_icons d-flex justify-content-between">
              <font-awesome-icon icon="fa-solid fa-briefcase" class="icon" />
              <font-awesome-icon icon="fa-solid fa-arrow-right" class="arrow" />
            </div>
            <!-- /.item_icons -->
            <h4 class="item_title fw_700 py-4">Financial Advisory</h4>
            <!-- /.item_title -->
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
        </div>
        <!-- /.card_info -->
        <div class="col">
          <div class="card_info p-5">
            <div class="item_icons d-flex justify-content-between">
              <font-awesome-icon icon="fa-solid fa-chart-simple" class="icon" />
              <font-awesome-icon icon="fa-solid fa-arrow-right" class="arrow" />
            </div>
            <!-- /.item_icons -->
            <h4 class="item_title fw_700 py-4">Analytics and M&A</h4>
            <!-- /.item_title -->
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
        </div>
        <!-- /.card_info -->
        <div class="col">
          <div class="card_info p-5">
            <div class="item_icons d-flex justify-content-between">
              <font-awesome-icon icon="fa-solid fa-plane-up" class="icon" />
              <font-awesome-icon icon="fa-solid fa-arrow-right" class="arrow" />
            </div>
            <!-- /.item_icons -->
            <h4 class="item_title fw_700 py-4">Middle Marketing</h4>
            <!-- /.item_title -->
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
        </div>
        <!-- /.card_info -->
        <div class="col">
          <div class="card_info p-5">
            <div class="item_icons d-flex justify-content-between">
              <font-awesome-icon icon="fa-solid fa-globe" class="icon" />
              <font-awesome-icon icon="fa-solid fa-arrow-right" class="arrow" />
            </div>
            <!-- /.item_icons -->
            <h4 class="item_title fw_700 py-4">Legal Consulting</h4>
            <!-- /.item_title -->
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
        </div>
        <!-- /.card_info -->
        <div class="col">
          <div class="card_info p-5">
            <div class="item_icons d-flex justify-content-between">
              <font-awesome-icon icon="fa-solid fa-folder-open" class="icon" />
              <font-awesome-icon icon="fa-solid fa-arrow-right" class="arrow" />
            </div>
            <!-- /.item_icons -->
            <h4 class="item_title fw_700 py-4">Regulatory Risk</h4>
            <!-- /.item_title -->
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
        </div>
        <!-- /.card_info -->

        <!-- /.col -->
      </div>
      <!-- /.row row-cols-3 items -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.services -->
</template>

<script>
export default {
  name: "SectionServices",
};
</script>

<style lang="scss" scoped>
/* Section Title */
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

/* Section items */

.card_info {
  background-color: $consulting-white;
  border-radius: 10px;

  p {
    color: #606d75;
  }
  .icon {
    font-size: 45px;
    color: $consulting-primary;
  }

  .arrow {
    font-size: 25px;
    color: $consulting-btn-bg-light;
  }
}
</style>