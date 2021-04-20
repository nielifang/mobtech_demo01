<style lang='scss'> @import './leftMenu.scss' </style>
<template>
    <div class="MobApp-leftnav">
       <el-menu
            class="mob-left-submenu mob-scrollbar"
            :default-active="active"
            @select="selectMenu"
            unique-opened
            text-color="#fff">
            <template v-for="item in munus">
                <el-menu-item v-if="item.children.length<1" :key="item.name" :index="item.name" style="padding-left: 16px;">
                    <i class="mob-submenu-icon"><img :src="'static/images/'+item.meta.icon"></i>
                    <!-- <i class="el-icon-s-home"></i> -->
                    <span slot="title">{{ item.meta.currentName }}</span>
                </el-menu-item>
                <el-submenu v-else :key="item.name" :index="item.name">
                    <template slot="title">
                        <i class="mob-submenu-icon"><img :src="'static/images/'+item.meta.icon"></i>
                        <span slot="title">{{ item.meta.currentName }}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item v-for="last in item.children" :key="last.name" :index="last.name">{{ last.meta.currentName }}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>import leftMenu from './leftMenu'; export default leftMenu</script>

