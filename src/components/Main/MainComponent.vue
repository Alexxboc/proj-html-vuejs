<template>
  <main>
    <SiteJumbotron />
    <SectionCompany />
    <SectionServices />
    <SectionProcess />
    <SectionTeam />

    <!-- 


- SECTION TEAM

- SECTION LATEST NEWS

- SECTION NEWSLETTER
       -->
  </main>
</template>

<script>
import SiteJumbotron from "../Main/JumbotronComponent.vue";
import SectionCompany from "../Main/SectionCompanyComponent.vue";
import SectionServices from "../Main/SectionServicesComponent.vue";
import SectionProcess from "../Main/SectionProcessComponent.vue";
import SectionTeam from "../Main/SectionTeamComponent.vue";

export default {
  name: "SiteMain",
  components: {
    SiteJumbotron,
    SectionCompany,
    SectionServices,
    SectionProcess,
    SectionTeam,
  },
};
</script>

<style lang="scss" scoped>

</style>