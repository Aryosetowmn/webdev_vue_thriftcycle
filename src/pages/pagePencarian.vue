<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="q-pa-sm">
          <q-btn
            @click="this.$router.push('/dashboard')"
            round
            flat
            icon="arrow_back"
          />
        </div>
        <div class="row">
          <div class="col-2 text-center">
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/avatar.png" />
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
        <div class="q-py-sm">
          <q-separator size="2px" />
        </div>
        <!-- history -->
        <div class="row" :key="n" v-for="n in 3">
          <div class="col-2 text-center">
            <q-btn disable round flat icon="history" />
          </div>
          <div class="col-8 self-center">Riwayat 1</div>
          <div class="col-2 text-center">
            <q-btn round flat icon="close" />
          </div>
        </div>
        <!-- filter -->
        <div class="q-py-sm">
          <q-separator size="2px" />
        </div>
        <div class="row">
          <div class="col">
            <q-select
              class="full-width q-px-sm"
              outlined
              v-model="model"
              :options="options"
              label="Kab/Kota"
              dense
            />
          </div>
          <div class="col">
            <q-select
              class="full-width q-px-sm"
              outlined
              v-model="model"
              :options="options"
              label="Harga"
              dense
            />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
