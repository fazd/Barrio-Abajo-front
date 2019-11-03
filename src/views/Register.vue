<template>
   <v-container  fill-height class="mx-auto my-auto imba">
    <v-stepper v-model="e1" class="mx-auto">
      <v-stepper-header >
        <v-stepper-step :complete="e1 > 1" step="1">Datos de la cuenta</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">Datos personales</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Personalización</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12" >
            <v-toolbar color="#009933" dark>
              <v-toolbar-title>Datos de la cuenta</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="mdi-account-circle"
                  label="Nombre Completo"
                  v-model.trim="nameInpt"
                  v-on:input="validName"
                  :error="!enableName"
                ></v-text-field>

                <v-text-field
                  prepend-icon="mdi-account-circle"
                  label="E-mail"
                  v-model.trim="emailInpt"
                  v-on:input="validEmail"
                  :error="!enableEmail"
                ></v-text-field>
                <v-text-field
                  :type=" showPassword ? 'text' : 'password'"
                  label="Contraseña"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword= !showPassword"
                  v-model.trim="passwordInpt"
                  v-on:input="validPassword"
                  :error="!enablePassword"
                ></v-text-field>
                <v-text-field
                  :type=" showPassword2 ? 'text' : 'password'"
                  label="Repetir Contraseña"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword2= !showPassword2"
                  v-model.trim="passwordInpt2"
                  v-on:input="validPassword2"
                  :error="!enablePassword2"
                ></v-text-field>
              </v-form>
            </v-card-text>
          </v-card>

          <v-btn color="#009933" @click="valid1">Continue</v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12" >
            <v-toolbar color="#009933" dark>
              <v-toolbar-title>Datos personales </v-toolbar-title>
            </v-toolbar>
            
            <v-btn class="ml-3 mt-5 mr-5" @click="sexInpt=true" fab :color="sexInpt ? 'blue' :'blue lighten-5'  " dark>
                <v-icon>mdi-gender-male</v-icon>
            </v-btn>
            <v-btn class="mt-5" @click="sexInpt=false" :color="!sexInpt ? 'pink' : 'pink lighten-5'" fab dark>
                <v-icon>mdi-gender-male</v-icon>
            </v-btn>

            <v-menu  
              
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="dateInpt"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="dateInpt"
                  class="mt-5"
                  label="Fecha de nacimiento"
                  prepend-icon="mdi-calendar-range"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="dateInpt" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="#009933" @click="$refs.menu.save(dateInpt)">OK</v-btn>
              </v-date-picker>
            </v-menu>
          </v-card>

          <v-btn color="#009933" @click="e1 = 3">Continue</v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12" >
                      </v-card>

          <v-btn color="primary" @click="validAll">Registrar</v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    e1:0,
    nameInpt: "",
    emailInpt: "",
    passwordInpt: "",
    passwordInpt2: "",
    selectionInpt: "Hombre",
    pickerInpt: "",
    dateInpt: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    sexInpt:true,
    showPassword: false,
    showPassword2: false,
    enableName: true,
    enableEmail: true,
    enablePassword: true,
    enablePassword2: true,
    role: 'User',
    cellPhone: '',
    bankInfo: '',
    institution:''
  }),
  methods: {
    hasSpecial(str) {
      return str.match(/^[a-zA-Z ]+$/) != null;
    },
    validName() {
      this.enableName =
        this.hasSpecial(this.nameInpt) && this.nameInpt.trim().length > 0;
    },
    validEmail() {
      this.enableEmail = this.emailInpt.match(/\S+@\S+\.\S+/) != null;
    },
    validPassword() {
      this.enablePassword = this.passwordInpt.length > 2;
    },
    validPassword2() {
      this.enablePassword2 = this.passwordInpt == this.passwordInpt2;
    },
    valid1(){
      this.validName();
      this.validEmail();
      this.validPassword();
      this.validPassword2();
      if(this.enableName && this.enableEmail && this.enablePassword && this.enablePassword2){
        this.e1 = "2"
      }
      else{
        alert("Complete los campos")
      }
    },
    validAll(){
      var g 
      if(this.sexInpt){
        g = 'Hombre'
      }
      else{
        g = 'Mujer'
      }
      var text = {
        name: this.nameInpt,
        email: this.emailInpt,
        password: this.passwordInpt,
        dateBorn: this.dateInpt,
        phoneNumber: this.cellPhone,
        bankInfo: this.bankInfo,
        institution: this.institution,
        genre: g
      }
      //var obj = JSON.stringify(text);
      console.log(text)
      this.axios.post('http://localhost:3001/register',text)
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      });
    }
  }
};
</script>

<style>
  .imba{
        background-image: url('login.jpg');
        background-size: 100%;
        position: relative;
        max-width: 2500px;
        
    }


</style>