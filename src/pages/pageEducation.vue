<template>
  <q-page>
    <div
      class="q-px-md"
      @click="this.$router.push('/education-detail')"
      :key="n"
      v-for="n in 1"
    >
      <div class="q-py-sm">
        <q-img style="border-radius: 5px" src="../assets/item-picture.webp" />
      </div>
      <div class="text-bold" style="font-size: 16px">
        Tips dan Trik Berbelanja Barang Bekas Berkualitas
      </div>
      <div class="row q-py-sm">
        <div class="col-2">
          <q-avatar size="42px" rounded>
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </div>
        <div class="col-8 self-center">
          <div class="row">
            <div class="col-4">James Clear</div>
            <div
              class="col-8 text-grey q-px-sm self-center"
              style="font-size: 12px"
            >
              9 Januari 2024
            </div>
          </div>
        </div>
        <div class="col-2 text-center self-center">
          <q-btn round flat dense icon="thumb_up" />
        </div>
      </div>
      <q-separator size="2px" />
    </div>
  </q-page>
</template>
