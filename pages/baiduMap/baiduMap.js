import {
    allMapConfig
} from '/services/configService';
var map;
window.onload = function () {
    map = new BMap.Map("allmap"); // 创建Map实例
    var tmpPoint = new BMap.Point(allMapConfig.center[0], allMapConfig.center[1]);
    //默认城市
    // if (parent.avalon && parent.avalon.vmodels['sszhxt_vm']) {
    //     tmpPoint = new BMap.Point(parent.avalon.vmodels['sszhxt_vm'].$cityDetailobj.lon, parent.avalon.vmodels['sszhxt_vm'].$cityDetailobj.lat);
    // }
    let mapCity = JSON.parse(parent.localStorage.getItem('currentDefaultCity'));
    if(mapCity && mapCity.getCityComplete) {
        tmpPoint = new BMap.Point(mapCity.lon, mapCity.lat);
    } else {
        // 防止获取城市请求还没结束就加载了地图
        let time = 0;
        let seconds = 60; // 60s请求无返回后自动清除定时器
        let timer = setInterval(() => {
            if(mapCity && mapCity.getCityComplete) {
                clearInterval(timer);
                esriMap.setCenterAt(mapCity.lon, mapCity.lat);
            }
            time++;
            if(time > (seconds * 5)) {
                clearInterval(timer);
            }
        }, 200);
    }
    map.centerAndZoom(tmpPoint, allMapConfig.level); // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl()); //添加地图类型控件

    map.enableScrollWheelZoom(true);

    var top_left_control = new BMap.ScaleControl({
        anchor: BMAP_ANCHOR_TOP_LEFT
    }); // 左上角，添加比例尺
    var top_left_navigation = new BMap.NavigationControl(); //左上角，添加默认缩放平移控件
    //var size = new BMap.Size(80, 20);
    // map.addControl(new BMap.CityListControl({
    //     anchor: BMAP_ANCHOR_TOP_LEFT,
    //     offset: size,
    //     // 切换城市之间事件
    //     // onChangeBefore: function(){
    //     //    alert('before');
    //     // },
    //     // 切换城市之后事件
    //     // onChangeAfter:function(){
    //     //   alert('after');
    //     // }
    // }))
    map.addControl(top_left_control);
    map.addControl(top_left_navigation);
    map.addEventListener("tilesloaded", function () {
        parent.$('#back-iframe,.backdrop-loading,.backdrop').remove();
        window.loadMapCompelete = true;
    });
    //轨迹起点symbol
    window.startSymbol = window.esriMap.createPicSymbol(32, 48, "../../static/image/sszhxt/begin.png");
    //轨迹终点symbol
    window.endSymbol = window.esriMap.createPicSymbol(32, 48, "../../static/image/sszhxt/end.png");
    //位置symbol
    window.locationSymbol = window.esriMap.createPicSymbol(32, 48, "../../static/image/sszhxt/locate_md.png");
};
