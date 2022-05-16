<template>
  <main>
    <SiteJumbotron />
    <SectionCompany />
    <SectionServices />

   

    <!-- 
- SECTION PROCESS MENAGMENT

- SECTION TEAM

- SECTION LATEST NEWS

- SECTION NEWSLETTER
       -->
  </main>
</template>

<script>
import SiteJumbotron from "../Main/JumbotronComponent.vue";
import SectionCompany from "../Main/SectionCompanyComponent.vue";
import SectionServices from "../Main/SectionServicesComponent.vue"

export default {
  name: "SiteMain",
  components: {
    SiteJumbotron,
    SectionCompany,
    SectionServices
  },
};
</script>

<style lang="scss" scoped>

</style>