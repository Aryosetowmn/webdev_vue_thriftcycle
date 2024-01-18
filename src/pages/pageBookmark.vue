<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="q-pa-md">
          <q-btn @click="this.$router.back" round flat icon="arrow_back" />
        </div>
        <div class="row">
          <div class="col-2 text-center">
            <q-avatar rounded>
              <img src="../assets/profile-picture.svg" />
            </q-avatar>
          </div>
          <div class="col-10 self-center">
            <q-input
              class="full-width q-px-sm"
              label="Cari sesuatu"
              outlined
              v-model="text"
              dense
            />
          </div>
        </div>
        <div class="q-py-sm">
          <q-separator size="2px" />
        </div>
        <!-- bookmark list -->
        <div class="q-px-md q-py-sm" :key="n" v-for="n in 3">
          <q-card flat bordered style="border-radius: 15px">
            <img src="../assets/item-picture.webp" />
            <div class="text-bold q-pt-sm q-px-sm" style="font-size: 18px">
              Kipas angin cosmos wadesta
            </div>
            <div class="q-px-sm text-bold">Rp. 20.000</div>
            <div class="q-px-sm">Bandung</div>
            <div class="text-caption text-grey q-px-sm q-pb-sm">
              Kipas angin bekas yang masih dalam kondisi baik dan berfungsi
              dengan optimal. Meskipun telah digunakan sebelumnya, kipas ini
              tetap dapat memberikan udara segar dengan kecepatan yang dapat
              diatur sesuai kebutuhan Anda. Mesinnya tetap ........
            </div>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
