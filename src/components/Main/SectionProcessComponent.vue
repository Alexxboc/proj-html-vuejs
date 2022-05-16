<template>
  <section class="process_menagment">
    <div class="container large">
      <div class="row info">
        <div class="col-12 text-center">
          <h6 class="over_title text-uppercase fs_14 fw_700">
            How it works in practice
          </h6>
          <!-- /.over-title -->
          <h2 class="section_title fw_700 my-4">
            <span class="h2_bg_services">Process</span> Managment
          </h2>
          <!-- /.section_title -->
          <p>
            We work with innovative methodologies to ensure that the entire
            reformatting process is done <br />
            from start to finish as planned.
          </p>
        </div>
        <!-- /.col-12 -->
      </div>
      <!-- /.row info -->
      <div class="row row-cols-5 justify-content-center mt-5">
        <div class="col text-center">
          <div class="process text-center">
            <span class="fw_700">01</span>
          </div>
          <!-- /.process -->
          <h4 class="fw_700 my-4">Collection of informations</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <!-- /.col -->
        <div class="col text-center">
          <div class="process text-center">
            <span class="fw_700">02</span>
          </div>
          <!-- /.process -->
          <h4 class="fw_700 my-4">Strategic planning</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <!-- /.col -->
        <div class="col text-center">
          <div class="process text-center">
            <span class="fw_700">03</span>
          </div>
          <!-- /.process -->
          <h4 class="fw_700 my-4">Assignment of responsibilities</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <!-- /.col -->
        <div class="col text-center">
          <div class="process text-center">
            <span class="fw_700">04</span>
          </div>
          <!-- /.process -->
          <h4 class="fw_700 my-4">Formatting process</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <!-- /.col -->
        <div class="col text-center">
          <div class="process text-center">
            <span class="fw_700">05</span>
          </div>
          <!-- /.process -->
          <h4 class="fw_700 my-4">Continuity formalization</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row row-cols-5 -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.process_menagment -->
</template>

<script>
export default {
  name: "SectionProcess",
};
</script>

<style lang="scss" scoped>
.container.large {
  max-width: 100%;
}

.process_menagment {
  padding: 130px 0;
  h6 {
    color: $consulting-elf-green;
  }

  h2 {
    font-size: 48px;
    font-family: "Poppins", sans-serif;
    color: $consulting-dark-blue;
    margin-right: 0;
  }

  p {
    color: #606d75;
  }
}

.process {
  height: 45px;
  width: 45px;
  background-color: $consulting-btn-bg-light;
  color: $consulting-primary;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  margin: auto;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 45px;
  position: relative;
  z-index: 1;
}

h4 {
  color: $consulting-dark-blue;
}

.row.row-cols-5 {
  padding: 0 10rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    top: 21px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: $consulting-btn-bg-light;
  }
}

.col {
  padding-right: 10px;
  padding-left: 10px;
}
</style>