// ##############################
// // // javascript library for creating charts
// #############################
var Chartist = require('chartist');

// ##############################
// // // variables used to create animation on charts
// #############################
var seq = 0, delays = 80, durations = 500;
var seq2 = 0, delays2 = 80, durations2 = 500;

// ##############################
// // // Email Statistics
// #############################
const emailStatisticsChart = {
    data: {
        labels: ['62%', '32%', '6%'],
        series: [62, 32, 6]
    }
}

// ##############################
// // // Users Behavior
// #############################
const usersBehaviorChart = {
    data: {
        labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
        series: [
            [287, 385, 490, 492, 554, 586, 698, 695, 752]
        ]
    },
    options: {
        low: 0,
        high: 800,
        chartPadding: 0,
        showArea: true,
        height: "245px",
        axisX: {
            showGrid: false,
        },
        axisY: {
            showGrid: false,
        },
        lineSmooth: Chartist.Interpolation.simple({
            divisor: 6
        }),
        showLine: false,
        showPoint: true,
        fullWidth: true
    },
    responsiveOptions: [
        ['screen and (max-width: 640px)', {
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            }
        }]
    ],
    // for animation
    animation : {
        "draw" : function(data) {
            if(data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                });
            } else if(data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        }
    }
}

// ##############################
// // // Sales
// #############################
const salesChart = {
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
            [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
        ]
    },
    options: {
        seriesBarDistance: 10,
        axisX: {
            showGrid: false
        },
        height: "245px"
    },
    responsiveOptions: [
        ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            }
        }]
    ],
    // for animation
    animation: {
        "draw" : function(data) {
            if(data.type === 'bar'){
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        }
    }
}

module.exports = {
    emailStatisticsChart, // Pie chart
    usersBehaviorChart, // Line chart
    salesChart // Bar chart
}
