const routes = [
  {
    path: '/',
    component: {
      template: '<div>vue-router 首页</div>'
    }
  },
  {
    path: '/test',
    component: {
      template: `<div>vue-router 测试
        <router-view></router-view>
      </div>`,
    },
    children: [
      {
        path: '/',
        component: {
          template: '<div>我是child0</div>'  
        }
      },
      {
        path: 'child1',
        component: {
          template: '<div>我是child1</div>'
        }
      },
      {
        path: 'child2',
        component: {
          template: '<div>我是child2</div>'
        }
      }
    ]
  }
]