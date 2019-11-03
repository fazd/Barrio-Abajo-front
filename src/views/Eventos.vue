<template>
  <v-container fill-height fluid>
    <div class="d-block mt-12 text-center" >
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
            </v-img>

            
            <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>
        </v-card>
    </div>
    <div class="d-block text-center mx-auto mt-12">
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
            </v-img>

            
            <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>
        </v-card>
    </div>
    <div class="d-block text-center mt-12">
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
            </v-img>

            
            <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>
        </v-card>
    </div>
    
  </v-container>
</template>

<script>

export default {
    components:{
        
    },
    data: ()=>({
        
    })
}
</script>

<style>
    
</style>