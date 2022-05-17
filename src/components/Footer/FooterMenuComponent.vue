<template>
  <section class="footer_menu">
    <div class="container">
      <div class="row special">
        <div class="col-3">
          <div class="row">
            <div class="col-12 info">
              <div class="logo">
                <span class="logo_pill logo_footer">nex</span>
                <span class="ms-1 logo_right">gen</span>
              </div>
              <p class="mt-4">
                A Functional HTML Template for Corporate & Business.
              </p>
              <div class="contacts mt-3">
                <div class="phone_number mb-2 hover_elf">
                  <font-awesome-icon icon="fa-solid fa-phone" />
                  <span class="ms-2">+1 (305) 1234-5678</span>
                </div>
                <!-- /.phone_number -->
                <div class="email mb-2 hover_elf">
                  <font-awesome-icon icon="fa-solid fa-envelope" />
                  <span class="ms-2">hello@example.com</span>
                </div>
                <!-- /.email -->
                <div class="adress mb-5 hover_elf">
                  <font-awesome-icon icon="fa-solid fa-location-dot" />
                  <span class="ms-2">Main Avenue, 987</span>
                </div>
                <!-- /.adress -->
              </div>
              <!-- /.contacts -->
              <a class="btn_outline decor_none"> get in touch </a>
              <!-- /.btn_outline decor_none -->
            </div>
            <!-- /.col-12 -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.col-3 -->
        <div class="col-9">
          <div class="row row-cols-3">
            <div class="col" v-for="(menu, index) in menuList" :key="index">
              <div class="menu_card translate_y">
                <h4 class="fw_700 mb-3">{{ menu.title }}</h4>
                <ul class="unstyled ps-0">
                  <li
                    class="mb-1"
                    v-for="(link, index) in menuList[index].links"
                    :key="index"
                  >
                    <a href="#" class="decor_none hover_elf">
                      <font-awesome-icon icon="fa-solid fa-chevron-right" />
                      <span class="ms-2">{{ link }}</span>
                    </a>
                  </li>
                </ul>
              </div>
              <!-- /.menu_card -->
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row row-cols-3 -->
        </div>
        <!-- /.col-9 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.footer_menu -->
</template>

<script>


export default {
  name: "FooterMenu",
  data() {
    return {
      menuList: [
        {
          title: "About",
          links: [
            "The Company",
            "Institutional",
            "Social & Events",
            "Innovation",
            "Enviroment",
            "Technology",
          ],
        },
        {
          title: "Services",
          links: [
            "Audit & Assurance",
            "Financial Advisory",
            "Analytics M&A",
            "Middle Marketing",
            "Legal Consulting",
            "Regulatory Risk",
          ],
        },
        {
          title: "Support",
          links: [
            "Responsibility",
            "Terms of Use",
            "About Cookies",
            "Privacy Policy",
            "Accessibility",
            "Information",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer_menu {
  background-color: $consulting-footer-bg;
  .col-12.info {
    color: $consulting-white-smoke;
    a {
      color: $consulting-white !important;
    }
  }
  .menu_card {
    background-color: #19191f;
    padding: 35px 40px;
    border-radius: 10px;
    h4 {
      color: $consulting-white;
    }
    a {
      color: $consulting-white-smoke;
    }
  }
}
</style>