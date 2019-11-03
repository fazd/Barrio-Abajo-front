<template>
  <v-container id="container mx-auto">
    <div id="image-container mx-auto">
      <!--<v-img
        :src="img"
        class="grey lighten-2"
      >-->
        <div id="review" class="mx-auto">
        <div class="text-center green">{{review}}</div>
        <div class="mx-auto yellow">Descripción</div>
        </div>
        <div id="event-info" class="green rounded">
      <h1>{{title}}</h1>
      <h3>{{author}}</h3>
      <div class="text-center">
        <v-rating v-model="rating" disabled background-color="orange lighten-3" color="orange"></v-rating>
      </div>
      <div class="scroll">
        <v-card  v-for="(comment,index) in comments" :key="index" class="mx-auto comment">
          <v-card-title class="text">{{comment.user}}</v-card-title>
          <v-card-subtitle class="text">{{comment.date}}</v-card-subtitle>
          <v-card-text class="black--text text">{{comment.text}}</v-card-text>
        </v-card>
      </div>
      <div class="yellow"><h3>{{date.toDateString()}}</h3></div>
      <div class="red"><h3>{{place}}</h3></div>
    </div>
      <!--</v-img>-->
    </div>
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
      this.author = res.data.author;
      this.rating = res.data.rating;
      this.date = new Date(res.data.date);
      this.place = res.data.place;
      this.comments = res.data.comments;
      this.review = res.data.review;
    });
  }

};
</script>

<style scoped>
h{
  text-align: center;
}

#event-info {
  width: 40%;
  height: 70%;
  margin-left: 20px;
}
#image-container{
    width:100%;
    height:400px;
    background-image: url("Foto.jpg");
    background-size: 100%;

}
#review{
 position: relative;
 width: 30%;
 height: 40%;
 margin-right: 30%;   
}
.scroll{
    width: 100%;
    height: 350px;
    overflow-y: auto;
}
.green{
  text-align: center;
  background-color: rgb(0,153,51);
  opacity: 60%;
  color: white;
  
}
.yellow{
  background-color: yellow;
  color: green;
}
.red{
  background-color: red;
  color: white;
}
.rounded{
  border-top-left-radius: 20%;
}
.comment{
  width: 80%;
  margin-top: 2%;
}
.text{
  margin: 0%;
  text-align: justify;
}
</style>