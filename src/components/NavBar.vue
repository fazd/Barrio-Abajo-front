<template>
     <div>
    <v-app-bar
      color="#009933"
      class="set-top"
      fixed
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text dark rounded :to="'Cultura'">
        Cultura
      </v-btn>
      <v-btn text dark rounded>
        Tours
      </v-btn>
      <v-btn text dark rounded>
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