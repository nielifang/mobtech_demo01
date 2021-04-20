export default {
    data(){
        return {
            headerNavData:[{
                id:"one",
                name:"一级导航I"
            },
            {
                id:"two",
                name:'一级导航II'
            },
            {
                id:"three",
                name:"一级导航III"
            }
            ]
        }
    },
    props:{
        product_name:{
            type:String,
            default:''
        }
    },
    methods:{
        
    }

}