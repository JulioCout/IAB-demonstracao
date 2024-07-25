<template>
  <card>
    <template slot="header">
      <h4 class="card-title">Próximos Eventos</h4>
      <p class="category">Próximos eventos agendados</p>
    </template>
    <div class="table-full-width table-tasks">
      <table class="table">
        <tbody>
        <task v-for="(task, index) in tasks"
              :key="task.title"
              :task="task"
              :index="index"
              @on-edit="handleTaskEdit"
              @on-delete="handleTaskDelete">

        </task>
        </tbody>
      </table>
    </div>
    <template slot="footer">
      <hr>
      <div class="stats">
        <i class="fa fa-history"></i> Atualizado 3 minutos atrás
      </div>
    </template>
  </card>
</template>
<script>
  import Task from './Task.vue'
  import { Card } from 'src/components/UIComponents'

  export default {
    components: {
      Task,
      Card
    },
    data() {
      return {
        tasks: [
          {
            done: false,
            img: 'static/img/faces/erik-lucatero-2.jpg',
            title: 'Coquetel no dia 02/08/24'
          },
          {
            done: false,
            img: 'static/img/faces/kaci-baum-2.jpg',
            title: 'Evento: Lançamento do Livro X no dia 05/08/2024'
          },
          {
            done: false,
            img: 'static/img/faces/ayo-ogunseinde-2.jpg',
            title: 'Sessão Ordinária no dia 07/08/2024'
          },
          {
            done: false,
            img: 'static/img/faces/joe-gardner-2.jpg',
            title: 'Reunião de comissão híbrida no dia 08/08/2024'
          }
        ]
      }
    },
    methods: {
      handleTaskEdit(index) {
        alert(`You want to edit task: ${JSON.stringify(this.tasks[index])}`)
      },
      handleTaskDelete(index) {
        alert(`You want to delete task: ${JSON.stringify(this.tasks[index])}`)
      }
    }
  }
</script>
<style>
</style>
