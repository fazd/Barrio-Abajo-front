<template>
  <v-container id="container">
    <div id="image-container">
      <v-img
        :src="img"
        class="grey lighten-2 mx-auto"
        @click="ff"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <v-divider></v-divider>
      <div id="review">
        <div class="justify-center mx-auto">Descripción</div>
        <div class="black--text text-center">{{review}}</div>
      </div>
    </div>

    <v-card id="event-info">
      <v-card-title class="justify-center">{{title}}</v-card-title>
      <v-card-subtitle class="justify-center">Author: {{author}}</v-card-subtitle>
      <v-card-subtitle class="justify-center">Date: {{date.toDateString()}}</v-card-subtitle>
      <v-card-subtitle class="justify-center">Place: {{place}}</v-card-subtitle>
      <div class="text-center">
        <v-rating v-model="rating" disabled background-color="orange lighten-3" color="orange"></v-rating>
      </div>
      <v-divider></v-divider>
      <div class="scroll">
        <v-card  v-for="(comment,index) in comments" :key="index" class="mx-auto">
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
    name:{
      type: String,
      required: true
    },
    role:{
      type: String,
      required:true
    }
  },
  data: ()=>({
    img: undefined,
    title: undefined,
    author:undefined,
    rating: undefined,
    review: undefined,
    date: new Date(),
    place: undefined,
    comments: undefined  
  }),
  mounted(){
    this.axios.get('http://localhost:3000/Event')
    .then((res)=>{
      console.log(this);
      this.img = res.data.img;
      this.title = res.data.title;
      this.author = res.data.title;
      this.rating = res.data.rating;
      this.date = new Date(res.data.date);
      this.place = res.data.place;
      this.comments = res.data.comments;
    });
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
#image-container{
    width:100%;
    height:400px;
}
#review{
 position: absolute;
 width: 30%;
 height: 40%;
 left: 15%;   
}
.scroll{
    width: 100%;
    height: 400px;
    overflow-y: auto;
}
</style>