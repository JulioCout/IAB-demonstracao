<template>
  <div class="user">
    <div class="photo">
      <img src="static/img/faces/face-2.jpg" alt="user avatar"/>
    </div>
    <div class="info">
      <a data-toggle="collapse" :aria-expanded="!isClosed" @click="toggleMenu" href="#">
         <span>
           Bernardo G.
           <b class="caret"></b>
        </span>
      </a>
      <div class="clearfix"></div>
      <div>
        <collapse-transition>
          <ul class="nav nav-menu" v-show="!isClosed">
            <li>
              <RouterLink to="/login">
                <a href="#">
                  <span class="sidebar-mini-icon">X</span>
                  <span class="sidebar-normal">Sair</span>
                </a>
            </RouterLink>
            </li>
          </ul>
        </collapse-transition>
      </div>
    </div>
  </div>
</template>
<script>
  import { CollapseTransition } from 'vue2-transitions'

  export default {
    components: {
      CollapseTransition
    },
    data() {
      return {
        isClosed: true
      }
    },
    methods: {
      toggleMenu() {
        this.isClosed = !this.isClosed
      }
    }
  }
</script>
<style scoped>
  .nav.nav-menu {
    margin-top: 0;
  }
</style>
