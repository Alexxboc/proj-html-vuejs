<template>
  <main>
    <SiteJumbotron />
    <SectionCompany />

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
import SectionCompany from "../Main/SectionCompanyComponent.vue";

export default {
  name: "SiteMain",
  components: {
    SiteJumbotron,
    SectionCompany,
  },
};
</script>

<style lang="scss" scoped>

</style>