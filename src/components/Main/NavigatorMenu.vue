<template>
  <div class="nav_menu d-flex align-items-center">
    <ul class="unstyled d-flex align-items-center">
      <li v-for="(link, index) in menuList" :key="index" class="ms-5">
        <a
          href="#"
          class="decor_none text-uppercase hover_elf"
          :class="index === 6 ? 'btn_get' : ''"
        >
          {{ link.name }}
        </a>
      </li>
    </ul>
  </div>
  <!-- /.nav_menu -->
</template>

<script>
export default {
  name: "NavigatorMenu",
  props: {
    menuList: Array,
  }
  
};
</script>

<style lang="scss" scoped>
a {
  color: $consulting-text-dark;
  font-weight: 500;
}
</style>