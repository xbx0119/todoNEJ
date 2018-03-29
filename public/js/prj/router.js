var f = function (_p) {
    // 实例化调度器，并在全局设置dispatcher变量供模块使用
    _p._$startup({
        // 设置规则
        rules: {
            title: {
                '/m/a/': '模块A',
                '/m/b/': '模块B',
                '/m/c/': '模块C'
            },
            rewrite: {
                '404': '/m/c/0/',
                '/m/c/$1/': /^\/c\/([\d])\/$/
            }
        },
        // 注册模块
        modules: {
            '/': '/index.html',
            '/a/': '/module/a.html',
            '/b/': '/module/b.html',
            '/c/': { module: '/module/c.html', clazz: 'g-mdl-c' }
        }
    });
}
define([
    '{lib}util/dispatcher/dispatcher.js',
    '{pro}js/prj/todo.js'
], f);

