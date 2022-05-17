<template>
  <main>
    <SiteJumbotron />
    <SectionCompany />
    <SectionServices />
    <SectionProcess />
    <SectionTeam />
    <SectionNews />
    <SectionSubscribe />
  </main>
</template>

<script>
import SiteJumbotron from "../Main/JumbotronComponent.vue";
import SectionCompany from "../Main/SectionCompanyComponent.vue";
import SectionServices from "../Main/SectionServicesComponent.vue";
import SectionProcess from "../Main/SectionProcessComponent.vue";
import SectionTeam from "../Main/SectionTeamComponent.vue";
import SectionNews from "../Main/SectionNewsComponent.vue";
import SectionSubscribe from "../Main/SectionSubscribeComponent.vue";

export default {
  name: "SiteMain",
  components: {
    SiteJumbotron,
    SectionCompany,
    SectionServices,
    SectionProcess,
    SectionTeam,
    SectionNews,
    SectionSubscribe,
  },
};
</script>

