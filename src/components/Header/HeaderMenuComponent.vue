<template>
  <div class="container">
    <div class="header_menu d-flex align-items-center justify-content-between">
      <div class="opening_time hover_elf">
        <font-awesome-icon icon="fa-solid fa-clock" />
        <span class="ms-2">Open Hours: Mon - Sat - 9:00 - 18:00</span>
      </div>
      <!-- /.opening_time -->
      <div class="contacts d-flex">
        <div class="phone_number hover_elf">
          <font-awesome-icon icon="fa-solid fa-phone" />
          <span class="ms-2">+1 (305) 1234-5678</span>
        </div>
        <!-- /.phone_number -->
        <div class="email mx-5 hover_elf">
          <font-awesome-icon icon="fa-solid fa-envelope" />
          <span class="ms-2">hello@example.com</span>
        </div>
        <!-- /.email -->
        <div class="socials">
          <font-awesome-icon icon="fa-brands fa-facebook-f" class="hover_elf"/>
          <font-awesome-icon icon="fa-brands fa-twitter" class="mx-4 hover_elf" />
          <font-awesome-icon icon="fa-brands fa-linkedin-in" class="hover_elf"/>
        </div>
        <!-- /.socials -->
      </div>
      <!-- /.contacts -->
    </div>
    <!-- /.header_menu -->
  </div>
  <!-- /.container -->
</template>

<script>
export default {
  name: "HeaderMenu",
};
</script>

<style lang="scss" scoped>

.header_menu {
  color: $consulting-white-smoke;
  height: 50px;
  font-size: 15px;
}
</style>