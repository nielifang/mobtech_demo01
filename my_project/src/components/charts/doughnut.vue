<template>
    <div :id="id" style="height:300px"></div>
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
            tooltip: {
                trigger: 'item',
                textStyle:{
                    color:"#ffffff",
                    fontSize:12
                }
            },
            legend: {
                top: '5%',
                left: 'center',
                textStyle:{
                    color:'#ffffff'
                }
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: this.data
                }
            ]
        };

    option && myChart.setOption(option);
        }

    }
}

</script>