var modal = function () {
    var _ = NEJ.P,
        _e = _('nej.e'),
        _o = _('nej.o'),
        _v = _('nej.v'),
        _ui = _('nej.ui'),
        _m = _('nej.modal'),
        _proCustWindow,
        _supCustWindow;

    _m._$$CustWindow = NEJ.C();
    _proCustWindow = _m._$$CustWindow._$extend(_ui._$$WindowWrapper, !0);
    _supCustWindow = _m._$$CustWindow.prototype;


    var _modalTemplate = _e._$addNodeTemplate(`
        <div class="modal">
            <div class="modal-body">
                <p>是否确定删除代办事项?</p>
            </div>
            <div class="modal-control">
                <input type="button" value="取消" class="ccbtn" />
                <input type="button" value="确定" class="okbtn" />
            </div>
        </div>
    `);


    _proCustWindow.__initXGui = function() {
        this.__seed_html = _modalTemplate;
    };
    _proCustWindow.__reset = function(_options) {
        _options.title = '删除代办事项';
        this.__supReset(_options);
    };
    _proCustWindow.__initNode = function() {
        this.__supInitNode();
        var _btn = this.__body.getElementsByTagName('input');
        _v._$addEvent(_btn[0], 'click', this.__onCancle._$bind(this)); // 取消
        _v._$addEvent(_btn[1], 'click', this.__onOK._$bind(this)); // 确定
    };
    _proCustWindow.__onOK = function() {
        this._$dispatchEvent('onok');
        this._$hide();
    };
    _proCustWindow.__onCancle = function() {
        this._$hide()
    };  

    function onOKClick() {
        console.log('default 关闭');
    }

    _m._$showModal = function(_event, okCb) {
        _v._$stop(_event);
        if (!!_windowModal) {
            _windowModal._$recycle();
        }
        _windowModal = _m._$$CustWindow._$allocate({
            onok: okCb || onOKClick,
            destroyable: true,
            parent: _e._$get('root'),
            mask: true,
            draggable: true,
            clazz: 'modal'
        })._$show()
    }


    var _windowModal;
    // _v._$addEvent(_add, 'click', _m._$showModal);
};
define('{pro}js/window.js', ['{lib}ui/layer/window.wrapper.js'], modal);