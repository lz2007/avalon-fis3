module.exports = {

    // 地图配置项
    allMapConfig: {
        // ====== 公共配置项 ==========
        // 中心点/经纬度（这里的经纬度设置已被丢弃不起作用，请用defalutCity进行配置）
        center: [113.2744940000, 23.1484710000],
        // 缩放级别（不同地图级别不一样，进行相应的配置）
        level: 9
    },

    /**
     * ======================ajax请求配置======================
     * 
     */

    //  请求超时时间 （默认：10分钟）
    ajaxTimeout: 10 * 60 * 1000,

    //  运行监控查询间隔时间-单位毫秒 （默认：1分钟）
    interval: 60000,


    /**
     * ======================系统固定常量配置======================
     * 开发、打包环境变量，勿修改
     */

    domain: '__DOMAIN__',

    serviceUrl: '__SERVICE_URL__',

    apiUrl: '__API_URL__'
};