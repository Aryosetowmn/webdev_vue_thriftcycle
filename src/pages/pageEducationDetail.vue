<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="q-pa-sm">
          <q-btn @click="this.$router.back" round flat icon="arrow_back" />
        </div>
        <div>
          <q-separator size="2px" />
        </div>
        <!-- content -->
        <div class="q-pa-md">
          <div style="color: #2e8b57; font-size: 18px">Thrift Cycle</div>
          <div style="font-weight: 600; font-size: 18px">
            Tips dan Trik Berbelanja Barang Bekas Berkualitas
          </div>
          <q-carousel
            v-model="slide"
            swipeable
            arrows
            navigation
            infinite
            control-color="grey-5"
            height="300px"
          >
            <q-carousel-slide :name="1">
              <q-img
                class="rounded-borders"
                src="../assets/education-picture1.jpg"
              />
            </q-carousel-slide>
            <q-carousel-slide :name="2">
              <q-img
                class="rounded-borders"
                src="../assets/education-picture2.jpg"
              /> </q-carousel-slide
            ><q-carousel-slide :name="3">
              <q-img
                class="rounded-borders"
                src="../assets/education-picture3.jpg"
              />
            </q-carousel-slide>
          </q-carousel>
          <div style="text-align: justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            adipisci assumenda tempora eius voluptatum rerum, deleniti, sequi
            magnam iste earum incidunt. Fuga molestias veniam similique soluta,
            dolor sunt vel aut!
            <br />
            <br />
            br Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            velit quod exercitationem odio nulla? A iure iste recusandae atque
            facere, commodi repellendus eveniet rem ex aliquid perferendis aut?
            Voluptatum, voluptates!
            <br />
            <br />
            br Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            velit quod exercitationem odio nulla? A iure iste recusandae atque
            facere, commodi repellendus eveniet rem ex aliquid perferendis aut?
            Voluptatum, voluptates!
            <br />
            <br />
            br Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            velit quod exercitationem odio nulla? A iure iste recusandae atque
            facere, commodi repellendus eveniet rem ex aliquid perferendis aut?
            Voluptatum, voluptates!
            <br />
            <br />
            br Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            velit quod exercitationem odio nulla? A iure iste recusandae atque
            facere, commodi repellendus eveniet rem ex aliquid perferendis aut?
            Voluptatum, voluptates!
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
      slide: ref(1),
    };
  },
};
</script>
