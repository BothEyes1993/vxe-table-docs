<template>
  <div>
    <p>
      <vxe-button @click="updateNameFilterOpts">更新name筛选条件</vxe-button>
    </p>

    <vxe-table
      border
      :row-config="{isHover: true}"
      :data="tableData"
      @filter-visible="filterVisibleEvent"
      @filter-change="filterChangeEvent">
      <vxe-column field="id" title="ID"></vxe-column>
      <vxe-column field="name" title="Name" sortable :filters="nameOptions" :filter-method="filterNameMethod"></vxe-column>
      <vxe-column field="sex" title="Sex" sortable :filters="sexOptions" :filter-multiple="false"></vxe-column>
      <vxe-column field="age" title="Age" :filters="ageOptions" :filter-method="filterAgeMethod">
        <template #filter="{ $panel, column }">
          <input type="type" v-for="(option, index) in column.filters" :key="index" v-model="option.data" @input="$panel.changeOption($event, !!option.data, option)">
        </template>
      </vxe-column>
      <vxe-column field="time" title="Time" sortable></vxe-column>
    </vxe-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 24, address: 'Shanghai' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 32, address: 'Shenzhen' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 28, address: 'Shanghai' }
      ],
      nameOptions: [],
      sexOptions: [
        { label: 'Man', value: '1' },
        { label: 'Woman', value: '0' }
      ],
      ageOptions: [
        { data: '' }
      ]
    }
  },
  methods: {
    filterNameMethod ({ value, row }) {
      return row.id >= value
    },
    filterAgeMethod ({ option, row }) {
      return row.age === Number(option.data)
    },
    filterVisibleEvent ({ column, visible }) {
      console.log(`${column.field} ${visible ? '打开' : '关闭'}筛选面板`)
    },
    filterChangeEvent ({ column }) {
      console.log(`${column.field} 筛选了数据`)
    },
    updateNameFilterOpts  () {
      this.nameOptions = [
        { label: 'id大于10002', value: 10002 },
        { label: 'id大于10003', value: 10003 }
      ]
    }
  }

}
</script>
