<template>
  <q-page>
    <div class="q-px-md">
      <div @click="this.$router.push('/education-detail')" class="q-py-sm">
        <q-img
          style="border-radius: 5px"
          src="../assets/education-picture1.jpg"
        />
      </div>
      <div
        @click="this.$router.push('/education-detail')"
        class="text-bold"
        style="font-size: 16px"
      >
        Tips dan Trik Berbelanja Barang Bekas Berkualitas
      </div>
      <div class="row q-py-sm">
        <div class="col-2">
          <q-avatar size="42px" rounded>
            <img src="../assets/random-profile-picture4.svg" />
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
          <q-btn
            :ripple="{ color: 'primary' }"
            style="border-radius: 15px"
            dense
            round
            flat
          >
            <q-avatar size="26px">
              <img src="../assets/thumb-up-icon.svg" />
            </q-avatar>
          </q-btn>
        </div>
      </div>
      <div class="q-py-md">
        <q-separator size="2px" />
      </div>
    </div>
    <div class="q-px-md">
      <div class="row">
        <div class="col-6 q-py-sm">
          <div
            @click="this.$router.push('/education-detail')"
            class="text-bold"
            style="font-size: 16px"
          >
            Inspirasi design dengan sentuhan dari barang bekas
          </div>
        </div>
        <div
          @click="this.$router.push('/education-detail')"
          class="col-6 q-py-sm"
        >
          <q-img
            style="border-radius: 5px"
            src="../assets/education-picture3.jpg"
          />
        </div>
      </div>
      <div class="row q-py-sm">
        <div class="col-2">
          <q-avatar size="42px" rounded>
            <img src="../assets/random-profile-picture6.svg" />
          </q-avatar>
        </div>
        <div class="col-8 self-center">
          <div class="row">
            <div class="col-4">Subaedah</div>
            <div
              class="col-8 text-grey q-px-sm self-center"
              style="font-size: 12px"
            >
              7 Januari 2024
            </div>
          </div>
        </div>
        <div class="col-2 text-center self-center">
          <q-btn
            :ripple="{ color: 'primary' }"
            style="border-radius: 15px"
            dense
            round
            flat
          >
            <q-avatar size="26px">
              <img src="../assets/thumb-up-icon.svg" />
            </q-avatar>
          </q-btn>
        </div>
      </div>
      <div class="q-py-md">
        <q-separator size="2px" />
      </div>
    </div>
    <div class="q-px-md">
      <div @click="this.$router.push('/education-detail')" class="q-py-sm">
        <q-img
          style="border-radius: 5px"
          src="../assets/education-picture2.jpg"
        />
      </div>
      <div
        @click="this.$router.push('/education-detail')"
        class="text-bold"
        style="font-size: 16px"
      >
        DIY dengan barang bekas
      </div>
      <div class="row q-py-sm">
        <div class="col-2">
          <q-avatar size="42px" rounded>
            <img src="../assets/random-profile-picture5.svg" />
          </q-avatar>
        </div>
        <div class="col-8 self-center">
          <div class="row">
            <div class="col-4">Annisa Putri</div>
            <div
              class="col-8 text-grey q-px-sm self-center"
              style="font-size: 12px"
            >
              6 Januari 2024
            </div>
          </div>
        </div>
        <div class="col-2 text-center self-center">
          <q-btn
            :ripple="{ color: 'primary' }"
            style="border-radius: 15px"
            dense
            round
            flat
          >
            <q-avatar size="26px">
              <img src="../assets/thumb-up-icon.svg" />
            </q-avatar>
          </q-btn>
        </div>
      </div>
      <div class="q-py-md">
        <q-separator size="2px" />
      </div>
    </div>
  </q-page>
</template>
