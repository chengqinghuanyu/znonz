<template>
    <button type="primary" @click="exportTable()">导出Excel</button>
</template>
<script>

export default {
    data(){
        return {
            tableData:[{
                num:1000, 
                name:'aaaaaaaaaaaa',
                words:'sssdbkda', 
                shuiwu_num:11111
            }],
            DefaultData:{
                exportExcelMax:1000
            },
            totals:100,
            formInline:{
                phoneNo:1,
                userName:'ypx',
                amount:'11111',
                fee:20
            },
            currentPage:1,
            ApiSetting:{
                orderExport:'/excel'
            }
        }
    },
    methods:{
        // exportTable() {
        // require.ensure([], () => {
        //   const { export_json_to_excel } = require('../vendor/Export2Excel');
        //     const tHeader = ['供应商编号', '供应商名称', '输入代码', '税务代码'];
        //     const filterVal = ['num', 'name', 'words', 'shuiwu_num'];
        //     const list = this.tableData;
        //     const data = this.formatJson(filterVal, list);
        //     export_json_to_excel(tHeader, data, '供应商名称列表');
        //   })
        // },
        // formatJson(filterVal, jsonData) {
        //   return jsonData.map(v => filterVal.map(j => v[j]))
        // }

        /**
 * excel导出
 */
        exportTable () {
        // this.DefaultData.exportExcelMax限制一下导出的总条数
        if (this.totals <= this.DefaultData.exportExcelMax) {
        this.$confirm('确定要导出当前<strong>' + this.totals + '</strong>条数据？', '提示', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消'
        }).then(() => {
            this.getExpportData()
        }).catch(() => {

        })
        } else {

        this.$confirm('当前要导出的<strong>' + this.totals + '</strong>条数据，数据量过大，不能一次导出！<br/>建议分时间段导出所需数据。', '提示', {
            dangerouslyUseHTMLString: true,
            showCancelButton: false
        }).then(() => {

        }).catch(() => {
                //debugger;
        })
        }
        },
        
        /**
         * 对导出数据格式处理
         */
        formatJson (filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => v[j]))
        },
        
        /**
         * 导出的列表数据
         */
        getExpportData: function () {
           // debugger
            const loading = this.$loading({
                lock: true,
                text: '正在导出，请稍等......',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
            const data = {
                phoneNo: this.formInline.phoneNo,
                userName: this.formInline.userName,
                amount: this.formInline.amount,
                fee: this.formInline.fee,
                currentPage: this.currentPage,
                pageSize: this.DefaultData.exportExcelMax
            }
            // 这里封装了axios，根据自身情况修改即可
            this.http.post(
                this.ApiSetting.orderExport,
                data
            ).then((res) => {
                //debugger
                // handleDataList这里可以对导出的数据根据需求做下处理
                const handleDataList = res.data.list
                for (let i in res.data.list) {
                handleDataList[i].amount = res.data.list[i].amount * 100
                handleDataList[i].fee = res.data.list[i].fee + '%'
                }
                if (res.data.list.length > 0) {
                    require.ensure([], () => {
                        /* eslint-disable */
                        // 这里的径路要修改正确
                        const { export_json_to_excel } = require('../vendor/Export2Excel')
                        /* eslint-enable */
                        // 导出的表头
                        const tHeader = ['手机号码', '用户姓名', '交易金额', '手续费']
                        // 导出表头要对应的数据
                        const filterVal = ['phoneNo', 'userName', 'amount', 'fee']
                        // 如果对导出的数据没有可处理的需求，把下面的handleDataList换成res.data.list即可，删掉上面相应的代码
                        const data = this.formatJson(filterVal, handleDataList)
                        // this.DefaultData.formatLongDate.getNow()自己写的一个获取当前时间，方便查找导出后的文件。根据需求自行可处理。
                        export_json_to_excel(tHeader, data, '订单查询列表-' + this.DefaultData.formatLongDate.getNow())
                        this.$message({
                        message: '导出成功',
                        duration: 2000,
                        type: 'success'
                        })
                    })
                } else {
                    this.$message({
                        message: '数据出錯，请联系管理员',
                        duration: 2000,
                        type: 'warning'
                    })
                }
                    loading.close()
            }, error => {
                console.log(error)
                loading.close()
                })
        }

    }
}
</script>

