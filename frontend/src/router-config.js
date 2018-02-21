
import public from './page/public/index.vue'
import step1 from './page/public/step1.vue'
import step2 from './page/public/step2.vue'
import step3 from './page/public/step3.vue'
import step4 from './page/public/step4.vue'

import totalpages from './page/manage/totalpages.vue'
import manage from './page/manage/index.vue'
import detail from './page/manage/detail.vue'
import page1 from './page/manage/page1.vue'
import page2 from './page/manage/page2.vue'
import page3 from './page/manage/page3.vue'
import page4 from './page/manage/page4.vue'
import page5 from './page/manage/page5.vue'


export default [
  {
    path: '/manage',component:totalpages,
    children:[
      { path: ''      , component: manage  },
      {
        path: 'detail', component: detail,

        children: [
          {path:'',component: page1},
          {
            path: 'page1', component: page1,
            children: [
              {path: '', component: step1},
              {path: 'step1', component: step1},
              {path: 'step2', component: step2},
              {path: 'step3', component: step3},
              {path: 'step4', component: step4}
            ]
          },
          { path: 'page2', component: page2  },
          { path: 'page3', component: page3  },
          { path: 'page4', component: page4  },
          { path: 'page5', component: page5  }
        ]
      },
    ]
  },{
    path:'/public',component:public,
    children:[
      { path: ''      , component: step1  },
      { path: 'step1', component: step1  },
      { path: 'step2', component: step2  },
      { path: 'step3', component: step3  },
      { path: 'step4', component: step4  }
    ]
  }
]
