<template>
  <q-dialog position="bottom" v-model="dialogDisable" ref="dialog">
    <q-card class="bg-white" style="border-radius: 16px 16px 0px 0px">
      <div class="q-pt-sm flex flex-center">
        <q-separator size="5px" style="width: 100px; border-radius: 10px" />
      </div>
      <div class="row q-pt-lg q-pb-md">
        <div class="col text-center">
          <q-btn
            :ripple="{ color: 'primary' }"
            size="18px"
            outline
            color="black"
            round
            icon="bookmark"
          />
          <div>Simpan</div>
        </div>
        <div class="col text-center">
          <q-btn
            :ripple="{ color: 'primary' }"
            size="18px"
            outline
            color="black"
            round
            icon="edit"
          />
          <div>Edit</div>
        </div>
        <div class="col text-center">
          <q-btn
            :ripple="{ color: 'primary' }"
            size="18px"
            outline
            color="black"
            round
            icon="delete"
          />
          <div>Hapus</div>
        </div>
      </div>
      <div class="q-pb-xl q-px-lg">
        <q-separator size="2px" style="border-radius: 10px" />
        <div class="q-pt-lg">Apakah barang sudah terjual?</div>
        <div class="row">
          <div class="col-2 self-center">
            <q-avatar icon="shopping_cart_checkout" />
          </div>
          <div class="col-10">
            <q-select
              class="full-width q-py-sm"
              outlined
              v-model="model"
              :options="options"
              label="Status Barang"
              dense
            />
          </div>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>
<script>
import { ref } from "vue";

export default {
  data() {
    return {
      dialogDisable: true,
      model: ref("Belum Terjual"),
      options: ["Belum Terjual", "Sudah Terjual"],
    };
  },
};
</script>
