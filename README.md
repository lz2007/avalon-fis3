# avalon-fis3
fis3 搭建 avalon 开发环境，兼容ie8

## 项目介绍

1.fis3 搭建 avalon 开发环境，兼容ie8
2.单页面spa开发
3.多页面开发

## 软件架构

软件架构说明

## 安装教程

1. 安装nodejs 6.x https://nodejs.org/zh-cn/download/releases/
2. git clone https://github.com/lz2007/avalon-fis3.git
3. cd avalon-fis3
4. npm install -g cnpm --registry=https://registry.npm.taobao.org
5. cnpm install
5. npm run dev

or

1.npm install yarn
2.yarn
3.yarn dev

## 使用说明

1. fis3 支持 node 版本 6.x

## 开始

1. 将bin目录添加到系统path变量，并重启让其生效。

2. 日常运行项目
  ``` bash
  npm run dev           //开发
  npm run build         //发布
  npm run zip 项目名     //ZIP打包
  npm run clean         //清理
  ```


## 目录结构

```
- apps            // 将页面按功能和业务切分后的模块
  + common        // 命名规范：[业务名称] / [业务名称]-[模块名称] .[html,js,css,less]
  - gf             // gf 业务下的 user 模块
    - gf-user.html      // 模块的页面结构
    - gf-user.js        // 模块的业务逻辑
    - gf-user.css       // 模块的表现样式
    - gf-group.js
    - ...
- mock                  // 模拟后端服务的数据
  - server.conf         // api数据路由（此文件不能删除或改名）
  - ......              // 自定义的json数据
+ pages                 // 除 index.html 的完整 HTML 页面，用于多页面应用
- services              // 超脱页面的业务逻辑模块
  - ajaxService.js      // 封装 ajax 方法，规范请求参数和响应数据的格式, 根据响应结果显示提示信息
  - configService.js    // 应用的配置项，可在构建时动态替换配置项
  - filterService.js    // 自定义的 Avalon2 过滤器
  - routerService.js    // 路由配置
- static                // 非 commonjs 模块化的资源
  - mod.js
+ vendor                // 不能通过 npm 安装的模块
- index.html            // 应用主页面
- index.css             // 应用主样式
- index.js              // 应用启动，包括 polyfill/必要的依赖/root VM/路由启动
```


## 关于雪碧图
```
1、build的时候会对 CSS 中，路径带 ?__sprite 的图片进行合并。仅对CSS文件中添加了此标志的雪碧图才会被处理，而其他HTML和JS中无效；
2、请尽量使用字体或者png格式的图片；
3、图片请使用原大小插入，不允许拉伸，不然合并后会变小或者变大；
```

## 浏览器支持

现代浏览器、IE8 及以上


## 参考网站
http://avalonjs.coding.me/
https://www.easy-mock.com/
