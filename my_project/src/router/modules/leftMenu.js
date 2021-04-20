import HelloWorld from '@/components/HelloWorld'
import leftMenu from '@/views/index'
import secondNavChild1 from '@/views/secondNav/secondNavChild1'
import secondNavChild2 from '@/views/secondNav/secondNavChild2'

export default [
    {
        name: 'secondNav',
        path: '/',
        component:leftMenu ,
        meta: { keepAlive: false },
        children: [
            /**
             * 首页
             */
            {
                name: 'home',
                path: '/',
                // path: '/home',
                component: HelloWorld,
                meta: {
                    keepAlive: false,
                    cityShow: false, // 是否显示公共城市选择
                    permissionCode: "home", // 权限判定code，会和3a校对
                    parentName: '首页', // 父级名称
                    currentName: '首页', // 当前路由名称
                    requiresAuth: true, // 是否需要登录才能查看
                    icon: "leftMenu_home.png"
                },
                children: []
            },
            
            /**
             * 二级导航
             */
            {
                name: 'secondNav',
                path: 'secondNav',
                component: leftMenu,
                meta: { currentName: '二级导航', keepAlive: false, icon: "leftMenu_2.png" },
                children: [
                    {
                        name: 'secondNavChild1',
                        path: 'secondNavChild1',
                        component: secondNavChild1,
                        meta: { parentName: '二级导航', currentName: '二级导航展开1' }
                    },
                    {
                        name: 'secondNavChild2',
                        path: 'secondNavChild2',
                        component: secondNavChild2,
                        meta: { parentName: '二级导航', currentName: '二级导航展开2' }
                    },
                    {
                        name: 'secondNavChild3',
                        path: 'secondNavChild3',
                        component: HelloWorld,
                        meta: { parentName: '二级导航', currentName: '二级导航展开3' }
                    },
                   
                ]
            },
            /**
             * 三级导航
             */
             {
                name: 'thirdNav',
                path: 'thirdNav',
                component: HelloWorld,
                meta: { currentName: '三级导航', keepAlive: false, icon: "leftMenu_3.png" },
                children: [
                    {
                        name: 'thirdNavChild1',
                        path: 'thirdNavChild1',
                        component: HelloWorld,
                        meta: { parentName: '三级导航', currentName: '三级导航展开1' }
                    },
                    {
                        name: 'thirdNavChild2',
                        path: 'thirdNavChild2',
                        component: HelloWorld,
                        meta: { parentName: '三级导航', currentName: '三级导航展开2' }
                    },
                    {
                        name: 'thirdNavChild3',
                        path: 'thirdNavChild3',
                        component: HelloWorld,
                        meta: { parentName: '三级导航', currentName: '三级导航展开3' }
                    },
                   
                ]
            },
            /**
             * 更多内容
             */
            {
                name: 'more',
                path: '/more',
                component: HelloWorld,
                meta: { keepAlive: false, icon: "leftMenu_more.png",parentName: '更多内容', currentName: '更多内容'},
                children: []
            }
           
        ]
    }
]