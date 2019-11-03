<template>
  <div  class="relative">
    <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">
    <div id class="imbac">
      <!--<v-img
        :src="img"
        class="grey lighten-2"
      >-->
      <div id="review">
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
          <v-card v-for="(comment,index) in comments" :key="index" class="mx-auto comment">
            <div style="padding-left:3px;">
            <h1 class="text">{{comment.user}}</h1>
            <h5 class="text">{{comment.date}}</h5>
            <p class="black--text text">{{comment.text}}</p>
            </div>
          </v-card>
        </div>
        <div class="yellow">
          <h3>{{date.toDateString()}}</h3>
        </div>
        <div class="red">
          <h3>{{place}}</h3>
        </div>
      </div>
      <!--</v-img>-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    dialog:{
      type: Boolean,
      default: false,
    }
  },
  data: () => ({
    img: undefined,
    title: "Hackaton",
    author: "Juan Arrieta, Fabio Cuello, Andrea Rugeles, Carlos vergara, Fabio Zapata",
    rating: 3,
    review: "Proyecto desarrolado durante la hackaton",
    date: new Date(),
    place: "Uninorte",
    comments: [{
      user: "puccinic",
      date: new Date().toDateString(),
      text: "Soy un comentario"
    },
    {
      user: "puccinic",
      date: new Date().toDateString(),
      text: "Soy un comentario"
    },
    {
      user: "puccinic",
      date: new Date().toDateString(),
      text: "Soy un comentario"
    }]
  }),
  mounted() {
    /*this.axios.get("http://localhost:3000/Event").then(res => {
      console.log(this);
      this.img = res.data.img;
      this.title = res.data.title;
      this.author = res.data.author;
      this.rating = res.data.rating;
      this.date = new Date(res.data.date);
      this.place = res.data.place;
      this.comments = res.data.comments;
      this.review = res.data.review;
    });*/
    this.date = new Date()
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 1em;
  font-family: 'Quicksand', sans-serif;
}

#container{
  padding: 0;
  margin: 0;
}
#event-info {
  position: relative;
  left: 45%;
  top: 5%;
  width: 40%;
  height: 50%;
  margin-left: 20px;
}

#review {
  position: relative;
  width: 30%;
  height: 40%;
  left: 15%;
}
.scroll {
  width: 100%;
  height: 200px;
  overflow-y: auto;
}
.green {
  text-align: center;
  background-color: rgb(0, 153, 51);
  color: white;
}
.yellow {
  background-color: yellow;
  color: green;
}
.red {
  background-color: red;
  color: white;
}
.rounded {
  border-top-left-radius: 20%;
}
.comment {
  width: 80%;
  margin-top: 2%;
}
.text {
  margin: 0%;
  text-align: justify;
  font-family: 'Quicksand', sans-serif;
}

.imbac {
  background-image: url("Foto.jpg");
  background-size: 100%;
  width: 1500px;
  height:650px;
  margin-left: 0%;
  margin-right: 0;
  
}

.relative {
  position: relative;
  padding: 0;
}
</style>