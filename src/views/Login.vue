<template>
  <v-container fill-height>
      <v-card class="mx-auto" width="500">
        <v-toolbar color="primary" dark>
            <v-toolbar-title>Inicio de sesion</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <v-form>
                <v-text-field 
                    prepend-icon="mdi-account-circle" 
                    label="E-mail" 
                    v-model.trim="emailInpt"
                    v-on:input="validEmail"
                    :error = "!enableEmail"
                    >

                </v-text-field>
                
                <v-text-field 
                    :type= " showPassword ? 'text' : 'password'" 
                    label="Contraseña"
                    prepend-icon = "mdi-lock"
                    :append-icon = "showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword= !showPassword"
                    v-model.trim="passwordInpt"
                    :error ="!enablePassword"

                >

                </v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn color="success">Registrarse</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="isValid">Login</v-btn>
        </v-card-actions>
      </v-card>

  </v-container>
</template>

<script>
export default {
    data: ()=>({
        emailInpt: '',
        passwordInpt: '',
        showPassword: false,
        enableEmail: true,
        enablePassword:true
    }),
    methods:{
        validEmail(){
            this.enableEmail = this.emailInpt.match(/\S+@\S+\.\S+/) != null
        },
        isValid(){
            var op = this.emailInpt.match(/\S+@\S+\.\S+/) != null && this.passwordInpt.length > 2
            if(op){
                var text = JSON.stringify({
                "email":this.emailInpt,
                "password":this.passwordInpt
                })
                console.log(text)
                this.enableEmail = true
                this.enablePassword = true
                this.axios.get("localhost:3001/login").then((response) => {
                console.log(response.data)
                })  
                
            }
            else{
                alert("Complete los campos")
                this.enableEmail = this.emailInpt.match(/\S+@\S+\.\S+/) != null
                this.enablePassword = this.passwordInpt.length > 2
            
            }
            console.log(this); 
        }
    }
}
</script>

<style>

</style>