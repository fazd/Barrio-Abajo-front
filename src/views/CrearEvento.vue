<template>
  <v-container fill-height fluid>
      <v-card class="mx-auto mt-12" width="50%">
            <v-toolbar color="#009933" dark>
                <v-toolbar-title>Crear evento</v-toolbar-title>
            </v-toolbar>
            <v-form>
                <v-text-field 
                    label="Nombre del evento"
                    v-model.trim="nameInpt"
                    prepend-icon="mdi-account-circle"
                    class="mx-5"
                >
        
                </v-text-field>
                
                <v-textarea 
                    label="Descripcion del evento"
                    v-model.trim="areaInpt"
                    prepend-icon="mdi-account-circle"
                    class="mx-5"
                    
                >
                </v-textarea>
                <v-file-input label="Imagen del evento"
                    class="mx-5"
                ></v-file-input>
            </v-form>
            <v-card-actions>
                <v-btn class="ml-5" color="info" :to="'Home'">Atrás</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="success" @click="validAll">Registar evento</v-btn>
            </v-card-actions>
      </v-card>
  </v-container>
</template>

<script>
export default {
    data:  ()=>({
        nameInpt:'',
        areaInpt:'',
        imgInpt:Object
    }),
    methods:{
        validAll(){
            let v = {
                name: this.nameInpt,
                descr: this.areaInpt,
                img: this.imgInpt
            }
            console.log(v);
            this.$router.push({path: 'Home'});
        }
    }
}
</script>

<style>

</style>