<template>
  <v-app fluid fill-height>
    <div class="imgBack mt-n9 ml-n7 mr-n7">
      <div class="imgBack2 ">  
      </div>
      
      <div class="regCarnival">
        <h2>111 &#9; Dias</h2>
      </div>
      <v-sheet
      class="mx-auto sld"
      elevation="8"
      max-width="80%"
    >
      <v-slide-group
        v-model="model"
        class="pa-4 "
        active-class="success"
        show-arrows
      >
        <v-slide-item
          v-for="(link,i) in links"
          :key="link.url"
          v-slot:default="{ active, toggle }"
        >
          <v-card
            class="ma-4"
            height="300"
            width="300"
            @click="toggle"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
             <v-col >
               
              <v-img
                contain
                :src="require('./Img/FotosHome/img'+i+'.jpg')"
                :style="link.style"
              >
              </v-img>
              </v-col> 
              
            </v-row>        
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    </div>
    <div class="btngroup mx-auto">
      <v-btn fab dark large class="mr-5" :to="'About'">
        <v-img width="70" height="70" :src="require('./Img/Recurso12.png')"></v-img>
      </v-btn>
      <v-btn fab dark x-large class="mr-5" >
        <v-img class="mt-5" width="130" height="130" :src="require('./Img/Recurso11.png')"></v-img>
      </v-btn>
      <v-btn fab dark large class="mr-5" :to="'Login'">
        <v-img width="70" height="70" :src="require('./Img/Recurso10.png')"></v-img>
      </v-btn>
    </div>
  </v-app>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {
    
  },
  data: ()=>({
    model: null,
    links: []
  }),
  methods:{
    
  },
  created(){
    for(let i=1; i <=18; i++){
        if(i == 7 || i==12 || i == 19)
          this.links.push({url:'./Img/FotosHome/img'+i+'.jpg', style:'transform: rotate(90deg)'})
        else
          this.links.push({url:'./Img/FotosHome/img'+i+'.jpg', style:'transform: rotate(0deg)'})
    }
    console.log(this.links)
  }
}
</script>

<style>
  .imgBack{
    height:2000px;
    width:110%;
    background: url('Img/Recurso1.png');
    background-size:100%;
    padding-left: 3%;
  }
  .imgBack2{
    height:2000px;
    width:100%;
    background: url('Img/Recurso2.png');
    background-size:100%;
    margin-left: -23%;
    margin-top: -23%;
    padding-left: 3%;
    z-index:-1;
  }

  .sld{
    margin-top: 20%;
    margin-right:50%
    
  }
  .regCarnival{
    margin-top:-45%;
    margin-left:31%;
    font-size: 64px;
    padding-bottom: 0;
    color:white

  }
  .btngroup{
    align-content: center;
    margin-top:-6%;
  }
  .texto{
    margin-top:-50%;
  }


</style>