<template>
  <q-page>
    <!-- profile -->
    <q-img src="../assets/vector.svg">
      <div class="bg-transparent flex flex-center full-width full-height">
        <q-avatar size="90px">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </div>
    </q-img>
    <!-- saved post -->
    <div class="q-py-sm">
      <div @click="this.$router.push('/bookmark')" class="row">
        <div class="col-2 text-center">
          <q-btn round flat icon="bookmark" disable />
        </div>
        <div class="col-8 self-center">Disimpan</div>
        <div class="col-2 text-center" disable>
          <q-btn round flat icon="navigate_next" disable />
        </div>
      </div>
    </div>
    <!-- post history -->
    <div class="q-px-md q-py-sm text-bold">Riwayat Postingan</div>
    <div class="q-px-md" :key="n" v-for="n in 3">
      <div class="row">
        <div class="col-2">
          <q-avatar size="42px" rounded>
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </div>
        <div class="col-8 self-center">
          <q-item-section>
            <q-item-label>Tatang Sutarman</q-item-label>
            <q-item-label caption>2 jam lalu</q-item-label>
          </q-item-section>
        </div>
        <div class="col-2 text-center self-center">
          <q-btn round flat dense icon="more_horiz" />
        </div>
      </div>
      <div>
        <q-item-section>
          <q-item-label class="q-pt-sm"
            >Kipas angin cosmos wadesta</q-item-label
          >
          <q-item-label caption>Rp. 20.000</q-item-label>
          <q-item-label caption style="color: #000000">Bandung</q-item-label>
          <q-item-label class="q-pt-sm" caption
            >Kipas angin bekas yang masih dalam kondisi baik dan berfungsi
            dengan optimal. Meskipun telah digunakan sebelumnya, kipas ini tetap
            dapat memberikan udara segar dengan kecepatan yang dapat diatur
            sesuai kebutuhan Anda. Mesinnya tetap stabil tanpa suara berisik
            yang mengganggu. Selain itu, baling-baling kipas telah dibersihkan
            dan dirawat secara rutin untuk memastikan kinerjanya tetap
            maksimal.</q-item-label
          >
        </q-item-section>
        <div class="q-py-sm">
          <q-img style="border-radius: 5px" src="../assets/item-picture.webp" />
        </div>
        <div class="row">
          <div class="col">
            <q-btn size="12px" round flat dense icon="thumb_up" />
          </div>
          <div class="col">
            <q-btn size="12px" round flat dense icon="chat" />
          </div>
          <div class="col">
            <q-btn size="12px" round flat dense icon="call" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
