<template>
  <div class="login-page">
    <app-navbar></app-navbar>
    <div class="wrapper wrapper-full-page">
      <div class="full-page login-page section-image">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
          <div class="container">
            <div class="col-lg-4 col-md-6 ml-auto mr-auto">
              <form @submit.prevent="login" ref="loginForm">
                <card type="login">
                  <h3 slot="header" class="header text-center">Login</h3>
                  <p v-if="senhaIncorreta" class="wrongPassAlert">Usuário ou Senha incorreto</p>

                  <fg-input v-model="form.username" addon-left-icon="nc-icon nc-single-02"
                            placeholder="Usuário"></fg-input>

                  <fg-input v-model="form.password" addon-left-icon="nc-icon nc-key-25" placeholder="Senha"
                            type="password"></fg-input>

                  <br>

                  <p-checkbox>
                    Mantenha-me conectado
                  </p-checkbox>

                  <p-button native-type="submit" slot="footer" type="success" round block class="mb-3">Entrar</p-button>
                  
                  <a href="#" class="control-label links" @click="showSwal('input-field')">Esqueci a senha</a>

                  
                </card>
              </form>
            </div>
          </div>
        </div>
        <app-footer></app-footer>
        <div class="full-page-background" style="background-image: url(static/img/background/background-4.jpg) "></div>
      </div>
    </div>
  </div>
</template>
<script>
  
  import Swal from 'sweetalert2';
  import { Card, Checkbox, Button} from 'src/components/UIComponents';
  import AppNavbar from './Layout/AppNavbar'
  import AppFooter from './Layout/AppFooter'

  export default {
    components: {
      Card,
      AppNavbar,
      AppFooter,
      [Checkbox.name]: Checkbox,
      [Button.name]: Button,
    },
    
    methods: {
      toggleNavbar() {
        document.body.classList.toggle('nav-open')
      },
      closeMenu() {
        document.body.classList.remove('nav-open')
        document.body.classList.remove('off-canvas-sidebar')
      },
      login() {
        if(this.form.username == "bernardo" && this.form.password == "bernardoiab") {
          alert("passou")
        }
        else {
          this.form.username = ''
          this.form.password = ''
          this.senhaIncorreta = true
        }
      },
      showSwal() {
        const swalWithBootstrapButtons9 = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger",
          },
          buttonsStyling: false,
        });
        swalWithBootstrapButtons9
          .fire({
            title: "Coloque o e-mail cadastrado na plataforma",
            html: `<div class="form-group">
            <input id="input-field" type="text" class="form-control" />
            </div>`,
            showCancelButton: true,
          })
          .then(() => {
            const swalWithBootstrapButtons10 = Swal.mixin({
              customClass: {
                confirmButton: "btn btn-success",
              },
              buttonsStyling: false,
            });
            swalWithBootstrapButtons10.fire({
              html:
                "Redefinição de senha enviada para: <strong>" +
                document.getElementById("input-field").value +
                "</strong>",
            });
          });
        }
    },

    data() {
      return {
        senhaIncorreta: false,
        form: {
          username: '',
          password: ''
        }
      }
    },
    beforeDestroy() {
      this.closeMenu()
    },
  }
</script>
<style>
.wrongPassAlert {
  color: red;
  margin-left: auto;
  margin-right: auto;
}
</style>
