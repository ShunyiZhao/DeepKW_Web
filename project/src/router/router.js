import VueRouter from 'vue-router' //1.导入包
//2.创建路由对象
var router = new VueRouter({
    routes:[
        //{path: '/', redirect: '/account'},
        /* {
            path:'/account',
            component: account,
            children:[
                {path:'login',component:login},
                {path:'register',component:register}
            ]
        } */
    ]
})
export default router//3.暴露
