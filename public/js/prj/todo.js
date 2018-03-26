var todo = function () {
    var _ = NEJ.P,
        _e = _('nej.e'),
        _v = _('nej.v'),
        _j = _('nej.j');

    const TODO_API = {
        ALL: '/api/todo_all',
        DONE: '/api/todo_done',
        UNDO: '/api/todo_undo'
    }

    
    //解析模板
    _e._$parseTemplate('template');
    
    // 渲染列表
    const renderItems = function(data) {
        var _todolist = _e._$get('todo');
        _todolist.innerHTML = _e._$getHtmlTemplate('box1', { xlist: data });
    }

    // 获取列表数据
    const search = function(url) {
        _j._$request(url, {
            sync: false,
            type: "json",
            data: null,
            method: "GET",
            onload: renderItems
        });
    }

    const add = function() {
        _j._$request('/api/todo', {
            sync: false,
            type: "json",
            data: null,
            // query: "userid=126770605",
            method: "POST",
            onload: function(data) {
                // 显示成功或失败消息
                alert(data)
                search(TODO_API.ALL)
            }
        });
    }

    const del = function () {
        _j._$request('/api/todo', {
            sync: false,
            type: "json",
            data: null,
            query: "id=1",
            method: "DELETE",
            onload: function (data) {
                // 显示成功或失败消息
                alert(data)
                search(TODO_API.ALL)
            }
        });
    }

    const showAddModdal = function() {
        alert("add")
    }
    const showEditModdal = function() {
        alert("edit")
    }
    const showDelModdal = function() {
        alert("del")
    }


    // 页面按钮功能函数绑定
    // _v._$addEvent(_e._$get('add'), 'click', showAddModdal._$bind(this));
    // _v._$addEvent(_e._$get('edit'), 'click', showEditModdal._$bind(this));
    // _v._$addEvent(_e._$get('del'), 'click', showAddModdal._$bind(this));

    // 页面初始化
    search(TODO_API.ALL);
};
define(['{lib}util/template/tpl.js'], todo);
