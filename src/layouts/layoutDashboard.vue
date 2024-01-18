<template>
  <q-layout view="lHh Lpr lFf">
    <q-header v-if="this.pageBerandaTab == true" class="bg-white">
      <div
        class="q-pa-md"
        style="color: #2e8b57; font-weight: 600; font-size: 18px"
      >
        Thrift Cycle
      </div>
      <div class="row">
        <div class="col-2 text-center">
          <q-avatar rounded>
            <img src="../assets/profile-picture.svg" />
          </q-avatar>
        </div>
        <div class="col-10 self-center">
          <q-input
            @click="this.$router.push('/pencarian')"
            class="full-width q-px-sm"
            label="Cari sesuatu"
            outlined
            v-model="text"
            dense
          />
        </div>
      </div>
      <div class="q-py-md">
        <q-separator size="20px" />
      </div>
    </q-header>
    <q-header v-if="this.pageEducationTab == true" class="bg-white">
      <div class="row q-px-sm q-py-lg">
        <div class="col-2 text-center">
          <q-avatar rounded>
            <img src="../assets/profile-picture.svg" />
          </q-avatar>
        </div>
        <div class="col-10 self-center">
          <q-input
            class="full-width"
            label="Cari sesuatu"
            outlined
            v-model="text"
            dense
          />
        </div>
      </div>
      <div class="q-pb-sm">
        <q-separator size="2px" />
      </div>
    </q-header>
    <q-page-container>
      <page-beranda v-if="this.pageBerandaTab == true"></page-beranda>
      <page-item v-if="this.pageItemTab == true"></page-item>
      <page-education v-if="this.pageEducationTab == true"></page-education>
      <page-profile v-if="this.pageProfileTab == true"></page-profile>
    </q-page-container>
    <q-footer bordered class="bg-grey-3 text-primary">
      <q-separator color="primary" />
      <q-tabs
        no-caps
        active-color="primary"
        class="text-grey-8 bg-white"
        v-model="tab"
      >
        <q-tab name="home" @click="pageBeranda()">
          <q-icon size="24px" name="home" />
        </q-tab>
        <q-tab name="post" @click="pageItem()">
          <q-icon size="24px" name="post_add" />
        </q-tab>
        <q-tab name="feed" @click="pageEducation()">
          <q-icon size="24px" name="feed" />
        </q-tab>
        <q-tab name="person" @click="pageProfile()">
          <q-icon size="24px" name="person" />
        </q-tab>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import pageBeranda from "src/pages/pageBeranda.vue";
import pageItemPost from "src/pages/pageItemPost.vue";
import pageEducation from "src/pages/pageEducation.vue";
import pageProfile from "src/pages/pageProfile.vue";

export default {
  data() {
    return {
      tab: ref("home"),
      pageBerandaTab: true,
      pageItemTab: false,
      pageEducationTab: false,
      pageProfileTab: false,
    };
  },
  methods: {
    pageBeranda() {
      this.pageBerandaTab = true;
      this.pageItemTab = false;
      this.pageEducationTab = false;
      this.pageProfileTab = false;
    },
    pageItem() {
      this.pageBerandaTab = false;
      this.pageItemTab = true;
      this.pageEducationTab = false;
      this.pageProfileTab = false;
    },
    pageEducation() {
      this.pageBerandaTab = false;
      this.pageItemTab = false;
      this.pageEducationTab = true;
      this.pageProfileTab = false;
    },
    pageProfile() {
      this.pageBerandaTab = false;
      this.pageItemTab = false;
      this.pageEducationTab = false;
      this.pageProfileTab = true;
    },
  },
  components: {
    "page-beranda": pageBeranda,
    "page-item": pageItemPost,
    "page-education": pageEducation,
    "page-profile": pageProfile,
  },
};
</script>
