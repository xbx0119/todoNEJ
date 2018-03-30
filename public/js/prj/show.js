NEJ.define([
    'base/klass',
    'base/element',
    'util/template/tpl',
    'util/dispatcher/module',
    '../../js/prj/module.js'
], function (_k, _m, _l, _e, _t, _p) {
    var _pro;

    _p._$$ModuleDemo = _k._$klass();
    _pro = _p._$$ModuleDemo._$extend(_t._$$Module);

    _pro.__doBuild = function () {
        this.__super();
        this.__body = _m._$html2node(
            _l._$getTextTemplate('show-module')
        );
        console.log(this.__body)
        // TODO
    };

    _pro.__onShow = function (_options) {
        this.__super(_options);
        console.log("show list")
        // TODO

        var _ = NEJ.P,
            _e = _('nej.e'),
            _u = _('nej.u'),
            _v = _('nej.v'),
            _j = _('nej.j'),
            _m = _('nej.modal');

        const TODO_API = {
            ALL: '/api/todo_all',
            DONE: '/api/todo_done',
            UNDO: '/api/todo_undo'
        }

        _l._$parseTemplate('list-template');

        // 渲染列表
        const renderItems = function (data) {
            var _todolist = _e._$get('todo-list');
            _todolist.innerHTML = _e._$getHtmlTemplate('box1', { xlist: data });

            // // 绑定事件
            // var _delBtn = _e._$getByClassName('todo-list', 'todo-item-del');
            // _delBtn.forEach(function (btn, index) {
            //     _v._$addEvent(btn, 'click', _showDelModal);
            // });

            // var _delBtn = _e._$getByClassName('todo-list', 'todo-item-check');
            // _delBtn.forEach(function (btn, index) {
            //     _v._$addEvent(btn, 'click', _check);
            // });
        }

        const _search = function (url) {
            _j._$request(url, {
                sync: false,
                type: "json",
                data: null,
                method: "GET",
                onload: renderItems
            });
        }

        _search(TODO_API.ALL);
    };

    _pro.__onRefresh = function (_options) {
        // this.__super(_options);
        // TODO
    };

    _pro.__onHide = function () {
        // this.__super();
        // TODO
    };
    // notify dispatcher
    _e._$regist(
        '/m',
        _p._$$ModuleDemo
    );

    return _p;
});
