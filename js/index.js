$(function () {
  gundong();
  // 递归无循轮播
  function gundong() {

    $('.rowbox').animate({ top: '-175px' }, 6000, 'linear', function () {
      $(this).css('top', '0');
      gundong();
    })
  }
  //设备tab栏切换
  $('.monitor>.tab>ul>li').mouseenter(function(){
     $(this).css('cursor','pointer');
  });
   $('.monitor>.tab>ul>li').click(function(){
     $(this).children().addClass('active').end().siblings().children().removeClass('active');
      if($(this).children().text()=='故障设备监控'){
            $('.carousel .titleTime').text('故障时间');
            $('.carousel .address').text('深圳市宝安区石岩路3栋4楼407室岩路3栋4楼407室');
            $('.carousel .code').text('1000100');
      }else
         {
        $('.carousel .titleTime').text('异常时间');
        $('.carousel .address').text('深圳市福田区步行街天安路3栋4楼407室岩路3栋4楼407室');
        $('.carousel .code').text('1000111');
      }

   });
   var orderData = [
    { orders: '20,301,987', amount: '99834' },
    { orders: '301,987', amount: '9834' },
    { orders: '1,987', amount: '3834' },
    { orders: '987', amount: '834' }
];
    //订单tab
   $('.order .fillter>a').click(function(){
   var index = $(this).addClass('active').siblings().removeClass('active').end().index();
    //找出需要修改的两个元素
    $('.order .data .item').eq(0).children('.count').text(orderData[index].orders);
    $('.order .data .item').eq(1).children('.count').text(orderData[index].amount);
  });
  //鼠标移入热榜事件处理 把数组中最后一个元素放到第一位加载到dom树里
  var hotData = [
    { name: '可爱多', num: '9,086' },
    { name: '娃哈哈', num: '8,341' },
    { name: '喜之郎', num: '7,407' },
    { name: '八喜', num: '6,080' },
    { name: '小洋人', num: '6,724' },
    { name: '好多鱼', num: '2,170' },
  ];
 
    $('.province .rank:nth-of-type(1)>li').mouseenter(function(){
      $(this).css('cursor','pointer');
        // 修改数组
         var last = hotData.pop();
         hotData.unshift(last);
         //取出数组数据 赋值给dom树里的元素
         for(var i = 0;i<hotData.length;i++){
            $('.province .rank:nth-of-type(2)>li').eq(i).children().eq(0).text(hotData[i].name);
            $('.province .rank:nth-of-type(2)>li').eq(i).children().eq(1).text(hotData[i].num);
         }
    });
})
 
//饼图制作
$(function () {
  var myChart = echarts.init($('.pie')[0]);
  option = {

    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    //设置颜色
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8',
      '#32c5e9', '#1d9dff'],

    series: [
      {
        name: '面积模式',
        type: 'pie',
        radius: ["10%", '40%'],
        center: ['50%', '50%'],
        roseType: 'area',
        data: [
          { value: 10, name: '云南' },
          { value: 17, name: '北京' },
          { value: 15, name: '山东' },
          { value: 17, name: '河北' },
          { value: 10, name: '江苏' },
          { value: 16, name: '渐江' },
          { value: 20, name: '四川' },
          { value: 25, name: '湖北' }
        ]
      }
    ]
  };

  //3.3 开始加载图表
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})

// 柱图制造
$(function () {
  //自定义内容样式
  var item = {
    value: 1400,
    itemStyle: {
      color: '#254065',
      opacity: 0.5,
    }
  };
  var myChart = echarts.init($('.bar')[0]);
  option = {
    color: ['#3398DB'],

    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['上海', ' ', '北京', ' ', '合肥', '', '...', '', '杭州', '', '济南', ' ', '重庆'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#013c4f'
          }
        },
        splitLine: {
          lineStyle: {
            // 使用深浅的间隔色
            color: ['#013c4f']
          }
        }

      },
      {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#013c4f'
          }
        }
      }

    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: [2100, 1800, 1755, 1722, 1688, item, item, item, 800, 700, 688, 600, 555],
        itemStyle: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#00f4f8' },
              { offset: 1, color: '#0065cf' }
            ]
          )
        },
      }
    ]
  }
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})
//中国地图
$(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init($('.geo')[0]);
  var chinaGeoCoordMap = {
    '黑龙江': [127.9688, 45.368],
    '上海': [121.4648, 31.2891],
    '东莞': [113.8953, 22.901],
    '东营': [118.7073, 37.5513],
    '中山': [113.4229, 22.478],
    '临汾': [111.4783, 36.1615],
    '临沂': [118.3118, 35.2936],
    '丹东': [124.541, 40.4242],
    '丽水': [119.5642, 28.1854],
    '乌鲁木齐': [87.9236, 43.5883],
    '佛山': [112.8955, 23.1097],
    '保定': [115.0488, 39.0948],
    '兰州': [103.5901, 36.3043],
    '包头': [110.3467, 41.4899],
    '北京': [116.4551, 40.2539],
    '北海': [109.314, 21.6211],
    '南京': [118.8062, 31.9208],
    '南宁': [108.479, 23.1152],
    '南昌': [116.0046, 28.6633],
    '南通': [121.1023, 32.1625],
    '厦门': [118.1689, 24.6478],
    '台州': [121.1353, 28.6688],
    '合肥': [117.29, 32.0581],
    '呼和浩特': [111.4124, 40.4901],
    '咸阳': [108.4131, 34.8706],
    '哈尔滨': [127.9688, 45.368],
    '唐山': [118.4766, 39.6826],
    '嘉兴': [120.9155, 30.6354],
    '大同': [113.7854, 39.8035],
    '大连': [122.2229, 39.4409],
    '天津': [117.4219, 39.4189],
    '太原': [112.3352, 37.9413],
    '威海': [121.9482, 37.1393],
    '宁波': [121.5967, 29.6466],
    '宝鸡': [107.1826, 34.3433],
    '宿迁': [118.5535, 33.7775],
    '常州': [119.4543, 31.5582],
    '广州': [113.5107, 23.2196],
    '廊坊': [116.521, 39.0509],
    '延安': [109.1052, 36.4252],
    '张家口': [115.1477, 40.8527],
    '徐州': [117.5208, 34.3268],
    '德州': [116.6858, 37.2107],
    '惠州': [114.6204, 23.1647],
    '成都': [103.9526, 30.7617],
    '扬州': [119.4653, 32.8162],
    '承德': [117.5757, 41.4075],
    '拉萨': [91.1865, 30.1465],
    '无锡': [120.3442, 31.5527],
    '日照': [119.2786, 35.5023],
    '昆明': [102.9199, 25.4663],
    '杭州': [119.5313, 29.8773],
    '枣庄': [117.323, 34.8926],
    '柳州': [109.3799, 24.9774],
    '株洲': [113.5327, 27.0319],
    '武汉': [114.3896, 30.6628],
    '汕头': [117.1692, 23.3405],
    '江门': [112.6318, 22.1484],
    '沈阳': [123.1238, 42.1216],
    '沧州': [116.8286, 38.2104],
    '河源': [114.917, 23.9722],
    '泉州': [118.3228, 25.1147],
    '泰安': [117.0264, 36.0516],
    '泰州': [120.0586, 32.5525],
    '济南': [117.1582, 36.8701],
    '济宁': [116.8286, 35.3375],
    '海口': [110.3893, 19.8516],
    '淄博': [118.0371, 36.6064],
    '淮安': [118.927, 33.4039],
    '深圳': [114.5435, 22.5439],
    '清远': [112.9175, 24.3292],
    '温州': [120.498, 27.8119],
    '渭南': [109.7864, 35.0299],
    '湖州': [119.8608, 30.7782],
    '湘潭': [112.5439, 27.7075],
    '滨州': [117.8174, 37.4963],
    '潍坊': [119.0918, 36.524],
    '烟台': [120.7397, 37.5128],
    '玉溪': [101.9312, 23.8898],
    '珠海': [113.7305, 22.1155],
    '盐城': [120.2234, 33.5577],
    '盘锦': [121.9482, 41.0449],
    '石家庄': [114.4995, 38.1006],
    '福州': [119.4543, 25.9222],
    '秦皇岛': [119.2126, 40.0232],
    '绍兴': [120.564, 29.7565],
    '聊城': [115.9167, 36.4032],
    '肇庆': [112.1265, 23.5822],
    '舟山': [122.2559, 30.2234],
    '苏州': [120.6519, 31.3989],
    '莱芜': [117.6526, 36.2714],
    '菏泽': [115.6201, 35.2057],
    '营口': [122.4316, 40.4297],
    '葫芦岛': [120.1575, 40.578],
    '衡水': [115.8838, 37.7161],
    '衢州': [118.6853, 28.8666],
    '西宁': [101.4038, 36.8207],
    '西安': [109.1162, 34.2004],
    '贵阳': [106.6992, 26.7682],
    '连云港': [119.1248, 34.552],
    '邢台': [114.8071, 37.2821],
    '邯郸': [114.4775, 36.535],
    '郑州': [113.4668, 34.6234],
    '鄂尔多斯': [108.9734, 39.2487],
    '重庆': [107.7539, 30.1904],
    '金华': [120.0037, 29.1028],
    '铜川': [109.0393, 35.1947],
    '银川': [106.3586, 38.1775],
    '镇江': [119.4763, 31.9702],
    '长春': [125.8154, 44.2584],
    '长沙': [113.0823, 28.2568],
    '长治': [112.8625, 36.4746],
    '阳泉': [113.4778, 38.0951],
    '青岛': [120.4651, 36.3373],
    '韶关': [113.7964, 24.7028]
  };
  var chinaDatas = [
    [{
      name: '西安',
      value: 0.88
    }],
    [{
      name: '北京',
      value: 0.5
    }],
    [{
      name: '上海',
      value: 0.7
    }],
    [{
      name: '广州',
      value: 0.6
    }],
    [{
      name: '西宁',
      value: 0.5
    }],
    [{
      name: '银川',
      value: 0.4
    }],
    [{
      name: '长沙',
      value: 0.1
    }],
    [{
      name: '南京',
      value: 0.9
    }],
    [{
      name: '扬州',
      value: 0.2
    }],
    [{
      name: '沈阳',
      value: 0.3
    }],
    [{
      name: '成都',
      value: 0.6
    }],
    [{
      name: '济南',
      value: 0.1
    }],
    [{

      name: '乌鲁木齐',
      value: 0.1
    }],
    [{

      name: '深圳',
      value: 0.3
    }],
    [{

      name: '福州',
      value: 0.3
    }],


  ];

  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var fromCoord = chinaGeoCoordMap[dataItem[0].name];
      var toCoord = [113.4668, 34.6234];
      if (fromCoord && toCoord) {
        res.push([{
          coord: fromCoord,
          value: dataItem[0].value
        }, {
          coord: toCoord,
        }]);
      }
    }
    return res;
  };
  var series = [];
  [
    ['郑州', chinaDatas]
  ].forEach(function (item, i) {
    series.push({
      type: 'lines',
      zlevel: 2,
      effect: {
        show: true,
        period: 4, //箭头指向速度，值越小速度越快
        trailLength: 0.05, //特效尾迹长度[0,1]值越大，尾迹越长重
        color: '#ffffff',
        symbol: 'arrow', //箭头图标
        symbolSize: 6, //图标大小
      },
      lineStyle: {
        normal: {
          width: 1, //尾迹线条宽度
          opacity: 1, //尾迹线条透明度
          curveness: .3 //尾迹线条曲直度
        }
      },
      data: convertData(item[1])
    }, {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: { //涟漪特效
        period: 3, //动画时间，值越小速度越快
        brushType: 'stroke', //波纹绘制方式 stroke, fill
        scale: 3 //波纹圆环最大限制，值越大波纹越大
      },
      label: {
        normal: {
          show: true,
          position: 'right', //显示位置
          offset: [5, 0], //偏移设置
          formatter: function (params) { //圆环显示文字
            return params.data.name;
          },
          fontSize: 13,
          color: "#f0f0f0"
        },
        emphasis: {
          show: true
        }
      },
      symbol: 'circle',
      symbolSize: function (val) {
        return 8; //圆环大小
      },
      itemStyle: {
        normal: {
          show: false,
          color: '#f00'
        }
      },
      data: item[1].map(function (dataItem) {
        return {
          name: dataItem[0].name,
          value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
        };
      }),
    },
      //被攻击点
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: { //涟漪特效
          period: 4, //动画时间，值越小速度越快
          brushType: 'stroke', //波纹绘制方式 stroke, fill
          scale: 4 //波纹圆环最大限制，值越大波纹越大
        },
        label: {
          normal: {
            show: true,
            position: 'right', //显示位置
            offset: [5, 0], //偏移设置
            formatter: function (params) { //圆环显示文字
              return params.data.name;
            },
            fontSize: 16,
            color: "#ffffff"
          },
          emphasis: {
            show: true
          }
        },
        symbol: 'circle',
        symbolSize: function (val) {
          return 15; //圆环大小
        },
        itemStyle: {
          normal: {
            show: false,
            color: '#f00'
          }
        },
        data: [{
          name: item[0],
          value: chinaGeoCoordMap[item[0]].concat([10]),
        }],
      }
    );
  });

  option = {
    backgroundColor: "#0e2469",
    tooltip: {
      trigger: 'item',
      borderColor: '#FFFFCC',
      showDelay: 0,
      hideDelay: 0,
      enterable: true,
      transitionDuration: 0,
      extraCssText: 'z-index:100',
      formatter: function (params, ticket, callback) {
        //根据业务自己拓展要显示的内容
        var res = "";
        var name = params.name;
        var value = params.value[params.seriesIndex + 1];
        res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
        return res;
      }
    },
    visualMap: { //图例值控制
      min: 0,
      max: 1,
      calculable: true,
      show: true,
      color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
      textStyle: {
        color: '#fff'
      }
    },
    geo: {
      map: 'china',
      zoom: 1.2,
      label: {
        emphasis: {
          show: false
        }
      },
      roam: true, //是否允许缩放
      itemStyle: {
        normal: {
          color: 'rgba(10, 37, 105, 0.5)', //地图背景色
          borderColor: '#4bf5ff', //省市边界线00fcff 516a89
          borderWidth: 2
        },
        emphasis: {
          color: 'rgba(37, 43, 61, .5)' //悬浮背景
        }
      }
    },
    series: series
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})
//折线图
$(function () {
  var myChart = echarts.init($('.sale .chart')[0]);
  //年季月周  二维数组
  //数据
  var data = [
    [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ],
    [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
    ],
    [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
    ],
    [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
    ]
  ];

 var option = {
    title: {
      text: '单位：万',
      textStyle: {
        color: '#3370bc'
      },

    },
    tooltip: {
      trigger: 'axis'
    },
    //图例
    legend: {
      data: ['预期销售额', '实际销售额'],
      right: 100
    },

    // x轴
    xAxis: {
      type: 'category',
      boundaryGap: false,
      // data: ['1月', '3月', '5月', '7月', '9月', '11月']
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisLabel: {
        color: '#0078d4'
      },
      axisTick: {
        show: true,
        length: 6,
        //刻度线样式
        lineStyle: {
          color: '#0078d4'
        }
      },
      //坐标轴轴线
      axisLine: {
        lineStyle: {
          color: '#0078d4'
        }
      }
    },
    yAxis: {
      type: 'value',
      //刻度线设置
      axisTick: {
        show: true,
        length: 6,
        //刻度线样式
        lineStyle: {
          color: '#0078d4'
        }
      },
      //刻度文字
      axisLabel: {
        color: '#0078d4'
      },
      //y轴分割线
      splitLine: {
        show: true,
        //线条样式
        lineStyle: {
          color: ['#0078d4'],
          width: 1,
        }
      },
      //坐标轴轴线
      axisLine: {
        lineStyle: {
          color: '#0078d4'
        }
      }
    },
    //内容间距(类似于padding)
    grid: {
      left: '3%',
      right: '4%',
      bottom: '2%',

      containLabel: true
    },
    series: [
      {
        name: '预期销售额',
        type: 'line',
        data: data[0][0],
        lineStyle: {
          color: '#009eae',
        },
        smooth: true,
      },
      {
        name: '实际销售额',
        type: 'line',
        data: data[0][1],
        lineStyle: {
          color: '#c83631',
        },
        smooth: true,


      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  // 销售统计排它
$(function () {
  //排它
  var obj = {};
  obj.index = 0;
  var myChart = echarts.init($('.sale .chart')[0]);
  $('.period a').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var index = $(this).index(); 
    obj.index = index;
    option.series[0].data = data[obj.index][0];
    option.series[1].data = data[obj.index][1];
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  });
  //轮播折线图
  
  setInterval(function () {
  
    obj.index == $('.period a').length ?obj.index= 0 : obj.index++;
    $('.period a').eq(obj.index).click();
  }, 3000);

});
})
// 环形图
$(function () {

  var myChart = echarts.init($('.quarter .gauge')[0]);
  option = {
    color: ['#0085cc', '#12274d', 'transparent'],
    series: [
      {

        startAngle: 180,
        type: 'pie',
        radius: ['150%', '200%'],
        center: ['50%', '100%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        data: [
          { value: 60 },
          { value: 40 },
          { value: 100, color: 'red' },

        ]
      }
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})
