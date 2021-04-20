<template>

        <router-view></router-view>
    
</template>
<script>
export default {
    data(){
        return {
           
        }
    },
    created:function(){
        
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
    methods: {
       
    }
}
</script>