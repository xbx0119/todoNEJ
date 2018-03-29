var todo = function () {
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


    var _submitBtn = _e._$get('submit'),
        _titleInput = _e._$get('title'),
        _contentInput = _e._$get('content');

    // 获取列表数据
    const _search = function(url) {
        _j._$request(url, {
            sync: false,
            type: "json",
            data: null,
            method: "GET",
            onload: renderItems
        });
    }

    // 添加请求
    const _add = function() {
        _j._$request('/api/todo', {
            sync: false,
            type: "json",
            data: _u._$object2string({
                "title": _titleInput.value,
                "content": _contentInput.value
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
    _v._$addEvent(_submitBtn, 'click', _add._$bind(this))


    const _del = function(id) {
        _j._$request('/api/todo/' + id, {
            sync: false,
            type: "json",
            data: null,
            method: "DELETE",
            onload: function (data) {
                console.log(data)
                _search(TODO_API.ALL)
            }
        });
    }
    const _showDelModal = function(e) {
        var _id = e.target.parentNode.dataset.key;
        _m._$showModal(e, function() {
            _del(_id)
        });
    }

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

    
    // 页面初始化
    _search(TODO_API.ALL);


    dispatcher._$regist('/', {
        title: 'Todo',
        clazz: 'testtest',
        module: '/index.html'
    });
};
define(['{lib}base/element.js', '{lib}util/template/tpl.js', '{pro}js/prj/modal.js'], todo);
