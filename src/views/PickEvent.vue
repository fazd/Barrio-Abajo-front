<template>
  <v-container class="mx-auto" fill-height>
           <Event name="Hackaton" @click="ff"></Event> 

  </v-container>
</template>

<script>
import Event from '../components/Event.vue'
/*import Recipe from '../components/Recipe.vue'
import Media from '../components/Media.vue'*/
export default {
  name: "pick-event",
  components: {
      Event
  },
  data: () => {
    return {
      dialog: false
    };
  },
  methods:{
      ff: function (){
          console.log(this);
      }
  }
};
</script>

<style>
</style>