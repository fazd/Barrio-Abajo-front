<template>
  <v-app>
    <navbar/>
    <router-view></router-view>
    <Footer/>
  </v-app>
</template>

<script>
import navbar from './components/NavBar'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    navbar,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>
