<template>
  <div class="row">
    <div class="col-md-12">
      <h3 class="title">Processos</h3>
      <!-- <p class="category">
        We combine <a href="http://element.eleme.io/#/en-US/component/quickstart" target="_blank" rel="noopener">Element-UI</a>
        table functionalities together with a custom pagination component
        which should provide a very good starting point to integrate tables in your application.
        Check out more functionalities at <a href="http://element.eleme.io/#/en-US/component/table" target="_blank" rel="noopener">Element-UI table documentation</a>.
       </p> -->
    </div>
    <div class="col-md-12 card">
      <!-- <div class="card-header">
        <div class="category">Extended tables</div>
      </div> -->
      <div class="card-body row">
        <div class="col-sm-3">
            <fg-input class="input-sm"
                      placeholder="Pesquisa"
                      v-model="searchQuery"
                      addon-right-icon="nc-icon nc-zoom-split">
            </fg-input>
        </div>
        <div class="col-sm-9">
          <div class="pull-right">
            <el-select
              class="select-default"
              v-model="pagination.perPage"
              placeholder="Per page">
              <el-option
                class="select-default"
                v-for="item in pagination.perPageOptions"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="col-sm-12 mt-2">
          <el-table class="table-striped"
                    :data="queriedData"
                    border
                    style="width: 100%">
            <el-table-column v-for="column in tableColumns"
                             :key="column.label"
                             :min-width="column.minWidth"
                             :prop="column.prop"
                             :label="column.label">
            </el-table-column>
            <el-table-column
              :min-width="120"
              fixed="right"
              class-name="td-actions"
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
        <div class="col-sm-6 pagination-info">
          <p class="category">Mostrando {{from + 1}} a {{to}} de {{total}} itens</p>
        </div>
        <div class="col-sm-6">
          <p-pagination class="pull-right"
                        v-model="pagination.currentPage"
                        :per-page="pagination.perPage"
                        :total="pagination.total">
          </p-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {Table, TableColumn, Select, Option} from 'element-ui'
  import PPagination from 'src/components/UIComponents/Pagination.vue'
  import procesosLista from './processos'
  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(Select)
  Vue.use(Option)
  export default{
    components: {
      PPagination
    },
    computed: {
      pagedData () {
        return this.tableData.slice(this.from, this.to)
      },
      /***
       * Searches through table data and returns a paginated array.
       * Note that this should not be used for table with a lot of data as it might be slow!
       * Do the search and the pagination on the server and display the data retrieved from server instead.
       * @returns {computed.pagedData}
       */
      queriedData () {
        if (!this.searchQuery) {
          this.pagination.total = this.tableData.length
          return this.pagedData
        }
        let result = this.tableData
          .filter((row) => {
            let isIncluded = false
            for (let key of this.propsToSearch) {
              let rowValue = row[key].toString()
              if (rowValue.includes && rowValue.includes(this.searchQuery)) {
                isIncluded = true
              }
            }
            return isIncluded
          })
        this.pagination.total = result.length
        return result.slice(this.from, this.to)
      },
      to () {
        let highBound = this.from + this.pagination.perPage
        if (this.total < highBound) {
          highBound = this.total
        }
        return highBound
      },
      from () {
        return this.pagination.perPage * (this.pagination.currentPage - 1)
      },
      total () {
        this.pagination.total = this.tableData.length
        return this.tableData.length
      }
    },
    data () {
      return {
        pagination: {
          perPage: 5,
          currentPage: 1,
          perPageOptions: [5, 10, 25, 50],
          total: 0
        },
        searchQuery: '',
        propsToSearch: ['processo', 'nome', 'numero na justica'],
        tableColumns: [
          {
            prop: 'processo',
            label: 'Processo',
            minWidth: 200
          },
          {
            prop: 'nome',
            label: 'Nome',
            minWidth: 250
          },
          {
            prop: 'numero na justica',
            label: 'Número na Justiça',
            minWidth: 100
          },
          {
            prop: 'tribunal',
            label: 'Tribunal',
            minWidth: 120
          }
        ],
        tableData: procesosLista
      }
    },
    methods: {
      handleLike (index, row) {
        alert(`Your want to like ${row.processo}`)
      },
      handleEdit (index, row) {
        alert(`Your want to edit ${row.nome}`)
      },
      handleDelete (index, row) {
        let indexToDelete = this.tableData.findIndex((tableRow) => tableRow.id === row.id)
        if (indexToDelete >= 0) {
          this.tableData.splice(indexToDelete, 1)
        }
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
