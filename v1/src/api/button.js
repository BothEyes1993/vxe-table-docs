const apis = [
  {
    name: 'Props',
    descKey: 'app.api.title.props',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'content',
        descKey: 'app.api.button.desc.content',
        version: '1.15.22',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'type',
        descKey: 'app.api.button.desc.type',
        version: '1 | 1.15.18',
        type: '',
        enum: 'text,submit,reset,button',
        defVal: 'button',
        list: []
      },
      {
        name: 'size',
        descKey: 'app.api.button.desc.size',
        version: '',
        type: 'String',
        enum: 'medium,small,mini',
        defVal: '继承上下文',
        list: []
      },
      {
        name: 'name',
        descKey: 'app.api.button.desc.name',
        version: '',
        type: 'String, Number',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'icon',
        descKey: 'app.api.button.desc.icon',
        version: '1.15.25',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'round',
        desc: '圆角边框',
        version: '1.15.29',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'circle',
        desc: '圆角按钮',
        version: '1.15.29',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'status',
        descKey: 'app.api.button.desc.status',
        version: '1.15.27',
        type: 'String',
        enum: 'perfect, primary, success, info, warning, danger',
        defVal: '',
        list: []
      },
      {
        name: 'disabled',
        descKey: 'app.api.button.desc.disabled',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'loading',
        descKey: 'app.api.button.desc.loading',
        version: '1.14.17',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'placement',
        descKey: 'app.api.button.desc.placement',
        version: '1.15.27',
        type: 'String',
        enum: 'top, bottom',
        defVal: 'bottom',
        list: []
      },
      {
        name: 'transfer',
        descKey: 'app.api.button.desc.transfer',
        version: '1.15.27',
        type: 'Boolean',
        enum: '',
        defVal: '默认 false，继承 setup.button.transfer',
        list: []
      }
    ]
  },
  {
    name: 'Slots',
    descKey: 'app.api.title.slots',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: '—',
        desc: '按钮内容',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'dropdowns',
        desc: '下拉按钮',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      }
    ]
  },
  {
    name: 'Events',
    descKey: 'app.api.title.events',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: '*',
        desc: '原生事件',
        version: '',
        type: '',
        enum: '',
        defVal: '{ $event }',
        list: []
      },
      {
        name: 'dropdown-click',
        desc: '下拉列表按钮点击时会触发该事件',
        version: '',
        type: '',
        enum: '',
        defVal: '{ name, $event }',
        list: []
      }
    ]
  },
  {
    name: 'Methods',
    descKey: 'app.api.title.methods',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'focus()',
        desc: '使按钮获取焦点',
        version: '1.15.30',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'blur()',
        desc: '使按钮失去焦点',
        version: '1.15.30',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      }
    ]
  }
]

export default apis
