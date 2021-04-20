
<template>
    <div :id='id' style="height:300px"></div>
</template>

<script>
export default{
    data(){
        return{

        }
    },
    props:{
        id: {
            type: String
        },
        data: {
            type: Array
        },
        title:{
            type: String,
            default: ""
        }
    },
    watch:{
        data(){

        }
    },
    created: function() {

    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            var chartDom = document.getElementById(this.id);
            var myChart = this.$echarts.init(chartDom);
            var option;

        option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLabel: {
                        textStyle: {
                            color: '#ffffff',
                            fontSize:'12'
                        },
                    },  
            },
            yAxis: {
                type: 'value',
                //控制Y轴刻度线样式
                axisLabel: {
                        textStyle: {
                            color: '#ffffff',
                            fontSize:'12'
                        },
                    },  
            //控制Y轴网格线是否显示
                splitLine: {
                    show: false,
                        },
             },
            series: [{
                data: this.data,
                type: 'line',
                smooth: true
            }]
        };

        option && myChart.setOption(option);

        }
    }
}
</script>
