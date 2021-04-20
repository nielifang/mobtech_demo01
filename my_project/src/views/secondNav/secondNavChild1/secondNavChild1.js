export default {
    data(){
        return {
            city:{ // 城市选择
                    show: true,// 目录是否有权限
                    hotList: [], // 热门城市数据  hot等于1的
                    provinceList:[], // 城市选择-选择省的列表
                    city: "", // 城市选择-选择的市
                    lettersCityList: [], // ABCD..的列表（三个级）
                    letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
                },
                
                mapData:[{"from":{"name":"上海","coordinates":[121.480237,31.236305]},
                        "to":{"name":"衡山","coordinates":[112.612787,27.317599]},"count":1},{"from":{"name":"上海","coordinates":[121.480237,31.236305]},
                        "to":{"name":"北京","coordinates":[116.413554,39.911013]},"count":2},{"from":{"name":"上海","coordinates":[121.480237,31.236305]},
                        "to":{"name":"三亚","coordinates":[109.518646,18.258217]},"count":3},{"from":{"name":"上海","coordinates":[121.480237,31.236305]},
                        "to":{"name":"广州","coordinates":[113.270793,23.135308]},"count":4},{"from":{"name":"上海","coordinates":[121.480237,31.236305]},
                        "to":{"name":"韶关","coordinates":[113.603757,24.816174]},"count":4}]
        }
    },
    
    props:{
        /**
         * 选中的城市数据
         */
        selectedCityData:{
            type: Object,
            default() {
                return {};
            }
        }
    },
    watch: {

    },
    created:function(){
        this.getCityList();
        this.moveLine()
        
    },
    mounted(){
        this.moveLine()
    },
    methods: {
        goCity(cityData){
            this.$emit('on-select-change', cityData)
        },
        // 获取省列表
        getCityList() {
            this.city.hotList=[{
                value:'北京',label:'北京'},
                {value:'上海',label:'上海'}
            ]

            // this.$ajax_gCityList()
            // .then(res => {
            //     let cityIndex=0

            //     let datas = []

            //     let hots=[]

            //     for (let i=0,l=res.data.content.length; i<l; i++){
            //         if (res.data.content[i].hot==1){
            //             hots.push({
            //                 value: res.data.content[i],
            //                 label: res.data.content[i].name
            //             })
            //         }
            //         if (res.data.content[i].type==1){
            //             datas.push({
            //                 label: res.data.content[i].name,
            //                 value: res.data.content[i].code,
            //                 info: res.data.content[i],
            //                 children: []
            //             })
            //         }
            //     }
            //     for (let i=0,l=res.data.content.length; i<l; i++){
            //         if (res.data.content[i].type==2){
            //             for (let a=0,b=datas.length; a<b; a++){
            //                 if (datas[a].value==res.data.content[i].parentCode){
            //                     datas[a].children.push({
            //                         value: res.data.content[i],
            //                         label: res.data.content[i].name
            //                     })
            //                 }
            //                 if (datas[a].value=='cn1'){
            //                     cityIndex=a
            //                 }
            //             }
            //         }
            //     }
            //     this.city.hotList=hots
            // })
            // .catch(err => {
            //     if (err.response.status==401){
            //         this.city.hotList=[{
            //             value:'北京',label:'北京'},
            //             {value:'上海',label:'上海'}
            //         ]
            //     }
            // })
        },

        moveLine(){
            this.gmap_moveline("map-home",this.mapData)
        }
        
    }
}