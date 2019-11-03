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
            @click="dialog=true"
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
            <v-dialog
                v-model="dialog"
                max-width="1500"
                max-height="650"
            >
                <v-card>
                    <Event :name="card.title" :role="'Cultura'" :dialog="dialog" ></Event>
                    <v-btn @click="dialog=false">Cerrar</v-btn>
                </v-card>
            </v-dialog>
            
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
            @click="dialog2=true"
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
            <v-dialog
                v-model="dialog2"
                max-width="1500"
                max-height="650"
            >
                <v-card>
                    <Event :name="card.title" :role="'Cultura'" :dialog="dialog2" ></Event>
                    <v-btn @click="dialog2=false">Cerrar</v-btn>
                </v-card>
            </v-dialog>
            
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
            @click="dialog3=true"
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
            <v-dialog
                v-model="dialog3"
                max-width="1500"
                max-height="650"
            >
                <v-card class="card-width">
                    <Event :name="card.title" :role="'Cultura'" :dialog="dialog3" ></Event>
                    <div class="green"><v-btn @click="dialog3=false">Cerrar</v-btn></div>
                </v-card>
            </v-dialog>
        </v-card>
    </div>
    
  </v-container>
</template>

<script>
import Event from '../components/Event'
export default {
    components:{
        Event
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
        ],
        dialog:false,
        dialog2:false,
        dialog3:false
    })
}
</script>

<style scoped>
    .green{
       background-color: rgb(0, 153, 51);
    }
    .card-width{
        width: 1500px;
    }
</style>