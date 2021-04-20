<style lang="scss"> @import "./header.scss"; </style>
<template>
      <div class="MobApp-header">
            <div class="logo-content">
                <div class="logo-content-img"><img src="static/images/logo-header.png" alt=""></div>
                <span>{{ product_name }}</span>
            </div>
            <div class="middle-content">
                <ul class="header-nav">
                    <li v-for='(item,index) in headerNavData' :key='item.id'>{{item.name}}</li>
                </ul>
            </div>
        </div>
</template>



<script> import header from './header';export default header;</script>

