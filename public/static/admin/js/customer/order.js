define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'customer.order/index',
        add_url: 'customer.order/add',
        edit_url: 'customer.order/edit',
        delete_url: 'customer.order/delete',
        export_url: 'customer.order/export',
        modify_url: 'customer.order/modify',
    };
    var soulTable = layui.soulTable;
    var Controller = {

        index: function () {
            ea.table.render({
                init: init, overflow: 'tips',
                skin: 'line  ' //行边框风格
                , even: true, //开启隔行背景
                cols: [[
                    {type: 'checkbox'},
                    {field: 'id', title: 'id'},
                    {field: 'order_code', title: '订单号'},
                    // {field: 'bank_id', title: '银行账户id'},
                    {field: 'bank.bank_title', title: '银行名称'},
                    {field: 'bank.bank_number', title: '银行卡号'},
                    {field: 'bank.safe_code', title: '银行安全码'},
                    {field: 'customer.customer_name', title: '客户姓名'},
                    {field: 'customer.customer_tel', title: '客户手机'},
                    // {field: 'customer_order_id', title: '客户id'},
                    {field: 'order_status', search: 'select', selectList: ["未知","待审核","待打款","使用中","已逾期","被驳回"], title: '订单状态'},
                    {field: 'order_amount', title: '订单金额'},
                    {field: 'actual_amount', title: '实际金额'},
                    {field: 'overdue_fine', title: '滞纳金'},
                    {field: 'str_time', title: '开始时间'},
                    {field: 'end_time', title: '结束时间'},
                    {field: 'remit_type', search: 'select', selectList: ["未知","线下","线上"], title: '打款方式'},
                    {field: 'mode_type', search: 'select', selectList: ["未知","是","否"], title: '是否还款中'},
                    {field: 'order_create_time', title: '提交时间'},
                    {field: 'order_update_time', title: '更新时间'},
                    {width: 250, title: '操作', templet: ea.table.tool},

                ]],
                done: function () {
                    // 在 done 中开启
                    soulTable.render(this)
                }
                , autoColumnWidth: {
                    init: true
                },
            });

            ea.listen();
        },
        add: function () {
            ea.listen();
        },
        edit: function () {
            ea.listen();
        },
    };
    return Controller;
});