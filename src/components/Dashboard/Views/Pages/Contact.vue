<template>
  <div class="login-page">
    <app-navbar></app-navbar>
    <div class="wrapper wrapper-full-page">
      <div class="full-page login-page section-image">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
          <div class="container mt-auto">
            <div class="col-md-7 col-md-offset-3 ml-auto mr-auto">
              <p-button @click="$router.back()" >
                  <i slot="label" class="nc-icon nc-minimal-left"></i>
                  Voltar
              </p-button>
              <form @submit.prevent="contact">
                <card type="contact">
                  <h3 slot="header" class="header text-center">Formulário de Contato</h3>

                  <fg-input v-model="form.username" addon-left-icon="nc-icon nc-single-02"
                    placeholder="Nome"></fg-input>

                  <fg-input v-model="form.email" addon-left-icon="nc-icon nc-email-85" 
                    placeholder="E-mail"></fg-input>

                  <fg-input v-model="form.subject" addon-left-icon="nc-icon nc-bookmark-2" placeholder="Assunto"
                    type="subject"></fg-input>

                  <textarea class="form-control" placeholder="    Mensagem..." rows="3" v-model="textarea"></textarea>

                  <br>

                  <p-button native-type="submit" slot="footer" type="info" round block class="mb-3">Enviar</p-button>
                  
                </card>
              </form>
            </div>
          </div>
        </div>
        <app-footer></app-footer>
        <div class="full-page-background" style="background-image: url(static/img/background/background-3.jpg) "></div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Card, Checkbox, Button } from 'src/components/UIComponents';
  import AppNavbar from './Layout/AppNavbar'
  import AppFooter from './Layout/AppFooter'

  export default {
    components: {
      Card,
      AppNavbar,
      AppFooter,
      [Checkbox.name]: Checkbox,
      [Button.name]: Button
    },
    
    methods: {
      toggleNavbar() {
        document.body.classList.toggle('nav-open')
      },
      closeMenu() {
        document.body.classList.remove('nav-open')
        document.body.classList.remove('off-canvas-sidebar')
      },
      contact() {
        // handle contact here
      }
    },

    data() {
      return {
        form: {
          username: '',
          email: '',
          subject: '',
          textarea: ''
        }
      }
    },
    beforeDestroy() {
      this.closeMenu()
    }
  }
</script>
<style>
</style>