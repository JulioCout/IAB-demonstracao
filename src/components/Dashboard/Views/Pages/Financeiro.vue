<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h3 class="title">Financeiro</h3>
      </div>
    </div>

    <div class="row mb-4">
      <p-button type="success" class="ml-4">
        <i slot="label" class="nc-icon nc-simple-add"></i>
        Registrar Receita
      </p-button>
      <p-button type="danger" class="ml-4" >
        <i slot="label" class="nc-icon nc-simple-add"></i>
        Registrar Despesa
      </p-button>
      <p-button type="warning" class="ml-4">
        <i slot="label" class="nc-icon nc-simple-add"></i>
        Relatórios
      </p-button>
    </div>



    <!--Stats cards-->
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6" v-for="stats in statsCards">
        <stats-card :type="stats.type"
                    :icon="stats.icon"
                    :small-title="stats.title"
                    :title="stats.value">
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i>
            {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-sm-6">
        <chart-card :chart-data="activeUsersChart.data"
                    chart-id="activity-chart"
                    chart-title="TOTAL EARNINGS IN LAST TEN QUARTERS">
          <span slot="title">R$34.657,00</span>
          <badge slot="title-label" type="success">+18%</badge>

          <template slot="footer-title">Receitas Mensais</template>

          <p-button slot="footer-right" aria-label="add button" type="success" round icon size="sm">
            <i class="nc-icon nc-simple-add"></i>
          </p-button>
        </chart-card>
      </div>

      <div class="col-lg-4 col-sm-6">
        <chart-card :chart-data="emailsCampaignChart.data"
                    chart-id="emails-chart"
                    color="#ef8156" chart-title="TOTAL SUBSCRIPTIONS IN LAST 7 DAYS">
          <span slot="title">R$18.186,00</span>
          <badge slot="title-label" type="danger">-14%</badge>

          <template slot="footer-title">Despesas Mensais</template>

          <p-button slot="footer-right" aria-label="view button" type="danger" round icon size="sm">
            <i class="nc-icon nc-button-play"></i>
          </p-button>
        </chart-card>
      </div>

      <div class="col-lg-4 col-sm-6">
        <chart-card :chart-data="activeCountriesChart.data"
                    chart-id="active-countries-chart"
                    color="#fbc658" chart-title="Active Countries">
          <span slot="title">8,960</span>
          <badge slot="title-label" type="warning">~51%</badge>

          <template slot="footer-title">Terceiro Exemplo</template>

          <p-button slot="footer-right" aria-label="view more button" type="warning" round icon size="sm">
            <i class="nc-icon nc-alert-circle-i"></i>
          </p-button>
        </chart-card>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-3 col-sm-6">
        <circle-chart-card :percentage="73"
                           chart-id="adimplencia"
                           title="Adimplência Anuidade 2024"
                           description="Porcentagem de membros adimplentes"
                           color="#4acccd">
          <template slot="footer">
            <!-- <div class="legend">
              <i class="fa fa-circle text-info"></i> Open
            </div> -->
            <hr>
            <div class="stats">
              <i class="fa fa-calendar"></i> 2024
            </div>
          </template>
        </circle-chart-card>
      </div>

      <div class="col-lg-3 col-sm-6">
        <circle-chart-card :percentage="91"
                           title="Adimplência Geral"
                           description="Porcentagem de Membros Adimplentes"
                           color="#4acccd">
          <template slot="footer">
            <!-- <div class="legend">
              <i class="fa fa-circle text-secondary"></i> Ended
            </div> -->
            <hr>
            <div class="stats">
              <i class="fa fa-history"></i> Total users
            </div>
          </template>
        </circle-chart-card>
      </div>

      <div class="col-lg-3 col-sm-6">
        <circle-chart-card :percentage="64"
                           chart-id="meta-receita"
                           title="Meta de Receitas"
                           description="Total alcançado até o momento"
                           color="#fcc468">
          <template slot="footer">
            <!-- <div class="legend">
              <i class="fa fa-circle text-warning"></i> Visited
            </div> -->
            <hr>
            <div class="stats">
              <i class="fa fa-calendar"></i> 2024
            </div>
          </template>
        </circle-chart-card>
      </div>

      <div class="col-lg-3 col-sm-6">
        <circle-chart-card :percentage="80"
                           title="Meta de Despesas"
                           chart-id="meta-despesa"
                           description="Total alcançado até o momento"
                           color="#f17e5d">
          <template slot="footer">
            <!-- <div class="legend">
              <i class="fa fa-circle text-danger"></i> Completed
            </div> -->
            <hr>
            <div class="stats">
              <i class="fa fa-calendar"></i> 2024
            </div>
          </template>
        </circle-chart-card>
      </div>

    </div>

  </div>
</template>
<script>
  import CircleChartCard from 'src/components/UIComponents/Cards/CircleChartCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard';
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard';
  import {Badge} from 'src/components/UIComponents'
  // import Loading from 'src/components/Dashboard/Layout/LoadingMainPanel.vue'
  import TaskList from 'src/components/Dashboard/Views/Dashboard/Widgets/TaskList'

  export default {
    components: {
      StatsCard,
      ChartCard,
      CircleChartCard,
      Badge,
      TaskList
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        statsCards: [
          {
            type: 'success',
            icon: 'nc-icon nc-simple-add',
            title: 'Receitas de Julho',
            value: 'R$ 15.328,00',
            footerText: 'Julho',
            footerIcon: 'nc-icon nc-calendar-60'
          },
          {
            type: 'danger',
            icon: 'nc-icon nc-simple-delete',
            title: 'Despesas de Julho',
            value: 'R$ 8.742,00',
            footerText: 'Julho',
            footerIcon: 'nc-icon nc-calendar-60'
          },
          {
            type: 'success',
            icon: 'nc-icon nc-favourite-28',
            title: 'Membros Adimplentes',
            value: '1250',
            footerText: 'Em 2024',
            footerIcon: 'nc-icon nc-alert-circle-i'
          },
          {
            type: 'warning',
            icon: 'nc-icon nc-single-02',
            title: 'Membros Inadimplentes',
            value: '540',
            footerText: 'Em 2024',
            footerIcon: 'nc-icon nc-alert-circle-i'
          }
        ],
        activeUsersChart: {
          data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out"],
            series: [700, 1000, 1500, 1310, 1530, 1453, 1380, 1434, 1468, 1480]
          }
        },
        emailsCampaignChart: {
          data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out"],
            series: [40, 500, 650, 700, 750, 1050, 1400, 700, 800, 750]
          }
        },
        activeCountriesChart: {
          data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out"],
            series: [80, 78, 86, 96, 83, 85, 76, 75, 88, 90]
          }
        },
        activityChart: {
          data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            datasets: [
              {
                label: "Data",
                borderColor: '#fcc468',
                fill: true,
                backgroundColor: '#fcc468',
                hoverBorderColor: '#fcc468',
                borderWidth: 8,
                data: [100, 120, 80, 100, 90, 130, 110, 100, 80, 110, 130, 140, 130, 120, 130, 80, 100, 90, 120, 130],
              },
              {
                label: "Data",
                borderColor: '#4cbdd7',
                fill: true,
                backgroundColor: '#4cbdd7',
                hoverBorderColor: '#4cbdd7',
                borderWidth: 8,
                data: [80, 140, 50, 120, 50, 150, 60, 130, 50, 130, 150, 100, 110, 80, 140, 50, 140, 50, 110, 150],
              }
            ]
          }
        }

      }
    }
  }

</script>
<style>

</style>
