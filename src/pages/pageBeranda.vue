<template>
  <q-page>
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
        <div class="row">
          <div class="col-4">
            <div class="row">
              <q-btn
                class="full-width"
                :ripple="{ color: 'primary' }"
                style="border-radius: 15px"
                dense
                round
                flat
              >
                <q-avatar size="26px">
                  <img src="../assets/thumb-up-icon.svg" />
                </q-avatar>
                <div class="q-pl-xs">32</div>
              </q-btn>
            </div>
          </div>
          <div class="col-4">
            <div class="row">
              <q-btn
                class="full-width"
                :ripple="{ color: 'primary' }"
                style="border-radius: 15px"
                dense
                flat
              >
                <q-avatar size="26px">
                  <img src="../assets/comment-icon.svg" />
                </q-avatar>
                <div class="q-pl-xs">32</div>
              </q-btn>
            </div>
          </div>
          <div class="col-4">
            <div class="row">
              <q-btn
                class="full-width"
                :ripple="{ color: 'primary' }"
                style="border-radius: 15px"
                no-caps
                dense
                flat
              >
                <q-avatar size="26px">
                  <img src="../assets/whatsapp-icon.svg" />
                </q-avatar>
                <div class="q-pl-xs">Hubungi</div>
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-2">
          <q-avatar size="42px" rounded>
            <img src="../assets/random-profile-picture2.svg" />
          </q-avatar>
        </div>
        <div class="col-8 self-center">
          <q-item-section>
            <q-item-label>Retno Wahyu</q-item-label>
            <q-item-label caption>5 jam lalu</q-item-label>
          </q-item-section>
        </div>
        <div class="col-2 text-center self-center">
          <q-btn @click="clickMore()" round flat dense icon="more_horiz" />
        </div>
      </div>
      <div>
        <q-item-section>
          <q-item-label class="q-pt-sm">Galon Le Minerale</q-item-label>
          <q-item-label caption>Rp. 17.000</q-item-label>
          <q-item-label caption style="color: #000000">Bandung</q-item-label>
          <q-item-label class="q-pt-sm" caption>Galon Bekas bang</q-item-label>
        </q-item-section>
        <div class="q-py-sm">
          <q-img style="border-radius: 5px" src="../assets/item-picture2.jpg" />
        </div>
        <div class="row">
          <div class="col-4">
            <div class="row">
              <q-btn
                class="full-width"
                :ripple="{ color: 'primary' }"
                style="border-radius: 15px"
                dense
                round
                flat
              >
                <q-avatar size="26px">
                  <img src="../assets/thumb-up-icon.svg" />
                </q-avatar>
                <div class="q-pl-xs">332</div>
              </q-btn>
            </div>
          </div>
          <div class="col-4">
            <div class="row">
              <q-btn
                class="full-width"
                :ripple="{ color: 'primary' }"
                style="border-radius: 15px"
                dense
                flat
              >
                <q-avatar size="26px">
                  <img src="../assets/comment-icon.svg" />
                </q-avatar>
                <div class="q-pl-xs">392</div>
              </q-btn>
            </div>
          </div>
          <div class="col-4">
            <div class="row">
              <q-btn
                class="full-width"
                :ripple="{ color: 'primary' }"
                style="border-radius: 15px"
                no-caps
                dense
                flat
              >
                <q-avatar size="26px">
                  <img src="../assets/whatsapp-icon.svg" />
                </q-avatar>
                <div class="q-pl-xs">Hubungi</div>
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-2">
          <q-avatar size="42px" rounded>
            <img src="../assets/random-profile-picture3.jpg" />
          </q-avatar>
        </div>
        <div class="col-8 self-center">
          <q-item-section>
            <q-item-label>Budi Sabudi</q-item-label>
            <q-item-label caption>9 jam lalu</q-item-label>
          </q-item-section>
        </div>
        <div class="col-2 text-center self-center">
          <q-btn @click="clickMore()" round flat dense icon="more_horiz" />
        </div>
      </div>
      <div>
        <q-item-section>
          <q-item-label class="q-pt-sm">Mobil Murah</q-item-label>
          <q-item-label caption>Rp. 17.000.000.000</q-item-label>
          <q-item-label caption style="color: #000000">Bandung</q-item-label>
          <q-item-label class="q-pt-sm" caption
            >Hanya mobil bekas yang sudah saya pake selama 2 hari</q-item-label
          >
        </q-item-section>
        <div class="q-py-sm">
          <q-img style="border-radius: 5px" src="../assets/item-picture3.jpg" />
        </div>
        <div class="row">
          <div class="col-4">
            <div class="row">
              <q-btn
                class="full-width"
                :ripple="{ color: 'primary' }"
                style="border-radius: 15px"
                dense
                round
                flat
              >
                <q-avatar size="26px">
                  <img src="../assets/thumb-up-icon.svg" />
                </q-avatar>
                <div class="q-pl-xs">3</div>
              </q-btn>
            </div>
          </div>
          <div class="col-4">
            <div class="row">
              <q-btn
                class="full-width"
                :ripple="{ color: 'primary' }"
                style="border-radius: 15px"
                dense
                flat
              >
                <q-avatar size="26px">
                  <img src="../assets/comment-icon.svg" />
                </q-avatar>
                <div class="q-pl-xs">1</div>
              </q-btn>
            </div>
          </div>
          <div class="col-4">
            <div class="row">
              <q-btn
                class="full-width"
                :ripple="{ color: 'primary' }"
                style="border-radius: 15px"
                no-caps
                dense
                flat
              >
                <q-avatar size="26px">
                  <img src="../assets/whatsapp-icon.svg" />
                </q-avatar>
                <div class="q-pl-xs">Hubungi</div>
              </q-btn>
            </div>
          </div>
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
