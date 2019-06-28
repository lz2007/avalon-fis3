
// const avalon = require('avalon2');
import 'es5-shim'
import avalon from 'avalon2';
import jQuery from 'jquery';
import './apps/common/common';
let {
    routerserver
} = require('/services/routerService');

avalon.log(avalon);
avalon.log(jQuery.fn.jquery);
// avalon.log(routerserver);

avalon.define({
    $id: "test",
    test: '单页面测试',
    currentPage:''
});

// test es6
// es6 箭头函数写法，当函数直接被return时，可以省略函数体的括号
const fn = (a, b) => a + b;
avalon.log(fn(1,2));

routerserver('test');

// history
avalon.history.start({
    root: "/",
    fireAnchor: false
});

if (!/#!/.test(window.location.hash)) {
    avalon.router.navigate('/', 2);
}

avalon.scan(document.body);