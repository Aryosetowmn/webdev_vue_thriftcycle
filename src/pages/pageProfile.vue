<template>
  <q-page>
    <!-- profile -->
    <q-img src="../assets/vector.svg">
      <div class="bg-transparent flex-center flex full-width full-height">
        <div class="text-center self-center">
          <q-avatar size="90px">
            <img
              style="border-style: solid; border-width: 5px"
              src="../assets/profile-picture.svg"
            />
          </q-avatar>
          <div class="q-pt-xs">
            <q-btn
              align="left"
              class="btn-fixed-width"
              flat
              label="David Blaze"
              icon-right="edit"
              style="border-radius: 15px"
            />
          </div>
        </div>
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
    <!-- subscription package -->
    <div class="row">
      <div class="col-4 self-center q-py-xs q-px-sm">
        <q-card
          v-ripple
          bordered
          flat
          class="dark"
          style="border-radius: 10px; border-color: #2e8b57"
        >
          <div class="text-bold text-center q-py-md">Kertas</div>
          <div class="q-px-sm text-caption" style="font-size: 12px">
            +5 postingan
          </div>
          <div class="q-px-sm text-caption" style="font-size: 12px">
            +2 Bonus postingan
          </div>
          <div class="text-center text-bold q-py-sm">Rp. 5.000</div>
        </q-card>
      </div>
      <div class="col-4 q-py-xs q-px-sm">
        <q-card
          v-ripple
          bordered
          flat
          style="
            border-radius: 10px;
            border-color: #2e8b57;
            background-color: rgba(46, 139, 87, 0.25);
          "
        >
          <div class="text-bold text-center q-py-md">Gunting</div>
          <div class="q-px-sm text-caption" style="font-size: 12px">
            +15 postingan
          </div>
          <div class="q-px-sm text-caption" style="font-size: 12px">
            +6 Bonus postingan
          </div>
          <div class="text-center text-bold q-py-sm">Rp. 20.000</div>
        </q-card>
      </div>
      <div class="col-4 self-center q-py-xs q-px-sm">
        <q-card
          v-ripple
          bordered
          flat
          style="border-radius: 10px; border-color: #2e8b57"
        >
          <div class="text-bold text-center q-py-md">Batu</div>
          <div class="q-px-sm text-caption" style="font-size: 12px">
            +10 postingan
          </div>
          <div class="q-px-sm text-caption" style="font-size: 12px">
            +4 Bonus postingan
          </div>
          <div class="text-center text-bold q-py-sm">Rp. 10.000</div>
        </q-card>
      </div>
    </div>
    <!-- post history -->
    <div class="q-px-md q-py-md text-bold">Riwayat Postingan</div>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-2">
          <q-avatar size="42px" rounded>
            <img src="../assets/random-profile-picture1.svg" />
          </q-avatar>
        </div>
        <div class="col-8 self-center">
          <q-item-section>
            <q-item-label>Tatang Sutarman</q-item-label>
            <q-item-label caption>2 jam lalu</q-item-label>
          </q-item-section>
        </div>
        <div class="col-2 text-center self-center">
          <q-btn @click="clickMore()" round flat dense icon="more_horiz" />
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
      </div>
    </div>
  </q-page>
</template>
<script>
import moreOptionDialog from "../components/componentMore.vue";

export default {
  methods: {
    clickMore() {
      this.$q.dialog({
        component: moreOptionDialog,
      });
    },
  },
};
</script>
