<template>
     <div>
    <v-app-bar
      color="#009933"
      class="set-top"
      fixed
      dark
    >
      <v-btn text dark fab class="mr-4" :to="'Home'">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-toolbar-title>BARRIOBAJEANDO</v-toolbar-title>

      <v-spacer></v-spacer>

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

</style>