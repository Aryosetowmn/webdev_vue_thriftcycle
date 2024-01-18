<template>
  <q-page>
    <div class="row q-pa-md">
      <div class="col-2">
        <q-avatar rounded>
          <img src="../assets/profile-picture.svg" />
        </q-avatar>
      </div>
      <div class="col-10 self-center">
        <q-item-section>
          <q-item-label>Tatang Sutarman</q-item-label>
          <q-item-label caption>Free Tier</q-item-label>
        </q-item-section>
      </div>
      <div class="q-py-sm full-width">
        <q-input
          class="full-width"
          type="textarea"
          readonly
          outlined
          label="File"
        />
        <div class="q-pt-sm">Foto : 1/5</div>
        <div>
          <q-input
            style="color: #000"
            class="full-width q-py-sm"
            label="Judul Barang"
            outlined
            dense
          />
          <q-input
            style="color: #000"
            class="full-width q-py-sm"
            label="Judul Barang"
            outlined
            dense
          />
          <q-select
            class="full-width q-py-sm"
            outlined
            v-model="model"
            :options="options"
            label="Kondisi"
            dense
          />
          <q-select
            class="full-width q-py-sm"
            outlined
            v-model="model"
            :options="options"
            label="Kota"
            dense
          />
          <q-input
            style="color: #000"
            class="full-width q-py-sm"
            label="Deskripsi Barang"
            outlined
            dense
            type="textarea"
          />
        </div>
        <div class="row">
          <div class="col-2 text-center">
            <q-checkbox size="36px" v-model="val" />
          </div>
          <div class="col-10">
            Dengan ini anda setuju bahwa Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Tempora porro perferendis, asperiores quae quidem
            eligendi nisi aliquid tempore blanditiis
          </div>
        </div>
        <div class="row q-pt-lg">
          <div class="col text-center">
            <q-btn
              class="q-px-md"
              no-caps
              outline
              color="primary"
              label="Langganan"
              dense
            />
          </div>
          <div class="col text-center">
            <q-btn
              class="q-px-lg"
              no-caps
              flat
              text-color="white"
              style="background-color: #2e8b57"
              label="Posting "
              dense
              @click="this.$router.push('/item-post-detail')"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      val: ref(true),
    };
  },
};
</script>
