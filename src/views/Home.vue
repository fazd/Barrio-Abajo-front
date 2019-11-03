<template>
  <v-app fluid fill-height>
    <div class="imgBack mt-n9 ml-n7 mr-n7">
      <div class="imgBack2 ">
        <div class="data">

        </div>

      </div>
      <v-sheet
      class="mx-auto sld"
      elevation="8"
      max-width="80%"
    >
      <v-slide-group
        v-model="model"
        class="pa-4 "
        active-class="success"
        show-arrows
      >
        <v-slide-item
          v-for="n in 15"
          :key="n"
          v-slot:default="{ active, toggle }"
        >
          <v-card
            :color="active ? undefined : 'grey lighten-1'"
            class="ma-4"
            height="300"
            width="300"
            @click="toggle"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  v-text="'mdi-close-circle-outline'"
                ></v-icon>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    </div>
    <Event name="Hackaton"></Event>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Event from '../components/Event'
export default {
  name: 'home',
  components: {
    Event
  },
  data: ()=>({
    model: null,
    img: 'efsadf',
    title: 'dasfs',
    author:'wfsdf',
    rating: 3,
    review: 'sasdfasf',
    date: new Date()  
  })
}
</script>

<style>
  .imgBack{
    height:2000px;
    width:110%;
    background: url('Img/Recurso1.png');
    background-size:100%;
    padding-left: 3%;
  }
  .imgBack2{
    height:2000px;
    width:100%;
    background: url('Img/Recurso2.png');
    background-size:100%;
    margin-left: -23%;
    margin-top: -23%;
    padding-left: 3%;
    z-index:-1;
  }

  .sld{
    margin-top: -20%;
    
  }


</style>