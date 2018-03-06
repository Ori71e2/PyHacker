// Router Table with Complete Permission
// This Table must contain all page
// path: Paga Address
// permission: Get from  stored in key:value

const asyncRouter = [
    {
        path: '/asynRouter',
        component: r => require.ensure([], () => r(require('src-page/layout/layout')), layout),
        children: []
    },
    /*
    {
        path: '/table',
        meta: {
            permission: []
        },
        component: r => require.ensure([], ()=> r(require('src-page/table/table')), 'table')
    },

    {
        path: '/form',
        meta:{
            permission:[]
        },
        component: r => require.ensure([], () => r(require('src-page/form/form')), 'form'),
    },
    {
        path: '/components',
        meta:{
            permission:[]
        },
        component: r => require.ensure([], () => r(require('src-page/components/index')), 'sysComponents'),
    },
    {
        path: '/components/permission',
        meta:{
            permission:[]
        },
        component: r => require.ensure([], () => r(require('src-page/components/function/permission')), 'sysComponents'),
    },
    {
        path: '/components/pageTable',
        meta:{
            permission:[]
        },
        component: r => require.ensure([], () => r(require('src-page/components/function/pageTable')), 'sysComponents'),
    },
    {
        path: '/components/pageSearch',
        meta:{
            permission:[]
        },
        component: r => require.ensure([], () => r(require('src-page/components/ui/pageSearch')), 'sysComponents'),
    },
    {
        path: '/components/pageSection',
        meta:{
            permission:[]
        },
        component: r => require.ensure([], () => r(require('src-page/components/ui/pageSection')), 'sysComponents'),
    },
    {
        path: '/components/pageTitle',
        meta:{
            permission:[]
        },
        component: r => require.ensure([], () => r(require('src-page/components/ui/pageTitle')), 'sysComponents'),
    },
    {
        path: '/components/pageToolbar',
        meta:{
            permission:[]
        },
        component: r => require.ensure([], () => r(require('src-page/components/ui/pageToolbar')), 'sysComponents'),
    },
    {
        path: '/components/pageNotes',
        meta:{
            permission:[]
        },
        component: r => require.ensure([], () => r(require('src-page/components/assist/pageNotes')), 'sysComponents'),
    },
    {
        path: '/example/table',
        meta:{
            permission:[]
        },
        component: r => require.ensure([], () => r(require('src-page/example/table')), 'example'),
    },
    {
        path: '/example/charts',
        meta:{
            permission:[]
        },
        component: r => require.ensure([], () => r(require('src-page/example/charts/charts')), 'example'),
    },
    {
        path: '/example/map',
        meta:{
            permission:[]
        },
        component: r => require.ensure([], () => r(require('src-page/example/map/map')), 'example'),
    },
    {
        path: '/i18n',
        meta:{
            permission:[]
        },
        component: r => require.ensure([], () => r(require('src-page/i18n/i18n')), 'i18n'),
    },
    {
        path: '/theme',
        meta:{
            permission:[]
        },
        component: r => require.ensure([], () => r(require('src-page/themeChange/themeChange')), 'theme'),
    }
    */
]

export default asyncRouter