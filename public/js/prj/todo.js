var todo = function () {
    var _ = NEJ.P,
        _e = _('nej.e'),
        _u = _('nej.u'),
        _v = _('nej.v'),
        _j = _('nej.j'),
        _m = _('nej.modal');    

    var _t = NEJ.C();
    
    const _TODO_API = {
        ALL: '/api/todo_all',
        DONE: '/api/todo_done',
        UNDO: '/api/todo_undo'
    }

    // 获取列表数据
    const _search = function(url, cb) {
        _j._$request(url, {
            sync: false,
            type: "json",
            data: null,
            method: "GET",
            onload: cb || renderItems
        });
    }

    // 添加请求
    const _add = function(data) {
        _j._$request('/api/todo', {
            sync: false,
            type: "json",
            data: _u._$object2string({
                "title": data.title,
                "content": data.content
            }, '&'),
            method: "POST",
            onload: function (data) {
                if(data) {
                    window.location.href = '/';
                }else {
                    alert("添加出错")
                }
            }
        });
    };
    


    const _del = function(id) {
        _j._$request('/api/todo/' + id, {
            sync: false,
            type: "json",
            data: null,
            method: "DELETE",
            onload: function (data) {
                console.log(data)
                _search(_TODO_API.ALL)
            }
        });
    }
    const _showDelModal = function(e) {
        var _id = e.target.parentNode.dataset.key;
        _m._$showModal(e, function() {
            _del(_id)
        });
    }

    const _edit = function (id, data) {
        console.log(data)
        _j._$request('/api/todo/' + id, {
            sync: false,
            type: "json",
            data: _u._$object2string({
                "title": data.title,
                "content": data.content
            }, '&'),
            method: "PUT",
            onload: function (data) {
                if (data) {
                    // window.location.href = '/';
                } else {
                    alert("修改出错")
                }
            }
        });
    };

    const _check = function(e) {
        console.log(e.target.parentNode.dataset.key)
    }

    
    // 解析模板
    _e._$parseTemplate('template');
    // 渲染列表
    const renderItems = function (data) {
        var _todolist = _e._$get('todo-list');
        _todolist.innerHTML = _e._$getHtmlTemplate('box1', { xlist: data  });

        // 绑定事件
        var _delBtn = _e._$getByClassName('todo-list', 'todo-item-del');
        _delBtn.forEach(function(btn, index) {
            _v._$addEvent(btn, 'click', _showDelModal);
        });

        var _delBtn = _e._$getByClassName('todo-list', 'todo-item-check');
        _delBtn.forEach(function(btn, index) {
            _v._$addEvent(btn, 'click', _check);
        });
    }
    
    _t._$api = _TODO_API;

    _t._$search = _search;
    _t._$add = _add;
    _t._$edit = _edit;

    return _t;
};
define(['{lib}base/element.js', '{lib}util/template/tpl.js', '{pro}js/prj/modal.js'], todo);
