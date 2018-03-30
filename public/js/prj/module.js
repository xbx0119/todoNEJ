NEJ.define([
    'base/klass',
    'util/dispatcher/module'
], function (_k, _t, _p) {
    var _pro;
    /**
     * 项目模块基类对象
     * @class   {_$$Module}
     * @extends {_$$ModuleAbstract}
     * @param   {Object}  可选配置参数，已处理参数列表如下所示
     */
    _p._$$Module = _k._$klass();
    _pro = _p._$$Module._$extend(_t._$$ModuleAbstract);
    /**
     * 操作
     * @param  {Object}
     * @return {Void}
     */
    _pro.__doSomething = function (_args) {
        // TODO
        console.log("do sth")
    };

    // TODO

    return _p;
});