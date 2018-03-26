var modal = function () {
    var _ = NEJ.P,
        _e = _('nej.e'),
        _o = NEJ.P('nej.o'),
        _v = NEJ.P('nej.v'),
        _ui = NEJ.P('nej.ui'),
        _p = _('nej.demo'),
        _proCustWindow,
        _supCustWindow;
    var _seed_css = _e._$pushCSSText('.#<uispace>{background:#fff;line-height:26px;width:400px;}\
	        .#<uispace> .itm{color:#000;padding:40px 0;cursor:pointer}\
			.#<uispace> .btns{border-top:1px solid #ccc;padding:10px 0}\
			.#<uispace> .okbtn,.#<uispace> .ccbtn{border:1px solid #ccc;margin-right:20px}');
    // ui html code
    var _seed_html = _e._$addNodeTemplate('<div class="' + _seed_css + '">\
	    		 									<div class="itm pnt">窗体应用,点击拖动</div>\
	    											<div class="btns"><input type="button" value="确定" class="okbtn w-btn"/><input type="button" value="取消"  class="ccbtn  w-btn"/></div>\
	    									   </div>');


    _p._$$CustWindow = NEJ.C();
    _proCustWindow = _p._$$CustWindow._$extend(_ui._$$WindowWrapper, !0);
    _supCustWindow = _p._$$CustWindow.prototype;

	/**
	 * 初始化外观信息
	 * 
	 * @return {Void}
	 */
    _proCustWindow.__initXGui = function () {
        this.__seed_css = _seed_css;
        this.__seed_html = _seed_html;
    };
	/**
	 * 控件重置
	 * 
	 * @param {Object}
	 *            _options 可选配置参数 
	 *            	itemclick	卡片点击回调
	 * @return {Void}
	 */
    _proCustWindow.__reset = function (_options) {
        _options.title = '标题信息';
        this.__supReset(_options);
    };
	/**
	 * 初始化节点
	 * 
	 * @return {Void}
	 */
    _proCustWindow.__initNode = function () {
        this.__supInitNode();
        var _ntmp = this.__body.getElementsByTagName('input');
        _v._$addEvent(_ntmp[0], 'click', this.__onOKClick._$bind(this));
        _v._$addEvent(_ntmp[1], 'click', this.__onCCClick._$bind(this));
    };
	/**
	 * 
	 */
    _proCustWindow.__onOKClick = function () {
        this._$dispatchEvent('onok');
        this._$hide();
    };
	/**
	 * 
	 */
    _proCustWindow.__onCCClick = function () {
        this._$hide();
    };

    var _input = _e._$get('add'), _window;

    _v._$addEvent(_input, 'click', onWindowClick);

    function onWindowClick(_event) {
        _v._$stop(_event);
        if (!!_window) _window._$recycle();
        _window = _p._$$CustWindow._$allocate({ onok: onOKClick, destroyable: true, parent: _e._$get('root'), mask: true, draggable: true, clazz: 'w-win' })._$show();
    }
    function onOKClick() {
        alert('关闭');
    }
};
define('{pro}js/window.js', ['{lib}ui/layer/window.wrapper.js'], modal);