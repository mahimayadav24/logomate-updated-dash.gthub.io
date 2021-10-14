
var options = {
    series: [
        {
            name: 'Revenue',
            data: [35, 41, 36, 26, 45, 48, 52]
        }, {
            name: 'Free Cash Flow',
            data: [39, 44, 40, 30, 49, 52, 56]
        }
    ],
    chart: {
        type: 'bar',
        height: 300
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '30%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
        title: {
            text: '$ (thousands)'
        }
    },
    fill: {
        opacity: 1,
        colors: ['#0BB783', '#D7F9EF']
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render()