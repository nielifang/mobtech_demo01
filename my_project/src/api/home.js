import axios from 'axios'
const API__MOB = 'https://api.estate.eye.mob.com'
// Vue.prototype.g_storage=window.localStorage
export default {
    install(Vue) {
        /**
         * 公共---行政区域列表查询
         */
        Vue.prototype.$ajax_gCityList = data => {
            console.log("ajax_gCityList----",data)
            return axios({
                method: 'get',
                headers: {
                    // token: Vue.prototype.g_storage.token
                    token:'fbfe48d0-42b0-44ea-8b53-5083ed1d7882'
                },
                url: API__MOB + '/common/areaCode/query',
                params: data
            })
        }
    }
}
