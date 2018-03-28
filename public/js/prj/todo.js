var todo = function () {
    var _ = NEJ.P,
        _e = _('nej.e'),
        _v = _('nej.v'),
        _j = _('nej.j'),
        _m = _('nej.modal');

    const TODO_API = {
        ALL: '/api/todo_all',
        DONE: '/api/todo_done',
        UNDO: '/api/todo_undo'
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
            method: "POST",
            onload: function(data) {
                // 显示成功或失败消息
                alert(data)
                search(TODO_API.ALL)
            }
        });
    }

    const del = function(id) {
        _j._$request('/api/todo/' + id, {
            sync: false,
            type: "json",
            data: null,
            method: "DELETE",
            onload: function (data) {
                console.log(data)
                search(TODO_API.ALL)
            }
        });
    }

    const showDelModal = function(e) {
        var _id = e.target.parentNode.dataset.key;
        _m._$showModal(e, function() {
            del(_id)
        });
    }


    // 页面按钮功能函数绑定
    // _v._$addEvent(_e._$get('add'), 'click', showAddModdal._$bind(this));
    // _v._$addEvent(_e._$get('edit'), 'click', showEditModdal._$bind(this));
    // _v._$addEvent(_e._$get('del'), 'click', showAddModdal._$bind(this));

    
    // 解析模板
    _e._$parseTemplate('template');
    // 渲染列表
    const renderItems = function (data) {
        var _todolist = _e._$get('todo');
        _todolist.innerHTML = _e._$getHtmlTemplate('box1', { xlist: data  });

        // 绑定事件
        var _delBtn = _e._$getByClassName('todo', 'todo-item-del');
        _delBtn.forEach(function(btn, index) {
            _v._$addEvent(btn, 'click', showDelModal);
        });
    }
    // 页面初始化
    search(TODO_API.ALL);
};
define(['{lib}base/element.js', '{lib}util/template/tpl.js', '{pro}js/prj/modal.js'], todo);
