// 提前禁止avalon对Object.create的实现
if (!Object.create) {
    Object.create = function () {
        function F() {}

        return function (o) {
            F.prototype = o;
            return new F();
        };
    }();
}

if (avalon.msie <= 8) {
    Object.defineProperty = function (obj, property, meta) {
        obj[property] = meta.value;
    };
}