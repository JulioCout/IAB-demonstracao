<template>
  <div>

    <div class="row">
      <div class="col-md-12">
        <h3 class="title">Início</h3>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-6">
        <task-list></task-list>
      </div>
    </div>
    
    <div class="row mb-4 ml-auto">
      <fg-input class="mt-auto mb-auto col-md-4" type="text"></fg-input>
      <fg-input class="mt-auto mb-auto" type="date"></fg-input>
      <p-button class="ml-3" type="primary">
        <i slot="label" class="nc-icon nc-simple-add"></i>
        Incluir Evento
      </p-button>
    </div>
    
    
      
    <calendar class="mr-auto"></calendar>
      
   



  </div>
</template>
<script>
  import CircleChartCard from 'src/components/UIComponents/Cards/CircleChartCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard';
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard';
  import {Badge} from 'src/components/UIComponents'
  import Loading from 'src/components/Dashboard/Layout/LoadingMainPanel.vue'
  import TaskList from './Widgets/TaskList'
  import Calendar from 'src/components/Dashboard/Views/Calendar/Calendar.vue'

  export default {
    components: {
      StatsCard,
      ChartCard,
      CircleChartCard,
      Badge,
      TaskList,
      Calendar
    },
    data () {
      return {

      }
    }
  }

</script>
<style>

</style>
