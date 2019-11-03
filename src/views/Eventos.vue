<template>
  <v-container fill-height fluid>
    <div class="d-inline-block  mt-12 text-center" >
        <h1>Cultura</h1>
        <v-card
            v-for="card in cards"
            :key="card.title"
            class="mx-auto mt-5 mr-5"
            max-width="400"
            max-height="400"
            
        >
            <v-img
            class="white--text align-end"
            height="200px"
            :src="card.route"
            >
            <v-card-title>{{card.title}}</v-card-title>
            <v-card-text class="text--primary">
            <div style="color:white">{{card.subtitle}}</div>
            </v-card-text>
            </v-img>

            
        </v-card>
    </div>
    <div class="d-inline-block text-center mx-auto mt-12">
        <h1>Cultura</h1>
        <v-card
            v-for="card in cards"
            :key="card.title"
            class="mx-auto mt-5 mr-5"
            max-width="400"
            max-height="400"
            
        >
            <v-img
            class="white--text align-end"
            height="200px"
            :src="card.route"
            >
            <v-card-title center>{{card.title}}</v-card-title>
            <v-card-text class="text--primary">
        
            <div style="color:white">{{card.subtitle}}</div>
            </v-card-text>
            </v-img>

            
        </v-card>
    </div>
    <div class="d-inline-block  text-center mt-12">
        <h1>Cultura</h1>
        <v-card
            v-for="card in cards"
            :key="card.title"
            class="mx-auto mt-5 mr-5"
            max-width="400"
            max-height="400"
            
        >
            <v-img
            class="white--text align-end"
            height="200px"
            :src="card.route"
            >
            <v-card-title>{{card.title}}</v-card-title>
            <v-card-text class="text--primary">
            

            <div style="color:white">{{card.subtitle}}</div>
            </v-card-text>
            </v-img>

            
        </v-card>
    </div>
    
  </v-container>
</template>

<script>

export default {
    components:{
        
    },
    data: ()=>({
        cards: [
            {
                title:'Musica',
                subtitle:'La mejor musica de Barranquilla',
                route: require('./Img/loading02.png')
            },
            {
                title:'Literatura',
                subtitle:'Conoce la literatura de Barrio abajo',
                route:require('./Img/loading01.png')
            },
            {
                title:'Comida',
                subtitle:'Prueba las comidas tipicas del barrio',
                route: require('./Img/loading05.png')
            },
            {
                title:'Fotografia',
                subtitle:'Conoce el barrio ',
                route: require('./Img/loading03.png')
            },
        ]
    })
}
</script>

<style>
    
</style>