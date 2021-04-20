<template>
  <div id="MobApp">
    <HeaderMenu :product_name="productName"></HeaderMenu>
    <div class="maincontent">
      <leftMenu></leftMenu>
       <div class="MobApp-page">
         <div class="MobApp-page-header">
              <div class="mob-area">
                <div class="mob-area-tit"><span>{{ parentName }}</span>/<span>{{ currentName }}</span></div>
              </div>
            </div>
       <router-view></router-view>
       </div>
    </div>
    
  </div>
</template>

<script>
import leftMenu from '@/components/common/leftMenu'
import HeaderMenu from '@/components/common/header'
export default {
  name: 'MobApp',
  components:{
    leftMenu:leftMenu,
    HeaderMenu
  },
  data(){
    return{
      productName:'XXX管理信息系统',
      parentName: this.$route.meta.parentName,
      currentName: this.$route.meta.currentName,
      
    }
  }

}
</script>


