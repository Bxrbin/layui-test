window.onload = () => {
    //流量趋势数据链接
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        title: {
            text: '今日流量趋势'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: 'rgb(126,202,195)'
                }
            }
        },
        legend: {
            data: ['PV', 'UV']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['06:00', '07:00', '08:00', '09:00', '10:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: 'PV',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [11, 33, 55, 5555, 12666, 3333, 666, 2666, 6666, 3999, 1777, 655, 333, 311, 588, 166, 88]
            },
            {
                name: 'UV',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [111, 333, 555, 55555, 666666, 33333, 6666, 26666, 56666, 39999, 17777, 6555, 3333, 3111, 5888, 1666, 888]
            }
        ]
    };
    option && myChart.setOption(option);
    //注意进度条依赖 element 模块，否则无法进行正常渲染和功能性操作
    layui.use('element', function () {
        var element = layui.element;
    });



    $('#w_input_all').on('click', function () {
        let inp = $(this).find('input').prop('checked')
        console.log(inp);
        if (inp == true) {
            $('.layui-form-checkbox').addClass('layui-form-checked');
        } else {
            $('.layui-form-checkbox').removeClass('layui-form-checked');
        }
    });
    $('.w_ul_move').find('li').hover(function () {
        $(this).addClass('w_box_h1_li').siblings('li').removeClass('w_box_h1_li');
        let index = $(this).index();

    })
}