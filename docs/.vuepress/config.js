module.exports={
    title:'黑色行动：僵尸指南',
    description:'僵尸指南·中国站',
    themeConfig:{
        nav:[
            {text:'指引',link:'/zh/guide/'},
            {text:'英文站',link:'http://codzombies.info/'}
        ],
        sidebar:{
            '/zh/guide/':[
                '',
                'bo4/voyage_of_despair/voyage_of_despair'
            ],
        },
    },
    plugins: {
        '@vuepress/back-to-top': {},
        '@vuepress/active-header-links':{},
        '@vuepress/medium-zoom':{},
        '@vuepress/pwa':{
            serviceWorker: true,
            updatePopup: {
                message: "有新内容",
                buttonText: "刷新"
          }
        }
    },
    base:'/black-ops-zombies-guide/',
    head: [
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'icon', href: '/Icon-512.png' }],
    ],
};