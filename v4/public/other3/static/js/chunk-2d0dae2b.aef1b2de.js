(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dae2b"],{"6e06":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._m(0),t("vxe-table",{attrs:{border:"",resizable:"","highlight-hover-row":"","show-footer":"","footer-method":e.footerMethod,data:e.tableData,"menu-config":e.tableMenu,"mouse-config":{selected:!0},"keyboard-config":{isArrow:!0,isDel:!0,isEnter:!0,isTab:!0,isEdit:!0},"edit-config":{trigger:"dblclick",mode:"cell"}}},[t("vxe-column",{attrs:{type:"seq",width:"60"}}),t("vxe-column",{attrs:{field:"name",title:"Name",width:"300",sortable:"","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var a=n.row;return[t("vxe-input",{attrs:{type:"text"},model:{value:a.name,callback:function(n){e.$set(a,"name",n)},expression:"row.name"}})]}}])}),t("vxe-column",{attrs:{field:"role",title:"Role",width:"300",sortable:"","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var a=n.row;return[t("vxe-input",{attrs:{type:"text"},model:{value:a.role,callback:function(n){e.$set(a,"role",n)},expression:"row.role"}})]}}])}),t("vxe-colgroup",{attrs:{title:"基本信息"}},[t("vxe-column",{attrs:{field:"sex",title:"sex",width:"180","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var a=n.row;return[t("vxe-input",{attrs:{type:"text"},model:{value:a.sex,callback:function(n){e.$set(a,"sex",n)},expression:"row.sex"}})]}}])}),t("vxe-colgroup",{attrs:{title:"详细详细"}},[t("vxe-column",{attrs:{field:"age",title:"Age",width:"180",sortable:"",filters:[{data:[]}],"filter-method":e.filterAgeMethod,"filter-render":{},"edit-render":{}},scopedSlots:e._u([{key:"filter",fn:function(n){var a=n.$panel,o=n.column;return e._l(o.filters,(function(n,o){return t("input",{directives:[{name:"model",rawName:"v-model",value:n.data,expression:"option.data"}],key:o,attrs:{type:"type"},domProps:{value:n.data},on:{input:[function(t){t.target.composing||e.$set(n,"data",t.target.value)},function(e){return a.changeOption(e,!!n.data,n)}]}})}))}},{key:"edit",fn:function(n){var a=n.row;return[t("vxe-input",{attrs:{type:"text"},model:{value:a.age,callback:function(n){e.$set(a,"age",n)},expression:"row.age"}})]}}])})],1)],1),t("vxe-colgroup",{attrs:{title:"其他信息"}},[t("vxe-column",{attrs:{field:"date13",title:"Date",width:"250"}})],1)],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"tip"},[e._v(" 具体兼容请查看 "),t("a",{staticClass:"link",attrs:{href:"https://github.com/x-extends/vxe-table-plugin-menus/tree/v2",target:"_blank"}},[e._v("vxe-table-plugin-menus")]),e._v(" 插件的 API"),t("br"),t("span",{staticClass:"red"},[e._v("（注：该示例仅供参考，具体逻辑请自行实现）")])])}],r=(t("d3b7"),t("159b"),t("a9e3"),t("d81d"),t("caad"),{data:function(){return{tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women",age:21,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"Man",age:29,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"Man",age:35,address:"test abc"}],tableMenu:{header:{options:[[{code:"HIDDEN_COLUMN",name:"隐藏"},{code:"RESET_COLUMN",name:"取消隐藏"},{code:"FIXED_LEFT_COLUMN",name:"固定到左侧"},{code:"FIXED_RIGHT_COLUMN",name:"固定到右侧"},{code:"CLEAR_FIXED_COLUMN",name:"取消固定"},{code:"RESET_ALL",name:"重置个性化数据",prefixIcon:"fa fa-undo"}],[{code:"PRINT_ALL",name:"打印",prefixIcon:"fa fa-print"},{code:"EXPORT_ALL",name:"导出.html",prefixIcon:"fa fa-download",params:{type:"html"}}]]},body:{options:[[{code:"INSERT_AT_ACTIVED_ROW",name:"插入"},{code:"DELETE_ROW",name:"app.body.label.delete"},{code:"CLEAR_CELL",name:"清除内容"}],[{name:"app.body.label.filter",prefixIcon:"fa fa-filter",children:[{code:"CLEAR_FILTER",name:"清除筛选"},{code:"CLEAR_ALL_FILTER",name:"重置所有筛选"},{code:"FILTER_CELL",name:"按所选单元格的值筛选"}]},{name:"app.body.label.sort",children:[{code:"SORT_ASC",name:"升序",prefixIcon:"fa fa-sort-alpha-desc"},{code:"SORT_DESC",name:"倒序",prefixIcon:"fa fa-sort-alpha-desc"},{code:"CLEAR_SORT",name:"清除排序"}]}],[{code:"PRINT_ALL",name:"打印",prefixIcon:"fa fa-print",params:{columns:[{field:"name"},{field:"age"},{field:"rate"}]}},{code:"EXPORT_ALL",name:"导出.csv",prefixIcon:"fa fa-download",params:{columns:[{field:"name"},{field:"age"},{field:"rate"}],type:"csv"}}]]},footer:{options:[[{code:"EXPORT_ALL",name:"导出.xml",prefixIcon:"fa fa-download",params:{columns:[{field:"name"},{field:"role"},{field:"sex"}],type:"xml"}},{code:"PRINT_ALL",name:"打印",prefixIcon:"fa fa-print",params:{columns:[{field:"name"},{field:"role"},{field:"sex"}]}}]]}},demoCodes:['\n        <vxe-table\n          border\n          resizable\n          highlight-hover-row\n          show-footer\n          :footer-method="footerMethod"\n          :data="tableData"\n          :menu-config="tableMenu"\n          :mouse-config="{selected: true}"\n          :keyboard-config="{isArrow: true, isDel: true, isEnter: true, isTab: true, isEdit: true}"\n          :edit-config="{trigger: \'dblclick\', mode: \'cell\'}">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" width="300" sortable :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.name" type="text"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="role" title="Role" width="300" sortable :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.role" type="text"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-colgroup title="基本信息">\n            <vxe-column field="sex" title="sex" width="180" :edit-render="{}">\n              <template #edit="{ row }">\n                <vxe-input v-model="row.sex" type="text"></vxe-input>\n              </template>\n            </vxe-column>\n            <vxe-colgroup title="详细详细">\n              <vxe-column field="age" title="Age" width="180" sortable :filters="[{ data: [] }]" :filter-method="filterAgeMethod" :filter-render="{}" :edit-render="{}">\n                <template #filter="{ $panel, column }">\n                  <input type="type" v-for="(option, index) in column.filters" :key="index" v-model="option.data" @input="$panel.changeOption($event, !!option.data, option)">\n                </template>\n                <template #edit="{ row }">\n                  <vxe-input v-model="row.age" type="text"></vxe-input>\n                </template>\n              </vxe-column>\n            </vxe-colgroup>\n          </vxe-colgroup>\n          <vxe-colgroup title="其他信息">\n            <vxe-column field="date13" title="Date" width="250"></vxe-column>\n          </vxe-colgroup>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }\n              ],\n              tableMenu: {\n                header: {\n                  options: [\n                    [\n                      { code: 'HIDDEN_COLUMN', name: '隐藏' },\n                      { code: 'RESET_COLUMN', name: '取消隐藏' },\n                      { code: 'FIXED_LEFT_COLUMN', name: '固定到左侧' },\n                      { code: 'FIXED_RIGHT_COLUMN', name: '固定到右侧' },\n                      { code: 'CLEAR_FIXED_COLUMN', name: '取消固定' },\n                      { code: 'RESET_ALL', name: '重置个性化数据', prefixIcon: 'fa fa-undo' }\n                    ],\n                    [\n                      { code: 'PRINT_ALL', name: '打印', prefixIcon: 'fa fa-print' },\n                      { code: 'EXPORT_ALL', name: '导出.html', prefixIcon: 'fa fa-download', params: { type: 'html' } }\n                    ]\n                  ]\n                },\n                body: {\n                  options: [\n                    [\n                      { code: 'INSERT_AT_ACTIVED_ROW', name: '插入' },\n                      { code: 'DELETE_ROW', name: 'app.body.label.delete' },\n                      { code: 'CLEAR_CELL', name: '清除内容' }\n                    ],\n                    [\n                      {\n                        name: 'app.body.label.filter',\n                        prefixIcon: 'fa fa-filter',\n                        children: [\n                          { code: 'CLEAR_FILTER', name: '清除筛选' },\n                          { code: 'CLEAR_ALL_FILTER', name: '重置所有筛选' },\n                          { code: 'FILTER_CELL', name: '按所选单元格的值筛选' }\n                        ]\n                      },\n                      {\n                        name: 'app.body.label.sort',\n                        children: [\n                          { code: 'SORT_ASC', name: '升序', prefixIcon: 'fa fa-sort-alpha-desc' },\n                          { code: 'SORT_DESC', name: '倒序', prefixIcon: 'fa fa-sort-alpha-desc' },\n                          { code: 'CLEAR_SORT', name: '清除排序' }\n                        ]\n                      }\n                    ],\n                    [\n                      { code: 'PRINT_ALL', name: '打印', prefixIcon: 'fa fa-print', params: { columns: [{ field: 'name' }, { field: 'age' }, { field: 'rate' }] } },\n                      { code: 'EXPORT_ALL', name: '导出.csv', prefixIcon: 'fa fa-download', params: { columns: [{ field: 'name' }, { field: 'age' }, { field: 'rate' }], type: 'csv' } }\n                    ]\n                  ]\n                },\n                footer: {\n                  options: [\n                    [\n                      { code: 'EXPORT_ALL', name: '导出.xml', prefixIcon: 'fa fa-download', params: { columns: [{ field: 'name' }, { field: 'role' }, { field: 'sex' }], type: 'xml' } },\n                      { code: 'PRINT_ALL', name: '打印', prefixIcon: 'fa fa-print', params: { columns: [{ field: 'name' }, { field: 'role' }, { field: 'sex' }] } }\n                    ]\n                  ]\n                }\n              }\n            }\n          },\n          methods: {\n            sumNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count\n            },\n            footerMethod ({ columns, data }) {\n              return [\n                columns.map((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                    return '和值'\n                  }\n                  if (['age', 'rate'].includes(column.property)) {\n                    return this.sumNum(data, column.property)\n                  }\n                  return null\n                })\n              ]\n            },\n            filterAgeMethod ({ option, row }) {\n              return row.age === Number(option.data)\n            }\n          }\n        }\n        "]}},methods:{sumNum:function(e,n){var t=0;return e.forEach((function(e){t+=Number(e[n])})),t},footerMethod:function(e){var n=this,t=e.columns,a=e.data;return[t.map((function(e,t){return 0===t?"和值":["age","rate"].includes(e.property)?n.sumNum(a,e.property):null}))]},filterAgeMethod:function(e){var n=e.option,t=e.row;return t.age===Number(n.data)}}}),l=r,d=t("2877"),i=Object(d["a"])(l,a,o,!1,null,null,null);n["default"]=i.exports}}]);