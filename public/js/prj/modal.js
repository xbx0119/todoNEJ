var modal = function () {
    var _ = NEJ.P,
        _e = _('nej.e'),
        _o = _('nej.o'),
        _v = _('nej.v'),
        _ui = _('nej.ui'),
        _p = _('nej.demo'),
        _proCustWindow,
        _supCustWindow;


    var _modal = _e._$addNodeTemplate(`
        <div class="modal" id="modal">
            <div class="modal-body">
                body
            </div>
            <div class="modal-control">
                <input type="button">确定</input>
                <input type="button">取消</input>
            </div>
        </div>
    `);

    _p._$$CustWindow = NEJ.C();
    _proCustWindow = _p._$$CustWindow._$extend(_ui._$$WindowWrapper, !0);
    _supCustWindow = _p._$$CustWindow.prototype;

    _proCustWindow__initXGui = function() {
        
    }

    _proCustWindow.__reset = function(_options) {
        _options.title = '标题信息';
        this.__supReset(_options)
    }

    _proCustWindow.__initNode = function() {
        this.__supInitNode();
        var _btn = _e._$get('modal').getElemenstByClassName('input');
        _v._$addEvent(_btn[0], 'click', this.__onOK._$bind(this));
        _v._$addEvent(_btn[1], 'click', this.__onCancle._$bind(this));
    }

    _proCustWindow.__onOK = function() {
        this._$dispatchEvent('onok');
        this._$hide();
    }

    _proCustWindow.__onCancle = function() {
        this._$hide()
    }

    var _add = _e._$get('add'), _window;

    _v._$addEvent(_add, 'click', showModal);

    function showModal(_event) {
        _v._stop(_event);
        if(!!_window) {
            _window._$recycle();
            _window = _p._$$CustWindow._$allocate({
                onok: onOKClick,
                destroyable: true,
                parent: _e._$get('root'),
                mask: true,
                draggable: true,
                clazz: 'w-win'
            })._$show()
        }
    }

    function onOKClick() {
        alert('关闭');
    }


};
define('{pro}js/window.js', ['{lib}ui/layer/window.wrapper.js'], modal);