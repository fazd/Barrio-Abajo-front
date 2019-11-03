<template>
     <div>
    <v-app-bar
      color="#009933"
      class="set-top"
      fixed
      dark
    >
      <v-btn text dark rounded class="mr-4" :to="'Home'">
        <v-img width="150" :src="require('./transparent.png')"></v-img>
      </v-btn>
      <v-toolbar-title>BARRIOBAJEANDO</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text dark rounded >
        <a style="color:white;text-decoration:none" href="http://marimonda.000webhostapp.com/index.html" target="_blank">Juega con nosotros</a>
      </v-btn>

      <v-btn text dark rounded :to="'Cultura'">
        Cultura
      </v-btn>
      <v-btn text dark rounded>
        Tours
      </v-btn>
      <v-btn text dark rounded :to="'Eventos'">
        Eventos
      </v-btn>

      
    </v-app-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  a {
    color:inherit;
  }
</style>