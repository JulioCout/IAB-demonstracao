<template>
  <div>
    
    <div class="row">
      <div class="col-lg-3 col-sm-6">
        <circle-chart-card :percentage="70"
                           chart-id="email-statistics-chart"
                           title="Email Statistics"
                           description="Last Campaign Performance"
                           color="#4acccd">
          <template slot="footer">
            <div class="legend">
              <i class="fa fa-circle text-info"></i> Open
            </div>
            <hr>
            <div class="stats">
              <i class="fa fa-calendar"></i> Number of emails sent
            </div>
          </template>
        </circle-chart-card>
      </div>

      <div class="col-lg-3 col-sm-6">
        <circle-chart-card :percentage="34"
                           chart-id="new-visitors-chart"
                           title="New Visitators"
                           description="Out Of Total Number"
                           color="#fcc468">
          <template slot="footer">
            <div class="legend">
              <i class="fa fa-circle text-warning"></i> Visited
            </div>
            <hr>
            <div class="stats">
              <i class="fa fa-check"></i> Campaign sent 2 days ago
            </div>
          </template>
        </circle-chart-card>
      </div>

      <div class="col-lg-3 col-sm-6">
        <circle-chart-card :percentage="80"
                           title="Orders"
                           chart-id="orders-chart"
                           description="Total Number"
                           color="#f17e5d">
          <template slot="footer">
            <div class="legend">
              <i class="fa fa-circle text-danger"></i> Completed
            </div>
            <hr>
            <div class="stats">
              <i class="fa fa-clock-o"></i> Updated 3 minutes ago
            </div>
          </template>
        </circle-chart-card>
      </div>

      <div class="col-lg-3 col-sm-6">
        <circle-chart-card :percentage="11"
                           title="Subscriptions"
                           description="Our Users"
                           color="#66615b">
          <template slot="footer">
            <div class="legend">
              <i class="fa fa-circle text-secondary"></i> Ended
            </div>
            <hr>
            <div class="stats">
              <i class="fa fa-history"></i> Total users
            </div>
          </template>
        </circle-chart-card>
      </div>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Table with Links</h5>
      </div>
      <div class="card-body row">
        <div class="col-sm-12">
          <el-table :data="tableData" header-row-class-name="text-primary">
            <el-table-column type="index">

            </el-table-column>
            <el-table-column prop="name"
                             label="Name">
            </el-table-column>
            <el-table-column prop="job"
                             label="Job Position">
            </el-table-column>
            <el-table-column prop="salary"
                             label="Salary">
            </el-table-column>
            <el-table-column
              class-name="action-buttons td-actions"
              align="right"
              label="Actions">
              <template slot-scope="props">
                <p-button type="info" size="sm" icon @click="handleLike(props.$index, props.row)">
                  <i class="fa fa-user"></i>
                </p-button>
                <p-button type="success" size="sm" icon @click="handleEdit(props.$index, props.row)">
                  <i class="fa fa-edit"></i>
                </p-button>
                <p-button type="danger" size="sm" icon @click="handleDelete(props.$index, props.row)">
                  <i class="fa fa-times"></i>
                </p-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Table with Switches</h5>
      </div>
      <div class="card-body row table-full-width">
        <div class="col-sm-12">
          <el-table class="table-striped"
                    header-row-class-name="text-primary"
                    :data="tableData">
            <el-table-column type="index">

            </el-table-column>
            <el-table-column prop="name"
                             label="Name">
            </el-table-column>
            <el-table-column prop="job"
                             label="Job Position">
            </el-table-column>
            <el-table-column prop="salary"
                             align="center"
                             label="Salary">
            </el-table-column>
            <el-table-column
              align="right"
              label="Active">
              <template slot-scope="props">
                <p-switch v-model="props.row.active"></p-switch>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {Table, TableColumn} from 'element-ui'
  import PSwitch from 'src/components/UIComponents/Switch.vue'
  import CircleChartCard from 'src/components/UIComponents/Cards/CircleChartCard.vue'
  Vue.use(Table)
  Vue.use(TableColumn)
  export default{
    components: {
      PSwitch,
      CircleChartCard
    },
    data () {
      return {
        tableData: [{
          name: 'Andrew Mike',
          job: 'Develop',
          salary: '€ 99,225',
          active: false
        }, {
          name: 'John Doe',
          job: 'Design',
          salary: '€ 89,241',
          active: false
        }, {
          name: 'Alex Mike',
          job: 'Design',
          salary: '€ 92,144',
          active: false
        }, {
          name: 'Mike Monday',
          job: 'Marketing',
          salary: '€ 49,990',
          active: true
        },
        {
          name: 'Paul dickens',
          job: 'Communication',
          salary: '€ 69,201',
          active: true
        }],
        productsTable: [
          {
            image: 'static/img/tables/agenda.png',
            title: 'Notebook',
            subTitle: 'Most beautiful agenda for the office.',
            price: 49,
            quantity: 1
          },
          {
            image: 'static/img/tables/stylus.jpg',
            title: 'Stylus',
            subTitle: 'Design is not just what it looks like and feels like. Design is how it works.',
            price: 499,
            quantity: 2
          },
          {
            image: 'static/img/tables/evernote.png',
            title: 'Evernote iPad Stander',
            subTitle: 'A groundbreaking Retina display. All-flash architecture. Fourth-generation Intel processors.',
            price: 799,
            quantity: 1
          }
        ]
      }
    },
    methods: {
      handleLike (index, row) {
        alert(`Your clicked on Like button`)
      },
      handleEdit (index, row) {
        alert(`Your want to edit ${row.name}`)
      },
      handleDelete (index, row) {
        alert(`Your want to delete ${row.name}`)
      },
      getSummaries (param) {
        const { columns } = param
        const sums = []
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = 'Total'
          } else if (index < columns.length - 1) {
            sums[index] = ''
          } else {
            let sum = 0
            this.productsTable.forEach((obj) => {
              sum += obj.quantity * obj.price
            })
            sums[index] = `€ ${sum}`
          }
        })
        return sums
      }
    }
  }
</script>
<style lang="scss">
  .el-table .td-actions{
    button.btn {
      margin-right: 5px;
    }
  }
</style>
