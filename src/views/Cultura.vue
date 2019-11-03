<template>
  <v-container  fill-height fluid class="imback">
    <v-card
    class="c1"
    max-width="344"
    outlined
    @click="toA"
    color="transparent"
    shaped
  >
    
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1"></v-list-item-title>
        <v-list-item-subtitle></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card> 
    <v-card
    class="c2"
    max-width="344"
    outlined
    color="transparent"
    @click="toB"
    shaped
  >
    
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1"></v-list-item-title>
        <v-list-item-subtitle></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card> 
    
    <v-card
    class="c3"
    max-width="344"
    outlined
    color="transparent"
    @click="toC"
    shaped
  >
    
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1"></v-list-item-title>
        <v-list-item-subtitle></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card> 
    <v-card
    class="c4"
    max-width="344"
    outlined
    color="transparent"
    @click="toD"
    shaped
  >
    
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1"></v-list-item-title>
        <v-list-item-subtitle></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card> 
    

  </v-container>
</template>

<script>

export default {
    components:{
        
    },
    data: ()=>({
        items: [
            {
                title:'Musica',
                subtitle:'La mejor musica de Barranquilla',
                src: './Img/loading -01.png'
            },
            {
                title:'Literatura',
                subtitle:'Conoce la literatura de Barrio abajo',
                src: './Img/loading -01.png'
            },
            {
                title:'Comida',
                subtitle:'Prueba las comidas tipicas del barrio',
                src: './Img/loading -01.png'
            },
            {
                title:'Fotografia',
                subtitle:'Conoce el barrio ',
                src: './Img/loading -01.png'
            },
        ]
    }),
    methods:{
        toA(){
            this.$router.push({ path: 'Musica' })
        },
        toB(){
            this.$router.push({ path: 'Literatura' })
        },
        toC(){
            this.$router.push({ path: 'Comida' })
        },
        toD(){
            this.$router.push({ path: 'Fotografia' })
        },
    }
}
</script>

<style>
    .imback{
        background-image:url('Img/Popup1.png');
        background-size: 100%;
        height: 700px;
    }

    .c1{
        margin-top:30%;
        height:220px;
        width:220px;
        margin-left:40px;
        
    }
    .c2{
        margin-top:25%;
        margin-left:110px;
        height:250px;
        width:250px;
    }
    .c3{
        margin-top:18%;
        margin-left:110px;
        height:200px;
        width:200px;
    }
    .c4{
        margin-top:10%;
        margin-left:80px;
        height:270px;
        width:270px;
    }

</style>