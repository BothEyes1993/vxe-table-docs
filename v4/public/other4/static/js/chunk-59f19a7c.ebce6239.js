(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59f19a7c"],{3024:function(e,t,n){},"80f7":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),a=Object(o["createElementVNode"])("p",{class:"tip"},[Object(o["createTextVNode"])(" 表格不支持拖动功能；简单示例： "),Object(o["createElementVNode"])("a",{class:"link",href:"https://www.npmjs.com/package/sortablejs",target:"_blank"},"sortablejs"),Object(o["createTextVNode"])(" 等库实现行拖动"),Object(o["createElementVNode"])("br"),Object(o["createElementVNode"])("a",{class:"link",href:"https://www.npmjs.com/package/vxe-table",target:"_blank"},"vxe-table"),Object(o["createTextVNode"])(" 作为表格组件，可以很容易跟其他优秀的组件库互相集成，以下为简单示例可供参考。"),Object(o["createElementVNode"])("br"),Object(o["createTextVNode"])(" 由于直接操作了 Dom 节点，需要与 Vue 的数据同步，必须设置 row-key，并且自行根据 vue 的规则自行实现数据同步"),Object(o["createElementVNode"])("br"),Object(o["createElementVNode"])("span",{class:"red"},"（注：该示例仅供参考，具体请自行实现）")],-1),r=Object(o["createElementVNode"])("span",{class:"drag-btn"},[Object(o["createElementVNode"])("i",{class:"vxe-icon--menu"})],-1),d={class:"demo-code"},i=Object(o["createTextVNode"])("      "),l=Object(o["createTextVNode"])("\r\n      "),s=Object(o["createTextVNode"])("\r\n      "),c=Object(o["createTextVNode"])("\r\n    "),m=Object(o["createElementVNode"])("p",{class:"tip"},[Object(o["createTextVNode"])(" 简单示例："),Object(o["createElementVNode"])("br"),Object(o["createElementVNode"])("span",{class:"red"},"（注：该示例仅供参考，具体请自行实现）")],-1),b=Object(o["createElementVNode"])("span",{class:"drag-btn"},[Object(o["createElementVNode"])("i",{class:"vxe-icon--menu"})],-1),p={class:"demo-code"},u=Object(o["createTextVNode"])("      "),x=Object(o["createTextVNode"])("\r\n      "),f=Object(o["createTextVNode"])("\r\n      "),T=Object(o["createTextVNode"])("\r\n    ");function v(e,t,n,v,w,j){var O=Object(o["resolveComponent"])("vxe-tooltip"),h=Object(o["resolveComponent"])("vxe-column"),g=Object(o["resolveComponent"])("vxe-table"),N=Object(o["resolveComponent"])("pre-code"),y=Object(o["resolveComponent"])("vxe-grid");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[a,Object(o["createVNode"])(g,{border:"","row-key":"",ref:"xTable1",class:"sortable-row-demo","scroll-y":{enabled:!1},data:e.demo1.tableData},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(h,{width:"60"},{default:Object(o["withCtx"])((function(){return[r]})),header:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{modelValue:e.demo1.showHelpTip,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.demo1.showHelpTip=t}),content:"按住后可以上下拖动排序！",enterable:""},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("i",{class:"vxe-icon--question",onClick:t[0]||(t[0]=function(t){return e.demo1.showHelpTip=!e.demo1.showHelpTip})})]})),_:1},8,["modelValue"])]})),_:1}),Object(o["createVNode"])(h,{field:"name",title:"Name"}),Object(o["createVNode"])(h,{field:"sex",title:"Sex"}),Object(o["createVNode"])(h,{field:"age",title:"Age"}),Object(o["createVNode"])(h,{field:"address",title:"Address","show-overflow":""})]})),_:1},8,["data"]),Object(o["createElementVNode"])("p",d,Object(o["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(o["createElementVNode"])("pre",null,[i,Object(o["createVNode"])(N,{class:"xml"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.demoCodes[0]),1)]})),_:1}),l,Object(o["createVNode"])(N,{class:"typescript"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.demoCodes[1]),1)]})),_:1}),s,Object(o["createVNode"])(N,{class:"css"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.demoCodes[2]),1)]})),_:1}),c]),m,Object(o["createVNode"])(y,Object(o["mergeProps"])({ref:"xGrid2"},e.gridOptions2),{dragBtn:Object(o["withCtx"])((function(){return[b]})),dragTip:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{modelValue:e.demo2.showHelpTip,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.demo2.showHelpTip=t}),content:"按住后可以上下拖动排序！",enterable:""},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("i",{class:"vxe-icon--question",onClick:t[2]||(t[2]=function(t){return e.demo2.showHelpTip=!e.demo2.showHelpTip})})]})),_:1},8,["modelValue"])]})),_:1},16),Object(o["createElementVNode"])("p",p,Object(o["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(o["createElementVNode"])("pre",null,[u,Object(o["createVNode"])(N,{class:"xml"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.demoCodes[3]),1)]})),_:1}),x,Object(o["createVNode"])(N,{class:"typescript"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.demoCodes[4]),1)]})),_:1}),f,Object(o["createVNode"])(N,{class:"css"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.demoCodes[5]),1)]})),_:1}),T])])}var w=n("2909"),j=(n("a434"),n("55db")),O=n("c695"),h=n.n(O),g=n("a352"),N=n.n(g),y=Object(o["defineComponent"])({setup:function(){var e,t,n,a=Object(o["ref"])({}),r=Object(o["reactive"])({showHelpTip:!1,tableData:[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:23,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:30,address:"Shanghai"}]}),d=function(){var t=a.value;e=N.a.create(t.$el.querySelector(".body--wrapper>.vxe-table--body tbody"),{handle:".drag-btn",onEnd:function(e){var t=e.newIndex,n=e.oldIndex,o=r.tableData.splice(n,1)[0];r.tableData.splice(t,0,o)}})},i=Object(o["reactive"])({showHelpTip:!1}),l=Object(o["ref"])({}),s=Object(o["reactive"])({border:!0,rowKey:!0,class:"sortable-tree-demo",scrollY:{enabled:!1},treeConfig:{children:"children"},columns:[{width:60,slots:{default:"dragBtn",header:"dragTip"}},{field:"name",title:"Name",treeNode:!0},{field:"size",title:"Size"},{field:"type",title:"Type"},{field:"date",title:"Date"}],data:[{id:1e3,name:"test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:1005,name:"Test2",type:"mp4",size:null,date:"2021-04-01",children:[{id:24300,name:"Test3",type:"avi",size:1024,date:"2020-03-01"},{id:20045,name:"test abc4",type:"html",size:600,date:"2021-04-01"},{id:10053,name:"test abc96",type:"avi",size:null,date:"2021-04-01",children:[{id:24330,name:"test abc5",type:"txt",size:25,date:"2021-10-01"},{id:21011,name:"Test6",type:"pdf",size:512,date:"2020-01-01"},{id:22200,name:"Test7",type:"js",size:1024,date:"2021-06-01"}]}]},{id:23666,name:"Test8",type:"xlsx",size:2048,date:"2020-11-01"},{id:24555,name:"test abc9",type:"avi",size:224,date:"2020-10-01"}]}),c=function(){var e=l.value;t=N.a.create(e.$el.querySelector(".body--wrapper>.vxe-table--body tbody"),{handle:".drag-btn",onEnd:function(t){var n=t.item,o=t.oldIndex,a={children:"children"},r=n.parentNode,d=n.previousElementSibling,i=s.data,l=e.getRowNode(n);if(l){var c=l.item,m=h.a.findTree(i,(function(e){return e===c}),a);if(d){var b=e.getRowNode(d);if(!b)return;var p=b.item,u=h.a.findTree(i,(function(e){return e===p}),a);if(h.a.findTree(c[a.children],(function(e){return p===e}),a)){var x=r.children[o];return r.insertBefore(n,x),j["a"].modal.message({content:"不允许自己给自己拖动！",status:"error"})}var f=m.items.splice(m.index,1)[0];e.isTreeExpandByRow(p)?p[a.children].splice(0,0,f):u.items.splice(u.index+(m.index<u.index?0:1),0,f)}else{var T=m.items.splice(m.index,1)[0];i.unshift(T)}s.data=Object(w["a"])(i)}}})};return Object(o["nextTick"])((function(){n=setTimeout((function(){d(),c()}),500)})),Object(o["onUnmounted"])((function(){clearTimeout(n),e&&e.destroy(),t&&t.destroy()})),{xTable1:a,demo1:r,rowDrop:d,xGrid2:l,demo2:i,gridOptions2:s,treeDrop:c,demoCodes:['\n        <vxe-table\n          border\n          row-key\n          ref="xTable1"\n          class="sortable-row-demo"\n          :scroll-y="{enabled: false}"\n          :data="demo1.tableData">\n          <vxe-column width="60">\n            <template #default>\n              <span class="drag-btn">\n                <i class="vxe-icon--menu"></i>\n              </span>\n            </template>\n            <template #header>\n              <vxe-tooltip v-model="demo1.showHelpTip" content="按住后可以上下拖动排序！" enterable>\n                <i class="vxe-icon--question" @click="demo1.showHelpTip = !demo1.showHelpTip"></i>\n              </vxe-tooltip>\n            </template>\n          </vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="address" title="Address" show-overflow></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive, ref, onUnmounted, nextTick } from 'vue'\n        import { VXETable, VxeGridInstance, VxeGridProps, VxeTableInstance } from 'vxe-table'\n        import XEUtils from 'xe-utils'\n        import Sortable from 'sortablejs'\n\n        export default defineComponent({\n          setup () {\n            const xTable1 = ref({} as VxeTableInstance)\n\n            const demo1 = reactive({\n              showHelpTip: false,\n              tableData: [\n                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },\n                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },\n                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }\n              ]\n            })\n\n            let sortable1: any\n\n            const rowDrop = () => {\n              const $table = xTable1.value\n              sortable1 = Sortable.create($table.$el.querySelector('.body--wrapper>.vxe-table--body tbody'), {\n                handle: '.drag-btn',\n                onEnd: (sortableEvent) => {\n                  const newIndex = sortableEvent.newIndex as number\n                  const oldIndex = sortableEvent.oldIndex as number\n                  const currRow = demo1.tableData.splice(oldIndex, 1)[0]\n                  demo1.tableData.splice(newIndex, 0, currRow)\n                }\n              })\n            }\n\n            let initTime: any\n            nextTick(() => {\n              // 加载完成之后在绑定拖动事件\n              initTime = setTimeout(() => {\n                rowDrop()\n              }, 500)\n            })\n\n            onUnmounted(() => {\n              clearTimeout(initTime)\n              if (sortable1) {\n                sortable1.destroy()\n              }\n            })\n\n            return {\n              xTable1,\n              demo1,\n              rowDrop\n            }\n          }\n        })\n        ","\n        .sortable-row-demo .drag-btn {\n          cursor: move;\n          font-size: 12px;\n        }\n        .sortable-row-demo .vxe-body--row.sortable-ghost,\n        .sortable-row-demo .vxe-body--row.sortable-chosen {\n          background-color: #dfecfb;\n        }\n        ",'\n        <vxe-grid ref="xGrid2" v-bind="gridOptions2">\n          <template #dragBtn>\n            <span class="drag-btn">\n              <i class="vxe-icon--menu"></i>\n            </span>\n          </template>\n          <template #dragTip>\n            <vxe-tooltip v-model="demo2.showHelpTip" content="按住后可以上下拖动排序！" enterable>\n              <i class="vxe-icon--question" @click="demo2.showHelpTip = !demo2.showHelpTip"></i>\n            </vxe-tooltip>\n          </template>\n        </vxe-grid>\n        ',"\n        import { defineComponent, reactive, ref, onUnmounted, nextTick } from 'vue'\n        import { VXETable, VxeGridInstance, VxeGridProps, VxeTableInstance } from 'vxe-table'\n        import XEUtils from 'xe-utils'\n        import Sortable from 'sortablejs'\n\n        export default defineComponent({\n          setup () {\n            const demo2 = reactive({\n              showHelpTip: false\n            })\n\n            const xGrid2 = ref({} as VxeGridInstance)\n\n            const gridOptions2 = reactive({\n              border: true,\n              rowKey: true,\n              class: 'sortable-tree-demo',\n              scrollY: {\n                enabled: false\n              },\n              treeConfig: {\n                children: 'children'\n              },\n              columns: [\n                { width: 60, slots: { default: 'dragBtn', header: 'dragTip' } },\n                { field: 'name', title: 'Name', treeNode: true },\n                { field: 'size', title: 'Size' },\n                { field: 'type', title: 'Type' },\n                { field: 'date', title: 'Date' }\n              ],\n              data: [\n                { id: 1000, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                {\n                  id: 1005,\n                  name: 'Test2',\n                  type: 'mp4',\n                  size: null,\n                  date: '2021-04-01',\n                  children: [\n                    { id: 24300, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },\n                    { id: 20045, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },\n                    {\n                      id: 10053,\n                      name: 'test abc96',\n                      type: 'avi',\n                      size: null,\n                      date: '2021-04-01',\n                      children: [\n                        { id: 24330, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },\n                        { id: 21011, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },\n                        { id: 22200, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }\n                      ]\n                    }\n                  ]\n                },\n                { id: 23666, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },\n                { id: 24555, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' }\n              ]\n            } as VxeGridProps)\n\n            let sortable2: any\n\n            const treeDrop = () => {\n              const $grid = xGrid2.value\n              sortable2 = Sortable.create($grid.$el.querySelector('.body--wrapper>.vxe-table--body tbody') as HTMLElement, {\n                handle: '.drag-btn',\n                onEnd: (sortableEvent) => {\n                  const targetTrElem = sortableEvent.item\n                  const oldIndex = sortableEvent.oldIndex as number\n                  const options = { children: 'children' }\n                  const wrapperElem = targetTrElem.parentNode as HTMLElement\n                  const prevTrElem = targetTrElem.previousElementSibling as HTMLElement\n                  const tableTreeData = gridOptions2.data as any[]\n                  const targetRowNode = $grid.getRowNode(targetTrElem)\n                  if (!targetRowNode) {\n                    return\n                  }\n                  const selfRow = targetRowNode.item\n                  const selfNode = XEUtils.findTree(tableTreeData, row => row === selfRow, options)\n                  if (prevTrElem) {\n                    // 移动到节点\n                    const prevRowNode = $grid.getRowNode(prevTrElem)\n                    if (!prevRowNode) {\n                      return\n                    }\n                    const prevRow = prevRowNode.item\n                    const prevNode = XEUtils.findTree(tableTreeData, row => row === prevRow, options)\n                    if (XEUtils.findTree(selfRow[options.children], row => prevRow === row, options)) {\n                      // 错误的移动\n                      const oldTrElem = wrapperElem.children[oldIndex]\n                      wrapperElem.insertBefore(targetTrElem, oldTrElem)\n                      return VXETable.modal.message({ content: '不允许自己给自己拖动！', status: 'error' })\n                    }\n                    const currRow = selfNode.items.splice(selfNode.index, 1)[0]\n                    if ($grid.isTreeExpandByRow(prevRow)) {\n                      // 移动到当前的子节点\n                      prevRow[options.children].splice(0, 0, currRow)\n                    } else {\n                      // 移动到相邻节点\n                      prevNode.items.splice(prevNode.index + (selfNode.index < prevNode.index ? 0 : 1), 0, currRow)\n                    }\n                  } else {\n                    // 移动到第一行\n                    const currRow = selfNode.items.splice(selfNode.index, 1)[0]\n                    tableTreeData.unshift(currRow)\n                  }\n                  // 如果变动了树层级，需要刷新数据\n                  gridOptions2.data = [...tableTreeData]\n                }\n              })\n            }\n\n            let initTime: any\n            nextTick(() => {\n              // 加载完成之后在绑定拖动事件\n              initTime = setTimeout(() => {\n                rowDrop()\n              }, 500)\n            })\n\n            onUnmounted(() => {\n              clearTimeout(initTime)\n              if (sortable2) {\n                sortable2.destroy()\n              }\n            })\n\n            return {\n              xGrid2,\n              demo2,\n              gridOptions2,\n              treeDrop\n            }\n          }\n        })\n        ","\n        .sortable-tree-demo .drag-btn {\n          cursor: move;\n          font-size: 12px;\n        }\n        .sortable-tree-demo .vxe-body--row.sortable-ghost,\n        .sortable-tree-demo .vxe-body--row.sortable-chosen {\n          background-color: #dfecfb;\n        }\n        "]}}}),V=(n("e02d"),n("6b0d")),E=n.n(V);const D=E()(y,[["render",v]]);t["default"]=D},e02d:function(e,t,n){"use strict";n("3024")}}]);