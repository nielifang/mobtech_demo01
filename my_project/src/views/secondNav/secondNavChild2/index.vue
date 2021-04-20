<template>
<div class="secondNavChild2Page">
    <h5>数据组展示样式</h5>
    <div class='mob-page-statistics'>
        <Row>
            <Col span='8'>
                <div class="left-top">
                    <Row>
                        <Col span='6'><div class="title"><span>任务总数</span></div>
                        <div class="count"><span>{{dataList.taskCount}}</span></div></Col>
                        <Col span='6'><div class="title"><span>失败数</span></div>
                        <div class="count lost"><span>{{dataList.lostCount}}</span></div></Col>
                        <Col span='6'><div class="title"><span>超时数</span></div>
                        <div class="count overtime"><span>{{dataList.overtimeCount}}</span></div></Col>
                        <Col span='6'><div class="title"><span>等待线程数</span></div>
                        <div class="count waitLine"><span>{{dataList.waitLineCount}}</span></div></Col>
                    </Row>
                </div>
            </Col>
            <Col span='8'>
                 <div class="middle-top">
                    <Row>
                        <Col span='8'><div class="icon share"></div>
                            <div class="title"><span>分享</span></div>
                            <div class="count"><span>{{dataList.share}}</span></div>
                        </Col>
                        <Col span='8'><div class="icon authuser"></div>
                            <div class="title"><span>授权数</span></div>
                            <div class="count"><span>{{dataList.authuser}}</span></div>
                        </Col>
                        <Col span='8'><div class="icon backflow"></div>
                            <div class="title"><span>回流数</span></div>
                            <div class="count"><span>{{dataList.backflow}}</span></div>
                        </Col>
                       
                    </Row>
                </div>
            </Col>
            <Col span='8'>
                <div class="right-top"><h5>数据类型总名称</h5>
                <div class="count">123,000</div>
                <div class="details">
                    <span>同比：12% <i class="icon up"></i></span>
                    <span>同比：10% <i class="icon drop"></i></span>
                </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col span='6'>
                <div class="middle-content">
                    <div class='middle-icon share'></div>
                        <div class='middle-detail'><span>分享数2</span>
                        <div class="count">{{dataList.share}}</div>
                        </div>
                </div>
            </Col>
            <Col span='6'>
                <div class="middle-content">
                    <div class='middle-icon authuser'></div>
                        <div class='middle-detail'><span>授权数2</span>
                        <div class="count">{{dataList.authuser}}</div>
                        </div>
                </div>
            </Col>
            <Col span='6'>
                <div class="middle-content">
                    <div class='middle-icon backflow'></div>
                        <div class='middle-detail'><span>回流数2</span>
                        <div class="count">{{dataList.backflow}}</div>
                        </div>
                </div>
            </Col>
            <Col span='6'>
                 <div class="middle-content">
                    <div class='middle-icon backflow-rate'></div>
                        <div class='middle-detail'><span>意向分享</span>
                        <div class="count">{{dataList.backflow}}</div>
                        </div>
                </div>
            </Col>
        </Row>
    
    <div class="chart-wrap">
        <Row>
            <Col span='12'>
                <div class="line-title">
                    <span>曲线图</span>
                     <el-date-picker 
                        v-model="value1"
                        type="daterange"
                        align="right"
                        unlink-panels
                        range-separator="--"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options="pickerOptions">
                    </el-date-picker>
                        <lineChart id="line-chart" :data="lineData"></lineChart>
                </div>

            </Col>
            <Col span='12'>
                <div class="ring-title">
                    <span>环形图</span>
                     <el-date-picker 
                        v-model="value2"
                        type="daterange"
                        align="right"
                        unlink-panels
                        range-separator="--"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options="pickerOptions">
                    </el-date-picker>
                </div>
                <doughnut id="doughnut-chart" :data="doughnutData"></doughnut>
            </Col>
        </Row>
    </div>
    </div>

</div>
</template>
<script>import secondNavChild2 from './secondNavChild2';export default secondNavChild2</script>
<style lang=scss scoped>


</style>