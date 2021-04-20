<template>
<div id="content">
    <div  class="mob-area-con">
    <el-dropdown trigger="click" ref="selectCityRef" style="width: 100%;">
            <el-input v-model="city.city" suffix-icon="el-icon-arrow-down" readonly size="small" style="width: 100%;" placeholder="请选择城市"></el-input>
            <el-dropdown-menu slot="dropdown" class="mob-scrollbar" style="max-height: 260px; width: 200px;">
                <el-form label-position="top" label-width="45px" style="padding: 5px 15px;">
                    <el-form-item label="热门城市:">
                        <ul class="home-hot-list">
                            <li v-for="item in city.hotList" @click="selectCity(item)" :key="item.label">{{ item.label }}</li>
                        </ul>
                    </el-form-item>
                    <el-form-item label="城市选择:">
                        <ul class="home-letters-list">
                            <li v-for="item in city.lettersCityList" :key="item.firstLetter">
                                <div class="home-letters-value">{{ item.firstLetter }}</div>
                                <div class="home-letters-areas">
                                    <div v-for="province in item.value" :key="province.value">
                                        <div class="home-letters-province">{{ province.label }}:</div>
                                        <div class="home-letters-city">
                                            <div v-for="city in province.children" @click="selectCity(city)" :class="{'active':citySelect[1].name==city.label}" :key="city.value.code">{{ city.label }}</div>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </el-form-item>
                </el-form>
            </el-dropdown-menu>
        </el-dropdown>
     </div>

     <div class="business-map" id="map-home" style="width:100%;height:100%"></div>

    </div>
</template>

<script>import secondNavChild1 from './secondNavChild1';export default secondNavChild1</script>
<style lang=scss scoped>
.home-hot-list{
    >li {
        float: left;
        line-height: 24px;
        margin: 0 8px 5px 0;
        font-size: 12px;
        line-height: 24px;
        color: #fff;
        cursor: pointer;
        &:hover,&.active{
            color: #008c89;
        }
    }
}
</style>