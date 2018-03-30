var f = function (_p) {
    _p._$startup({
        // 设置规则
        rules: {
            title: {
                '/': 'Todo',
                '/show/': 'Todo',
                '/add/': '添加',
                '/edit/': '编辑',
            },
            rewrite: {
                '404': '/m/c/0/',
                '/m/c/$1/': /^\/c\/([\d])\/$/
            }
        },
        // 注册模块
        modules: {
            '/?/show/': '../../html/show.html',
            '/?/add/': '../../html/add.html',
            '/?/edit/': '../../html/edit.html',

            '/show': {
                module: '../../html/app.html',
                composite: {
                    show: '/?/show/'
                }
            },
            '/add': {
                module: '../../html/app.html',
                composite: {
                    add: '/?/add/'
                }
            },
            '/edit': {
                module: '../../html/app.html',
                composite: {
                    edit: '/?/edit/'
                }
            },
        }
    });
}
define([
    '{lib}util/dispatcher/dispatcher.js'
], f);

