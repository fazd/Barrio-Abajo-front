<template>
  <v-footer
    color="#009933"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="#009933 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} <br> <strong>Juan Arrieta-Fabio Cuello-<br>Andrea Rugeles-Carlos Vergara-<br>Fabio Zapata</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: ()=>({
    links: [
      
    ]
  })
}
</script>

<style>

</style>