<template>
    <div class="raining-detail">
        
        <div class="raining-table">
            
            <img :src="logo" class="logo-img">
            <el-row>
                <h3 class="header">
                培训申请单
            </h3>
            <div class="display-table">
                <div class="table-cell"> 流程编号：<span>898988868942358988</span></div>
                <div  class="table-cell"> 申请时间：<span>2018.10.25</span></div>
            </div>
            <table class="table-center" border="1" cellspacing="0" cellpadding="0">
            <tr>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">
                    <span>主题</span></p>
                </td>
                <td width=415 colspan=3 align=middle class="border ">
                <p class="text-left"></p>
                </td>
            </tr>
            <tr>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">申请人</p></td>
                <td width=200 align=middle class="border">
                <p class="text-left">aaaa</p></td>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">员工编号</p></td>
                <td width=200 align=middle class="border">
                <p class="text-left">AAAAAAAAAA ddsafafsd</p></td>
            </tr>
            <tr>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">所属单位</p></td>
                <td width=200 align=middle class="border">
                <p class="text-left">BBBBB</p></td>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">所属部门</p></td>
                <td width=200 align=middle class="border">
                <p class="text-left">CCCCCCCCCC</p></td>
            </tr>
            <tr>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">职务</p></td>
                <td width=200 align=middle class="border">
                <p class="text-left">职务AAABBBCCC</p></td>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">职级</p></td>
                <td width=200 align=middle class="border">
                <p class="text-left">P9</p></td>
            </tr>
            <tr>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">组织名称</p></td>
                <td width=200 align=middle class="border">
                <p class="text-left">信息技术</p></td>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">机构名称</p></td>
                <td width=200 align=middle class="border">
                <p class="text-left">信息技术管理员</p></td>
            </tr>
            <tr>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">项目类别</p></td>
                <td width=200 align=middle class="border">
                <p class="text-left">A</p></td>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">项目名称</p></td>
                <td width=200 align=middle class="border">
                <p class="text-left">portal管理后台</p></td>
            </tr>
            <tr>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">
                    <span>培训类型</span></p>
                </td>
                <td width=415 colspan=3 align=middle class="border ">
                <p class="text-left">
                    <el-checkbox>个人培训</el-checkbox>
                    <el-checkbox>部门/机构培训</el-checkbox>
                    <el-checkbox>公司培训</el-checkbox>
                </p>
                </td>
            </tr>
            <tr class="center-header">
                <td width=553 colspan=4 align=middle class="border">
                <p class="text-left text-center">
                    <span>培训信息</span></p>
                </td>
            </tr>
            <tr>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">
                    <span>培训时间</span></p>
                </td>
                <td width=415 colspan=3 align=middle class="border ">
                <p class="text-left">
                    <span>从2018年9月18至2020年9月17日</span>
                    <span>共365天</span> 
                </p>
                </td>
            </tr>
            <tr>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">课程名称</p></td>
                <td width=200 align=middle class="border">
                <p class="text-left">信息技术课程</p></td>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">培训单位</p></td>
                <td width=200 align=middle class="border">
                <p class="text-left">央广新闻</p></td>
            </tr>
            <tr>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">培训性质</p>
                </td>
                <td width=200 align=middle class="border">
                        <p class="text-left">
                            <el-checkbox>内训</el-checkbox>
                            <el-checkbox>外训</el-checkbox>
                        </p>
                </td>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">培训地点</p></td>
                <td width=200 align=middle class="border">
                <p class="text-left">北京市朝阳区百子湾南路甲75号</p></td>
            </tr>
            <tr>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">是否有证书</p></td>
                <td width=200 align=middle class="border">
                    <p class="text-left">
                            <el-checkbox>是</el-checkbox>
                            <el-checkbox>否</el-checkbox>
                    </p>
                </td>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">证书名称</p></td>
                <td width=200 align=middle class="border">
                <p class="text-left">信息技术培训师一级</p></td>
            </tr>
            <tr >
                <td width=200 rowspan=2 align=middle class="border">
                <p class="text-left text-right">
                    <span>参训人员名单及人数</span>
                </p>
                </td>
                <td width=415 colspan=3 align=middle class="border">
                <p class="text-left">
                    <span>尹鹏孝</span>
                    <span>尹鹏孝</span></p>
                </td>
            </tr>
            <tr style='height:16.5pt'>
                <td width=415 colspan=3 align=middle class="border">
                <p class="text-left">
                    <span>共计 2 人</span></p>
                </td>
            </tr>
            <tr>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">
                    <span>课程内容</span>
                </p>
                </td>
                <td width=415 colspan=3 align=middle class="border">
                <p class="text-left">
                    <span>说你的话做你的是成为你想侧后方那位的人</span></p>
                </td>
            </tr>
            <tr>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">
                    <span>培训目标</span>
                </p>
                </td>
                <td width=415 colspan=3 align=middle class="border">
                <p class="text-left">
                    <span>上班族</span></p>
                </td>
            </tr>
            <tr>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">
                    <span>所需资源</span>
                </p>
                </td>
                <td width=415 colspan=3 align=middle class="border">
                <p class="text-left">
                    <span>网络，计算机，投影，麦克风，手机</span>
                </p>
                </td>
            </tr>
            <tr style='height:14.25pt'>
                <td width=200 rowspan=4 align=middle class="border">
                <p class="text-left text-right">
                    <span>所需费用（根据需要可另付费用预算清单）</span>
                </p>
                </td>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">
                    <span>培训学费（含讲师费）</span></p>
                </td>
                <td width=277 colspan=2 align=middle class="border">
                <p class="text-left">
                    <span>fff fdsaj jdsfa j</span></p>
                </td>
            </tr>
            <tr style='height:11.25pt'>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">
                    <span>考证费</span></p>
                </td>
                <td width=277 colspan=2 align=middle class="border">
                <p class="text-left">
                    <span>189.00元</span></p>
                </td>
            </tr>
            <tr style='height:9.0pt'>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">
                    <span>差旅费（预估）</span></p>
                </td>
                <td width=277 colspan=2 align=middle class="border">
                <p class="text-left">
                    <span>2389.00元</span></p>
                </td>
            </tr>
            <tr style='height:9.0pt'>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">
                    <span>其他（餐费等）</span></p>
                </td>
                <td width=277 colspan=2 align=middle class="border">
                <p class="text-left">
                    <span>1987.00元</span></p>
                </td>
            </tr>
            <tr>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">
                    <span>费用总计</span>
                </p>
                </td>
                <td width=200 align=middle class="border">
                <p class="text-left">
                    <span>9999.00</span></p>
                </td>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">
                    <span>费用大写</span></p>
                </td>
                <td width=200 align=middle class="border">
                <p class="text-left">
                    <span>久谦九百九十九</span></p>
                </td>
            </tr>
            <tr>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">
                    <span>是否签署培训协议（≥5000必须签署）</span>
                </p>
                </td>
                <td width=200 align=middle class="border">
                <p class="text-left">
                            <el-checkbox>是</el-checkbox>
                            <el-checkbox>否</el-checkbox>
                    </p>
                </td>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">
                    <span>培训年限</span></p>
                </td>
                <td width=200 align=middle class="border">
                    <p class="text-left">***年</p>
                    <p class="text-left">（自培训结束之日算起）</p>
                </td>
            </tr>
            <tr>
                <td width=200 align=middle class="border">
                <p class="text-left text-right">
                    <span>备注</span>
                </p>
                </td>
                <td width=415 colspan=3 align=middle class="border">
                <p class="text-left">
                    <span>beilbbi带你非飞到家</span></p>
                </td>
            </tr>
            <tr>
                <td width=553 colspan=4 align=middle class="border">
                <p class="text-left">
                    <span>填写表单注意事项：</span></p>
                <p class="text-left">
                    <span>1、请根据个人所属 部门选择字段“组织名称”和“机构名称”。</span></p>
                <p  class="text-left">
                    <span>2、如字段“组织名称”为“建设中心”和 “物业管理”，请选择字段“项目类别”和“项目名称”。</span></p>
                <p  class="text-left">
                    <span>3、 如发起非本机构流程请将字段“所属部门”，选择为所需机构下的部门。</span></p>
                </td>
            </tr>
            </table>
   
            </el-row>
        </div>
        <el-button class="no-print" @click="pagePrint">打印</el-button>
    </div>
</template>
<script>
export default {
    name:"trainingTable",
    data(){
        return{
            logo:'../../static/img/bg-logo.jpg',
            //流程编号
            num:898988868942358988,
             //流程编号
            applacationTime:'2018.10.25',
            //申请主题
            topic:'培训申请表单',

        }
    },
    created(){},
    mounted(){

    },
    methods:{
        pagePrint(){
            window.print()
        }
    }
}
</script>

<style scoped>
    table,td,tr,span,p,th,div{
        padding: 0;
        margin: 0;
        font-family:"Microsoft YaHei",Arial,Helvetica,sans-serif,"SimSun";
        font-size: 14px;
        color: #111;
    }
    @media print {
        .no-print{
            display:none;
        }
    }
    @page {
        margin: 14mm 18mm 10mm; 
        size: 20.1cm 29.7cm;
        page-break-inside: avoid;
        page-break-before: always;
    }
    .logo-img{
        position: absolute;
        left: 0;
        width: 75px;
        height: 22px;
        left: 108px;
    }
   .raining-detail{
        background: url(../../static/img/back.gif) repeat;
    }
    .raining-table{
        width: 1024px;
        background: rgba(255,255,255,0.8);
        margin: 20px auto;
        border: 1px solid #c6e8fc;
        border-radius: 8px;
        padding: 20px 0 60px;
        position: relative;
    }
    .header{
        width: 806px;
        margin: 0 auto;
        font-size: 18px;
    }
    .center-header{
        background-color: #c6e8fc;
        color: #fff;
        height:40px;
    }
    .border{
        border:solid #c6e8fc 1px;
    }
    .table-center{
        border-collapse:collapse;border:none;
        margin: 0 auto;
        min-width: 806px;
        background: #fff;
    }

    .display-table{
        display: table;
        margin: 10px auto;
        width: 806px;
    }
    .table-cell{
        display: table-cell;
        text-align: left;
    }
    .text-left{
        text-align: left;
        padding: 5px;
    }
    .text-right{
        text-align: right;
        padding: 5px;
        font-weight: 600
    }
    .text-center{
        text-align: center;
    }
</style>

