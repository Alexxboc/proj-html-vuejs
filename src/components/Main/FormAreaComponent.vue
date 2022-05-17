<template>
  <div class="row justify-content-end">
    <div class="col-12">
      <div class="form_wrapper">
        <h6 class="text-uppercase fw_600">fusions & acquisitions</h6>
        <h1 class="fw_900">
          Insurance <br />
          Consulting
        </h1>
        <div class="row row-cols-2 form pt-3">
          <div class="col pb-2">
            <input type="text" placeholder="Name" />
          </div>
          <!-- /.col -->
          <div class="col pb-2">
            <input type="text" placeholder="Email" />
          </div>
          <!-- /.col -->
          <div class="col"><input type="text" placeholder="Phone" /></div>
          <!-- /.col -->
          <div class="col select">
            <select name="more_info" id="1">
              <option value="" selected>
                <span>More info</span>
              </option>
            </select>
            <font-awesome-icon
              icon="fa-solid fa-chevron-down"
              class="chevron"
            />
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row form -->
        <div class="actions pt-4">
          <a href="#" class="btn_get decor_none">get in touch</a>
          <a href="#" class="btn_outline decor_none ms-3">read more</a>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.form_wrapper -->
    </div>
    <!-- /.col-12 -->
  </div>
  <!-- /.row -->
</template>

<script>
export default {
  name: "JumboFormArea",
};
</script>

<style lang="scss" scoped>
.col-12 {
  width: 40%;
}
.form_wrapper {
  padding: 100px 0;
  h6 {
    color: $consulting-elf-green;
  }
  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 4.5rem;
    color: $consulting-dark-blue;
  }

  .col.select {
    position: relative;
    .chevron {
      position: absolute;
      top: 50%;
      right: 30px;
      transform: translate(-50%, -50%);
      color: $consulting-gray;
    }
  }

  input,
  select {
    width: 100%;
    height: 50px;
    background: no-repeat;
    box-shadow: none;
    padding: 1rem;
    background-color: $consulting-input-bg;
    border: none;
    border-radius: 4px;
    line-height: 1.2;
    color: $consulting-gray;
    outline: none;
    position: relative;
  }

  select {
    -webkit-appearance: none;
  }
}
</style>