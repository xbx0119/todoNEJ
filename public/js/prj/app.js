
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
            _l._$getTextTemplate('app-module')
        );
        console.log(this.__body)
        // TODO
    };

    _pro.__onShow = function (_options) {
        console.log("show app")
        this.__super(_options);
        // TODO
    };

    _pro.__onRefresh = function (_options) {
        this.__super(_options);
        // TODO
    };

    _pro.__onHide = function () {
        this.__super();
        // TODO
    };
    // notify dispatcher
    _e._$regist(
        '/m',
        _p._$$ModuleDemo
    );

    return _p;
});
