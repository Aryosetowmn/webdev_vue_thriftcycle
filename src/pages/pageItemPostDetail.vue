<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="q-pa-md">
          <q-btn @click="this.$router.back" round flat icon="arrow_back" />
        </div>
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
            <q-uploader
              class="full-width"
              url="http://localhost:4444/upload"
              label="Photo upload"
              multiple
              max-files="5"
              @rejected="onRejected()"
            />
            <div class="q-pt-sm">Foto : 1/5</div>
            <div>
              <q-input
                style="color: #000"
                class="full-width q-py-sm"
                label="Judul Barang"
                v-model="itemTitle"
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
                v-model="itemCity"
                :options="optionsCity"
                label="Kota"
                dense
              />
              <q-input
                style="color: #000"
                class="full-width q-py-sm"
                label="Deskripsi Barang"
                outlined
                dense
                v-model="itemDescription"
                type="textarea"
              />
            </div>
            <div class="row">
              <div class="col-2 text-center">
                <q-checkbox size="36px" v-model="val" />
              </div>
              <div class="col-10">
                Dengan ini anda setuju bahwa Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Tempora porro perferendis,
                asperiores quae quidem eligendi nisi aliquid tempore blanditiis
              </div>
            </div>
            <div class="row q-pt-lg">
              <div class="col text-center">
                <q-btn
                  class="q-px-lg"
                  no-caps
                  outline
                  color="primary"
                  label="Batal"
                  dense
                />
              </div>
              <div class="col text-center">
                <q-btn
                  class="q-px-md"
                  no-caps
                  flat
                  text-color="white"
                  style="background-color: #2e8b57"
                  label="Simpan"
                  dense
                  @click="onUpload()"
                />
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      val: ref(true),
      itemTitle: ref("Botol minum bekas 600ml"),
      itemDescription: ref(
        "Lorem ipsum dolor sit amet, consectetur adipsicing elit. Tempora porro perrferendis, asperiores quae quidem eligendi nisi aliquid tempore blanditiis voluptatum nam neque deserutn, veniam odit quos cupiditate illoincidunt."
      ),
      itemCity: ref("Bandung"),
      model: ref("Bekas seperti baru"),
      options: ["Bekas seperti baru", "Bekas cukup baik", "Bekas baik"],
      optionsCity: ["Bandung", "Semarang"],
    };
  },
  methods: {
    onRejected() {
      this.$q.notify({
        type: "negative",
        position: "top",
        message: "fill in the data correctly",
      });
    },
    onUpload() {
      this.$q.notify({
        type: "positive",
        position: "bottom",
        message: "upload success",
        color: "primary",
      });
      this.$router.push("/dashboard");
    },
  },
};
</script>
