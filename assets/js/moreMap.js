/**
 * Created by llan on 2017/5/17.
 */
function init() {
    // 百度地图API功能
    map = new BMap.Map("allmap");
    map.centerAndZoom(new BMap.Point(113.107122,24.032431), 8);
    var data_info = [[113.307655,22.973554,'地址：广州市番禺区钟村105国道钟村装饰城二楼C1-236<br/>电话：020-84519779<br/>'],
        [113.605275,24.809452,'地址：韶关市浈江区风度中路29号银好饰品<br/>电话：13580140705<br/>'],
        [113.094215,22.582833,'地址：江门市蓬江区常安路步行街145号纯银时代<br/>电话：15813793340<br/>'],
        [113.09522,22.581143,'地址：江门市蓬江区常安路步行街58号银蒂尼<br/>电话：13424905133<br/>'],
        [112.96808,22.771013,'地址：鹤山市沙坪镇中山路64号纯银时代<br/>电话：13672841416<br/>'],
        [112.386163,24.785643,'地址：清远市连州东门南路112号 <br/>电话：13750155089<br/>'],
        [113.837622,23.302199,'地址：增城市荔城镇中山路85号<br/>电话：13640792399<br/>'],
        [112.797449,22.257173,'地址：台山市台西路步行街65号银蒂尼<br/>电话：15014333511<br/>'],
        [108.328974,22.82001,'地址：广西南宁市兴宁区朝阳路悦荟广场A1100银蒂尼<br/>电话：18801041410<br/>'],
        [114.318752,25.121686,'地址：韶关翁源县龙仙镇建设2路69号银蒂尼<br/>电话：13420555799<br/>'],
        [110.080411,23.37705,'地址：广西省桂平市西山镇桂南路518号纯银时代<br/>电话：15077555939<br/>'],
        [109.988152,22.26679,'地址：广西博白县博白镇南州南路16号纯银时代<br/>电话：13591796494<br/>'],
        [108.347486,21.617285,'地址：广西防城港市港口区世界风情步行街富裕路130号纯银时代<br/>电话：15777006920<br/>'],
    ];
    var opts = {
        width : 250,     // 信息窗口宽度
        height: 100,     // 信息窗口高度
        title : "联系方式" // 信息窗口标题
    };
    for(var i=0;i<data_info.length;i++){
        var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));  // 创建标注
        var content = data_info[i][2];
        map.addOverlay(marker);               // 将标注添加到地图中
        addClickHandler(content,marker);
    }
    function addClickHandler(content,marker){
        marker.addEventListener("click",function(e){
            openInfo(content,e)}
        );
    }
    function openInfo(content,e){
        var p = e.target;
        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
        var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
        map.openInfoWindow(infoWindow,point); //开启信息窗口
    }
}
function loadJs() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=FN5nArrKGoLLGOHu8YS7CVjWn7GShoDH&callback=init";
    document.body.appendChild(script);
}
(function () {
    loadJs();
})(jQuery);
