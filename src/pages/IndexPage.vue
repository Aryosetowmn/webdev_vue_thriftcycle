<template>
  <q-layout>
    <q-page-container>
      <q-page class="">
        <q-tabs v-model="tab" style="color: #2e8b57">
          <q-tab name="mails" label="Daftar" />
          <q-tab name="alarms" label="Login" />
        </q-tabs>
        <q-tab-panels
          v-model="tab"
          style="height: calc(100vh - 50px)"
          animated
          swipeable
          vertical
          transition-prev="fade"
          transition-next="fade"
        >
          <q-tab-panel class="flex flex-center" name="mails">
            <div class="col">
              <div class="row justify-center q-py-xl">
                <q-avatar>
                  <img src="../assets/thrift-cycle-logo.svg" />
                </q-avatar>
              </div>
              <div class="row">
                <q-input
                  class="full-width q-py-sm"
                  label="Email / No. Hp"
                  outlined
                  v-model="text"
                  :dense="dense"
                />
              </div>
              <div class="row">
                <q-input
                  class="full-width q-py-sm"
                  label="Password"
                  outlined
                  v-model="text"
                  :dense="dense"
                />
              </div>
              <div class="row">
                <q-select
                  class="full-width q-py-sm"
                  outlined
                  v-model="model"
                  :options="options"
                  label="Daftar sebagai pengguna biasa"
                />
              </div>
              <div class="row justify-center">
                <q-btn
                  no-caps
                  flat
                  class="q-py-sm"
                  text-color="white"
                  style="background-color: #2e8b57"
                  label="Lanjutkan"
                />
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel class="flex flex-center" name="alarms">
            <div class="col">
              <div class="row justify-center q-py-xl">
                <q-avatar>
                  <img src="../assets/thrift-cycle-logo.svg" />
                </q-avatar>
              </div>
              <div class="row">
                <q-input
                  class="full-width q-py-sm"
                  label="Email / No. Hp"
                  outlined
                  v-model="text"
                  :dense="dense"
                />
              </div>
              <div class="row">
                <q-input
                  class="full-width q-py-sm"
                  label="Password"
                  outlined
                  v-model="text"
                  :dense="dense"
                />
              </div>
              <div class="row justify-center">
                <q-btn
                  no-caps
                  flat
                  class="q-py-sm"
                  text-color="white"
                  style="background-color: #2e8b57"
                  label="Lanjutkan"
                />
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("mails"),
    };
  },
};
</script>
