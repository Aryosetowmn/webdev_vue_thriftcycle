<template>
  <q-layout>
    <q-page-container>
      <q-page class="">
        <q-tabs v-model="tab" style="color: #2e8b57">
          <q-tab name="register" label="Daftar" />
          <q-tab name="login" label="Login" />
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
          <q-tab-panel class="flex flex-center" name="register">
            <div v-if="this.registerTab == true" class="col">
              <div class="row justify-center q-py-xl">
                <q-avatar>
                  <img src="../assets/thrift-cycle-logo.svg" />
                </q-avatar>
              </div>
              <div class="row">
                <q-input
                  style="color: #000"
                  class="full-width q-py-sm"
                  label="Email / No. Hp"
                  outlined
                  v-model="text"
                  dense
                />
              </div>
              <div class="row">
                <q-input
                  class="full-width q-py-sm"
                  label="Password"
                  outlined
                  v-model="text"
                  dense
                />
              </div>
              <div class="row">
                <q-select
                  class="full-width q-py-sm"
                  outlined
                  v-model="model"
                  :options="options"
                  label="Daftar sebagai pengguna biasa"
                  dense
                />
              </div>
              <div class="row justify-center q-py-xl">
                <q-btn
                  @click="userRegister()"
                  class="q-px-lg"
                  no-caps
                  flat
                  text-color="white"
                  style="background-color: #2e8b57"
                  label="Lanjutkan"
                  dense
                />
              </div>
            </div>
            <div class="full-width" v-if="this.userRegisterTab == true">
              <q-avatar square>
                <img src="../assets/register-profile-picture.svg" />
              </q-avatar>
              <div class="text-center">Profile</div>
              <q-separator color="black" />
              <div class="row">
                <div class="col">
                  <q-input
                    class="full-width q-pt-sm q-pr-sm"
                    label="Nama Depan"
                    outlined
                    v-model="text"
                    dense
                  />
                </div>
                <div class="col">
                  <q-input
                    class="full-width q-pt-sm q-pl-sm"
                    label="Nama Belakang"
                    outlined
                    v-model="text"
                    dense
                  />
                </div>
              </div>
              <q-input
                class="full-width q-pt-sm"
                label="Nama Pengguna"
                outlined
                v-model="text"
                dense
              />
              <q-select
                class="full-width q-pt-sm"
                outlined
                v-model="model"
                :options="options"
                label="Daftar sebagai pengguna biasa"
                dense
              />
              <q-input
                outlined
                class="q-pt-sm"
                dense
                v-model="date"
                mask="date"
                :rules="['date']"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="date">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <div class="row">
                <div class="col flex flex-center">
                  <q-btn
                    @click="register()"
                    class="q-px-lg"
                    no-caps
                    outline
                    color="primary"
                    label="Kembali"
                    dense
                  />
                </div>
                <div class="col flex flex-center">
                  <q-btn
                    @click="this.$router.push('/dashboard')"
                    class="q-px-lg"
                    no-caps
                    flat
                    text-color="white"
                    style="background-color: #2e8b57"
                    label="Daftar"
                    dense
                  />
                </div>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel class="flex flex-center" name="login">
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
                  dense
                />
              </div>
              <div class="row">
                <q-input
                  class="full-width q-py-sm"
                  label="Password"
                  outlined
                  v-model="text"
                  dense
                />
              </div>
              <div class="row justify-center q-py-xl">
                <q-btn
                  class="q-px-lg"
                  no-caps
                  flat
                  text-color="white"
                  style="background-color: #2e8b57"
                  label="Lanjutkan"
                  dense
                />
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel class="flex flex-center" name="userRegister">
          </q-tab-panel>
        </q-tab-panels>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      tab: ref("register"),
      date: ref("2019/02/01"),
      registerTab: true,
      userRegisterTab: false,
    };
  },
  methods: {
    userRegister() {
      this.registerTab = false;
      this.userRegisterTab = true;
    },
    register() {
      this.registerTab = true;
      this.userRegisterTab = false;
    },
  },
};
</script>
