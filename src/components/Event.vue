<template>
  <v-container id="container">
    <div id="image-container">
      <v-img
        :src="img"
        lazy-src="https://picsum.photos/id/11/100/60"
        class="grey lighten-2 mx-auto"
        @click="funciona"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <v-divider></v-divider>
      <v-card id="review">
        <v-card-title class="justify-center mx-auto" id="review">Descripción</v-card-title>
        <v-card-text class="black--text text-center"></v-card-text>
      </v-card>
    </div>

    <v-card id="event-info">
      <v-card-title class="justify-center">{{title}}</v-card-title>
      <v-card-subtitle class="justify-center">Author: {{author}}</v-card-subtitle>
      <v-card-subtitle class="justify-center">Date: {{date.toDateString()}}</v-card-subtitle>
      <v-card-subtitle class="justify-center">Place: {{place}}</v-card-subtitle>
      <div class="text-center">
        <v-rating v-model="rating" background-color="orange lighten-3" color="orange"></v-rating>
      </div>
      <v-divider></v-divider>
      <div class="scroll">
        <v-card v-for="(comment,index) in comments" :key="index" class="mx-auto">
          <v-card-title>{{comment.user}}</v-card-title>
          <v-card-subtitle>{{comment.date}}</v-card-subtitle>
          <v-card-text class="black--text">{{comment.text}}</v-card-text>
          <v-divider></v-divider>
        </v-card>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data: () => ({
    img: "",
    review: 2,
    title: 3,
    author: 4,
    rating: 5,
    date: new Date(),
    place: 6,
    comments: 7
  }),
   methods: {
    funciona: () => {
        this.axios.get("http://localhost:3000/Event").then(response => {
        console.log(response.data);
        console.log("funciona");
        console.log(this);
      });
    }
  }
};
</script>

<style scoped>
#container {
  display: flex;
}

#event-info {
  width: 100%;
  margin-left: 20px;
}
#image-container {
  width: 100%;
  height: 400px;
}
.scroll {
  width: 100%;
  height: 400px;
  overflow-y: auto;
}
</style>